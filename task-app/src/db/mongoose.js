// const chalk = require('chalk')
// const validator = require('validator')
// const { MongoDBCollectionNamespace } = require('mongodb');
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useCreateIndexes: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});



// const User = mongoose.model('tasks', {
//     description: {
//         type:String
//     },
//     completed: {
//         type:Boolean
//     }
// })

// const me = new User({
//     description: 'Studying AI/ML',
//     completed: true // Change the age to a valid number
// })




