const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created by NodeJs');

//append to file
fs.appendFileSync('notes.txt', 'This text has been appended by node js');
