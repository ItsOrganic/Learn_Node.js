// const chalk = require('chalk')
const validator = require('validator')
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

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if(value<0){
                throw new Error('Age cannot be negative')
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter correct email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password" in it')
            }
        }
    }
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

const me = new User({
    name: 'Shivam',
    age: 20,
    email: 'shivam@abc.com',
    password:"yobro@123"
})


me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})
