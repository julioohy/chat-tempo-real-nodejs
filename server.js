const express = require('express');
const http = require('http');
const path = require('path');
const initWebSocketServer = require('./websocketManager');

const app = express();
const server = http.createServer(app);

// Servir os ficheiros estáticos da interface do utilizador
app.use(express.static(path.join(__dirname, 'public')));

// Inicializar o servidor WebSocket anexado ao servidor HTTP
initWebSocketServer(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor HTTP e WebSocket ativo em http://localhost:${PORT}`);
});
