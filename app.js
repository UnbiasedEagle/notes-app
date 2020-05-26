const validator = require('validator');
const chalk = require('chalk');
const log = console.log;
const getNotes = require('./notes');

const isEmail = validator.isURL('https://www.google.com');
log(chalk.green(isEmail));
