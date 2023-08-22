const express = require('express')
require('./db/mongoose')
const User = require('../src/models/user')

const app = express()
const port = process.env.PORT || 3000


// to use the data sent from postman raw json
app.use(express.json())
app.post('/users', (req,res) => {
    const user = new User(req.body)
    console.log(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})