// import * as fs from 'fs';

const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Andrew.');

// fs.appendFileSync("notes.txt", " I live in Philadelphia.");

fs.appendFileSync(
  'notes.txt',
  '\n Hi, I am Mohammed trying "appendFileSync" (this add new content each time you run).'
);

// fs.writeFileSync('notes.txt', 'write again (this replace previews code)');
