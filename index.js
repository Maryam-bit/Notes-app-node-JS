import chalk  from "chalk";
import yargs from "yargs";
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
    handler: function (argv) {
        console.log("Title: ", argv.title);
        console.log("Body: ", argv.body);
    }
})

// create a remove command
YARGS.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("removing the note");
    }
})

// create a read command
YARGS.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("reading a note");
    }
})

// create a list command
YARGS.command({
    command: "list",
    describe: "List your notes",
    handler: function () {
        console.log("listing the notes");
    }
})

YARGS.parse()