const { kafka } = require("./kafka-config.js");

async function sendMessage(type, message){
    const producer = kafka.producer();
    await producer.connect();

    await producer.send({
        topic: "builder-logs",
        messages: [
            {
                key: "LOGS",
                value: JSON.stringify({ type, message })
            }
        ]
    });

    await producer.disconnect();
}

module.exports = {
    sendMessage
}