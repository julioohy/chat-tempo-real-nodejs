const fs = require('fs');
const path = require('path');

const STORAGE_FILE = path.join(__dirname, 'messages.json');

// Inicializa o ficheiro JSON caso ainda não exista
function initStorage() {
    if (!fs.existsSync(STORAGE_FILE)) {
        fs.writeFileSync(STORAGE_FILE, JSON.stringify([], null, 2), 'utf8');
    }
}

// Lê todas as mensagens guardadas
function loadMessages() {
    initStorage();
    try {
        const rawData = fs.readFileSync(STORAGE_FILE, 'utf8');
        return JSON.parse(rawData);
    } catch (err) {
        console.error('Erro ao ler o ficheiro de mensagens:', err);
        return [];
    }
}

// Adiciona uma nova mensagem e persiste no ficheiro
function saveMessage(message) {
    const messages = loadMessages();
    messages.push(message);
    
    try {
        fs.writeFileSync(STORAGE_FILE, JSON.stringify(messages, null, 2), 'utf8');
    } catch (err) {
        console.error('Erro ao guardar a mensagem:', err);
    }
}

module.exports = {
    loadMessages,
    saveMessage
};
