import fs from "fs";
import chalk  from "chalk";

function getNotes () {
    return "Your notes....";
}

function addNote (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title == title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log("new Note added!");
    } else {
        console.log("Note title taken!")
    }
}


function removeNote (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title != title)
    saveNotes(notesToKeep);
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed!"));
    } else {
        console.log(chalk.red.inverse("No Note Found!"));
    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []        
    }
}

export {
    getNotes,
    addNote,
    removeNote
}