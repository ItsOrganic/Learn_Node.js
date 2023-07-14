const fs = require('fs')

const getNotes = function(){
    return "Your notes"
}
const addNote = function(title, body){
    const notes = loadNote()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    if(duplicateNotes.length === 0){

        notes.push({
            title: title,
            body: body
        })
        console.log("New Note added!")
    }
    else{
        console.log("!! Title already taken !!")
    }

    saveNotes(notes)
}
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson);
}
const loadNote = function() {
    try{

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(err){
        return []
    }
}



module.exports = {
    addNote: addNote,
    getNotes: getNotes
}