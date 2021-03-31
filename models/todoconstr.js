const fs = require('fs')

class TodoRepository {
	constructor(){
		this.todoDb = []

		fs.readFile('./data/tododata.json', (err, data) => {
			if (!err) {
				this.todoDb = JSON.parse(data)
			}
		})
	}
    
	add(todo, callback){
		todo.id = this.generateRandomId()
		this.todoDb.push(todo)
		this.updateFile(callback)
	}

	getAllUnarchived() {
		return this.todoDb.filter(todo => !todo.archived)
	}

	getbyId(id) {
		return this.todoDb.find(todo => todo.id === id)
	}

	delete(id, callback) {
		const index = this.todoDb.findIndex(todo => todo.id === id)

		this.todoDb.splice(index, 1)

		this.updateFile(callback)
	}

	generateRandomId() {
		return Math.floor(Math.random() * 99999999999) + 1
	}

	updateFile(callback){
		fs.writeFile('./data/tododata.json', JSON.stringify(this.todoDb), callback)
	}
}

module.exports.TodoRepository = TodoRepository

