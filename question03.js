const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

function createLogs() {
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
    process.chdir(logsDir);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `This is log file #${i}`);
        console.log(fileName);
    }
}

function removeLogs() {
    if (fs.existsSync(logsDir)) {
        fs.readdirSync(logsDir).forEach(file => {
            fs.unlinkSync(path.join(logsDir, file));
            console.log(`delete files...${file}`);
        });
        fs.rmdirSync(logsDir);
        console.log("Logs directory removed");
    } else {
        console.log("No Logs directory found");
    }
}


const action = process.argv[2]; 

if (action === "add") {
    createLogs();
} else if (action === "remove") {
    removeLogs();
} else {
    console.log("Usage: node question03.js add | remove");
}
