require("dotenv").config();
const exec = require('child_process').exec;
// const fs = require("fs/promises");

function executeTask() {
    let execution = exec(`git clone ${process.env.GITHUB_URL} output && cd output && npm i && npm run build`);
    execution.stdout.on("data", (data) => {
        console.log("Task:", data);
    });
    execution.stderr.on("data", (data) => {
        console.log("Warning:", data);
    });
    execution.stdout.on("error", (data) => {
        console.log("Error:", data);
    });
    execution.on("close", () => {
        console.log("Build complete!");
    });
}

executeTask();