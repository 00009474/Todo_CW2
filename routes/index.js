const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')

const rootFolder = path.dirname(
	require.main.filename || process.require.main.filename
)

const dbFile = `${ rootFolder }/data/tododata.json`

const indexController = require('../controllers/index')

let todoDb = []

fs.readFile(dbFile, (err, data) => {
	if (!err) {
		todoDb = JSON.parse(data)
	}
})


router.get('/', (req, res) => {
	fs.readFile(dbFile, (err, data) =>{
		const todos = JSON.parse(data)
		res.render('index', { todos: todos })
	})
})

// localhost:3000/add
router.post('/add', (req, res) => {
    const note_todo = {
        id: generateRandomId(),
        body: req.body.title
    }

    todoDb.push(note_todo)
    
	fs.writeFile(dbFile, JSON.stringify(todoDb), (err) => {
        if (err) {
			res.sendStatus(500)
		} else {
			res.redirect('/')
		}
    })
})



// Get By ID
router.get('/add/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const todo = todoDb.find(todo => todo.id === id)

	res.render('todo', {todo: todo})
})


// Delete
router.get('/add/:id/delete', (req, res) => {
	const id = parseInt(req.params.id)

	fs.readFile(dbFile, (err, data) => {
		
		const todoDb = JSON.parse(data)
		const filtereToDoDb = todoDb.filter(todo => todo.id != id)
	
		fs.writeFile(dbFile, JSON.stringify(filtereToDoDb), (err) => {
			if (err) res.sendStatus(500)
	
			res.redirect('/')
		})
	})
})


function generateRandomId() {
	return Math.floor(Math.random() * 99999999999) + 1;
}

module.exports = router;