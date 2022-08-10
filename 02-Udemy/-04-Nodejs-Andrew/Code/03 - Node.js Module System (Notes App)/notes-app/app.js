const getNotes = require('./notes');
const validator = require('validator');
// import chalk from 'chalk'; (Does NOT works in this version)

const chalk = require('chalk');
console.log(chalk.red('Success'));
console.log(
  chalk.hex('#00aa55').bold.inverse.italic('Trying with hex code and extras')
);

console.log(validator.isEmail('daher@something.com'));
console.log(validator.isURL('https://www.linkedin.com/in/daher29/'));

const note = getNotes();
console.log(note);

const add = require('./utils.js');
const sum = add(5, 29);
console.log(sum);
