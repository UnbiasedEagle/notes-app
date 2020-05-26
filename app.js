const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Feature: add,delete,list,read

//add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demand: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demand: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.parse();

//remove command
yargs
  .command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
      title: {
        describe: 'Title of note to be removed',
        demand: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      notes.removeNote(argv.title);
    },
  })
  .parse();

//list command
yargs
  .command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
      notes.list();
    },
  })
  .parse();

//react command
yargs
  .command({
    command: 'read',
    describe: 'Read notes',
    builder: {
      title: {
        describe: 'reading a particular note',
        type: 'string',
        demand: true,
      },
    },
    handler: (argv) => {
      notes.read(argv.title);
    },
  })
  .parse();
