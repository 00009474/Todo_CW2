const express = require('express')

const mongoose = require('mongoose')

const bodyParser = require('body-parser')


// connect to MongoDB
const dbSource = 'mongodb+srv://newuser-todo:test1234@todoapp.rfilj.mongodb.net/todo-database?retryWrites=true&w=majority'
mongoose.connect(dbSource, {useNewUrlParser: true, useUnifiedTopology: true})
    .then ((result) => console.log('connected to db'))
    .catch ((err) => console.log(err));
const app = express()
app.use (bodyParser.urlencoded({ extended: true }))


const indexRoutes = require('./routes/index')
app.use ('/', indexRoutes)

app.set('view engine', 'pug')

app.use('/assets', express.static('./public'))




const port = 3000 
app.listen(port, () => console.log(`Server Started ${port}.` ));

