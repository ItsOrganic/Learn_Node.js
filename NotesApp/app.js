// const t  = require ('./utils.js')
// const sum = t(4,5);
// console.log(sum);

const chalk = require('chalk')
const yargs = require('yargs');
const getNotes = require('./notes.js');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv) {
            console.log('Title = ' + argv.title)
            console.log('Body = ' + argv.body)
        }       
})
console.log(yargs.argv)