const chalk = require("chalk");

module.exports.SYS = (text) => {
  return console.log(chalk.white("[SYSTEM] ") + chalk.green(text));
};

module.exports.DB = (text) => {
  return console.log(chalk.white("[DB] ") + chalk.green(text));
};

module.exports.ERROR = (text) => {
  return console(chalk.redBright("[DB] ") + chalk.red(text));
};
