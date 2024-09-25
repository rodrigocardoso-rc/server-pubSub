const amqp = require('amqplib/callback_api');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080, clientTracking: false });

const conversationChannels = {};

amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
        throw err;
    }

    connection.createChannel((err1, channel) => {
        if (err1) {
            throw err1;
        }

        wss.on('connection', (ws) => {
            console.log('Client connected');

            ws.on('message', (message) => {
                const obj = JSON.parse(message);

                if (!conversationChannels[obj.idConversa]) {
                    const queue = obj.idConversa;
                    
                    channel.assertQueue(queue, { durable: false });
                    channel.consume(queue, (msg) => {
                        if (ws.readyState === WebSocket.OPEN) {
                            ws.send(msg.content.toString());
                        }
                    }, {
                        noAck: true
                    });

                    conversationChannels[obj.idConversa] = queue;
                }

                channel.sendToQueue(conversationChannels[obj.idConversa], Buffer.from(message));
            });

            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });
    });
});
