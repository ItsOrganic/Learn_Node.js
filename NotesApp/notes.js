const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
    return "Your notes"
}

//Add a note in the notes app


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


//Remove a note from the notes app
const removeNote = function(title){
    const notes = loadNote()
    const keepNotes = notes.filter(function(note){
        return note.title !== title
    });
    if(notes.length === keepNotes.length)
    console.log(chalk.red.inverse("!! No Notes found !!"))
    else
    console.log(chalk.green.inverse("!! A Note found!!"))
    saveNotes(keepNotes)
}




//Save the notes in the notes.json file in the notes app
const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson);
}



//Load the notes for others to use and read in the notes app
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
    getNotes: getNotes,
    removeNote: removeNote
}