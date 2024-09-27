// client.js
const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080?idConversa=eeeeee&dataHoraCriacao=1727397767156&nome=ConversDAS DAS DSAa3&descricao=Desc');

ws.on('open', () => {
    console.log('Connected to WebSocket server');

    /*
        // Envie uma mensagem para a conversa com ID "12345"
        const message = JSON.stringify({
            idMenssagem: new Date().toString(),
            idConversa: 'bbbbbb',
            idUsuario: 'José',
            nomeUsuario: 'José',
            conteudo: 'mozao nn conversa comigo ;-;',
            dataHora: new Date(),
        });
    
        ws.send(message);
        ws.close() */
});

// ws.on('message', (message) => {
//     console.log('Received from server: %s', message);
// });

