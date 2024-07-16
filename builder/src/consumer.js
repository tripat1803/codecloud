const { kafka } = require("./kafka-config.js");

async function init(){
    const consumer = kafka.consumer({
        groupId: "consumer-1"
    });

    await consumer.connect();

    await consumer.subscribe({
        topic: "builder-logs"
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(message.value.toString());
        }
    });
}

init();