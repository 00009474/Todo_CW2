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
    
}

