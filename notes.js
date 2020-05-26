const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
  return 'Your Notes...';
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicatesNote = notes.find((note) => {
    return note.title === title;
  });
  if (!duplicatesNote) {
    const data = {
      title: title,
      body: body,
    };
    notes.push(data);
    saveNotes(notes);
    console.log('New Note Added');
  } else {
    console.log('Note Already Present');
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (updatedNotes.length === notes.length) {
    console.log(chalk.red('Note not found'));
  } else {
    saveNotes(updatedNotes);
    console.log(chalk.green('Notes Removed'));
  }
};

const list = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note);
  });
};

const read = (title) => {
  const notes = loadNotes();
  const reqNote = notes.find((note) => {
    return note.title === title;
  });
  if (reqNote) {
    console.log(`Title: ${reqNote.title} Body: ${reqNote.body}`);
  } else {
    console.log('Note not present');
  }
};

//Helper Functions
const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataJson = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
  list: list,
  read: read,
};
