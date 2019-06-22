const chalk = require('chalk')
const fs = require('fs')

const addNote = (title , body)=>{
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('Note added successfully!'))
    }else{
        console.log(chalk.bgRed('title already taken!'))
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    
    const notestoKeep = notes.filter((note)=>note.title != title)

    if(notes.length > notestoKeep.length){
        console.log(chalk.bgGreen('Note Removed!'))
        saveNotes(notestoKeep)
    }else{
        console.log(chalk.bgRed('Note not found!'))
    }

}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.bgBlue('Your Notes..'))

    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const findNote = notes.find((note) => note.title === title )

    if(findNote){
        console.log(chalk.blue.bold(findNote.title))
        console.log(findNote.body)
    }else{
        console.log(chalk.bgRed("not found"))
    }

}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('Notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('Notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes : readNotes
}