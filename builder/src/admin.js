const { kafka } = require("./kafka-config.js");

async function init(topic) {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Connected to admin");
    
    console.log(`Creating topic ${topic}`);
    await admin.createTopics({
        topics: [
            {
                topic: topic
            }
        ]
    });
    console.log(`Created topic ${topic}`);

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

async function deleteTopic(topic) {
    const admin = kafka.admin();
    await admin.connect();
    console.log("Connected to admin");
    
    console.log(`Deleting topic ${topic}`);
    await admin.deleteTopics({
        topics: [topic]
    });
    console.log(`Deleted topic ${topic}`);

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}

init("builder-logs");
// deleteTopic("build-logs")