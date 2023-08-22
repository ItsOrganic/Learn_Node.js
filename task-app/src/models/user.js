const mongoose = require('mongoose')
const validator = require('validator')
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
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


module.exports = User