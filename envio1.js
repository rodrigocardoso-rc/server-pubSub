// client.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to WebSocket server');

    // Envie uma mensagem para a conversa com ID "12345"
    const message = JSON.stringify({
        idMenssagem: new Date().toString(),
        idConversa: 'aaaaaa',
        idUsuario: 'José',
        nomeUsuario: 'José',
        conteudo: 'msg 1',
        dataHora: new Date(),
    });

    ws.send(message);
    ws.close()
});

// ws.on('message', (message) => {
//     console.log('Received from server: %s', message);
// });

