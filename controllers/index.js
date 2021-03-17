const getIndex = (req, res) => {
    res.render('index')
}

const Todo = require('../models/Todo')

const post_index = (req,res) => {
    console.log(req)
    const newTodo = new Todo ({
        title: req.body.title
    })
    newTodo.save((err) => {
        if(err) console.log(err)
        res.redirect('/')
    })
}

module.exports = {
    getIndex: getIndex,
    post_index: post_index 
}