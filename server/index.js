const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/todo')

const uri = 'mongodb+srv://omethkariyawasam07:gIFvVpofjIj1yjeH@cluster0.qoltk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(uri)

app.post('/add', (req, res) =>{
    const task =req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})