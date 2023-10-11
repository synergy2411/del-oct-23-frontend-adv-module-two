const fs = require("fs");
require("colors");

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("./data.json");
    return JSON.parse(notesBuffer.toString());
  } catch (err) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("./data.json", JSON.stringify(notes));
  console.log("SUCCESS".brightGreen);
};

const addNote = (title, body) => {
  const allNotes = loadNotes();

  const position = allNotes.findIndex(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (position === -1) {
    allNotes.push({ title, body });
    saveNotes(allNotes);
    return;
  }

  console.log("Duplicate Title. Try Again!".red);
};

module.exports = {
  addNote,
};
