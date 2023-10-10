const fs = require("fs");
require("colors");

const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync("./data.json")
        return JSON.parse(notesBuffer.toString())
    } catch (err) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./data.json", JSON.stringify(notes))
    console.log("SUCCESS".brightGreen);
}

const addNote = (title, body) => {
    const allNotes = loadNotes();
    allNotes.push({ title, body });
    saveNotes(allNotes);
}

module.exports = {
    addNote
}