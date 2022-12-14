import chalk  from "chalk";
import yargs from "yargs";
import { addNote, removeNote, listingNote, readNote } from "./notes.js"
const YARGS = (yargs)(process.argv.slice(2))

// customize yargs version
YARGS.version('1.1.0')


// create add command using yargs
YARGS.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: ((argv) => {
        addNote(argv.title, argv.body);
    })
})

// create a remove command
YARGS.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note to remove",
            demandOption: true,
            type: 'string'
        }
    },
    handler: ((argv) => {
        removeNote(argv.title);
    })
})

// create a read command
YARGS.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "Note to read",
            demandOption: true,
            type: "string"
        }
    },
    handler: ((argv) => {
        readNote(argv.title);
    })
})

// create a list command
YARGS.command({
    command: "list",
    describe: "List your notes",
    handler: (() => {
        listingNote();
    })
})

YARGS.parse()