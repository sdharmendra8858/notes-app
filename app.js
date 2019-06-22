const yargs = require('yargs')
const chalk = require('chalk')
const notes = require('./notes.js')

const command = process.argv
yargs.version('1.1.1')

//create add command
yargs.command({
    command : "add",
    describe : "add a new note",
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            describe : 'Note Body',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title , argv.body)
    }
})

//create remove command
yargs.command({
    command : 'remove',
    describe : 'remove a note',
    builder : {
        title : {
            description : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command : 'list',
    describe : 'list your note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command : 'read',
    describe : 'reads the note',
    builder : {
        title : {
            description : 'reade the note',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)