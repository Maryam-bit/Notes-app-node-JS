import fs from "fs";
import chalk  from "chalk";

const getNotes = () => {
    return "Your notes....";
}

const addNote = (title, body) => {
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

const listingNote = () => {
    const notes = loadNotes();
    console.log(chalk.inverse("Your Notes"));

    notes.forEach(note => {
        console.log(note.title);
    });
    if(!notes.length) {
        console.log(chalk.red.inverse("No Note Found!"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title != title)
    saveNotes(notesToKeep);
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note Removed!"));
    } else {
        console.log(chalk.red.inverse("No Note Found!"));
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = () => {
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
    removeNote,
    listingNote
}