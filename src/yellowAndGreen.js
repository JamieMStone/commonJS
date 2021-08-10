const chalk = require("chalk");

function yellow() {
    console.log(chalk.yellow("blue"));
}

function green() {
    console.log(chalk.green("blue"));
}

module.exports = { yellow, green };
