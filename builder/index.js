require("dotenv").config();
const exec = require('child_process').exec;
const { sendMessage } = require("./src/producer");

function executeTask() {
    let execution = exec(`git clone ${process.env.GITHUB_URL} output && cd output && npm i && npm run build`);
    execution.stdout.on("data", (data) => {
        sendMessage("LOG", data);
    });
    execution.stderr.on("data", (data) => {
        sendMessage("WARNING", data);
    });
    execution.stdout.on("error", (data) => {
        sendMessage("ERROR", data);
    });
    execution.on("close", () => {
        sendMessage("LOG", "Build Complete!");
    });
}

executeTask();