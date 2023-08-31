const express = require('express')
require('./db/mongoose')
const User = require('../src/models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000


// to use the data sent from postman raw json
app.use(express.json())
app.post('/users', async(req,res) => {
    const user = new User(req.body)
    console.log(req.body)
    // user.save().then(() => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
    try{
        const users= await user.save()
        res.status(201).send(user)
    }
    catch(e){
        res.status(500).send(e)
    }
})

app.get('/users', async (req,res)=>{
    try{
        const user = await User.find({})
        res.status(201).send(user)
    }
    catch(e) {
        res.send(500).send(e)
    }
})

app.get('/users/:id', (req,res) => {
    const _id = req.params.id
    try{
        const user = User.findById(_id)
            if(!user){
                return res.status(404).send()
            }
            res.send(user)
        }
        catch(e){
            res.status(500).send(e)
        }   
})


app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.send(task)
    }
    catch(error){
        // console.log("error has hit")
        res.status(400).send(error)
}
})

app.get('/tasks', async (req,res) => {
    try{
        const task = await Task.find({})
        res.status(201).send(task)
    }
    catch(error) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id
    try{
        const task = await Task.findById(_id)
        res.send(task)
    }
    catch(e){
        res.status(500).send(e)
    }   
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
