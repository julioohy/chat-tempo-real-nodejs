const WebSocket = require('ws');
const storage = require('./messageStorage');

function initWebSocketServer(httpServer) {
    const wss = new WebSocket.Server({ server: httpServer });

    wss.on('connection', (ws) => {
        console.log('Novo cliente ligado via WebSocket.');

        // 1. Enviar o histórico de mensagens ao novo utilizador
        const previousMessages = storage.loadMessages();
        ws.send(JSON.stringify({
            type: 'HISTORY',
            payload: previousMessages
        }));

        // 2. Escutar novas mensagens enviadas pelo cliente
        ws.on('message', (data) => {
            try {
                const parsedData = JSON.parse(data);

                if (parsedData.type === 'NEW_MESSAGE' && parsedData.text.trim() !== '') {
                    const messageEntry = {
                        id: Date.now(),
                        user: parsedData.user || 'Anónimo',
                        text: parsedData.text.trim(),
                        timestamp: new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })
                    };

                    // Persistir no ficheiro JSON
                    storage.saveMessage(messageEntry);

                    // Difundir a mensagem para todos os clientes ativos
                    const broadcastData = JSON.stringify({
                        type: 'MESSAGE',
                        payload: messageEntry
                    });

                    wss.clients.forEach((client) => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(broadcastData);
                        }
                    });
                }
            } catch (error) {
                console.error('Formato de mensagem inválido:', error);
            }
        });

        ws.on('close', () => {
            console.log('Cliente desligado.');
        });
    });

    return wss;
}

module.exports = initWebSocketServer;
