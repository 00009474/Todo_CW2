const express = require('express');
const router = express.Router();
const fs = require('fs')

const indexController = require('../controllers/index')

let todoDb = []

router.get('/', indexController.getIndex)

router.get ('/add', (req, res) => {
    res.render('index', {show: req.query.success})
})


function generateRandomId() {
	return Math.floor(Math.random() * 99999999999) + 1;
}

router.post('/add', (req, res) => {
    const note_todo = {
        id: generateRandomId(),
        body: req.body.title
    }
    todoDb.push(note_todo)
    fs.writeFile('./data/tododata.json', JSON.stringify(todoDb), (err) => {
        if (err) {
			res.redirect('/add?success=0')
		} else {
			res.redirect('/add?success=1')
		}
    })

})



module.exports = router;