// client.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080?idConversa=b4619b');

ws.on('open', () => {
    console.log('Connected to WebSocket server');

    // Envie uma mensagem para a conversa com ID "12345"
    const message = JSON.stringify({
        idMenssagem: new Date().toString(),
        idConversa: '063fe3',
        idUsuario: 'José',
        nomeUsuario: 'José',
        conteudo: 'mozao nn conversa comigo ;-;',
        dataHora: new Date(),
    });

    ws.send(message);
    ws.close()
});

// ws.on('message', (message) => {
//     console.log('Received from server: %s', message);
// });

