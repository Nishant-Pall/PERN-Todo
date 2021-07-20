const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

//middleware for interacting with client
app.use(cors())
// allowing us to get access as request.body which contains
// data from client
app.use(express.json())


// ROUTES //

// Create a todo

app.post("/todos", async (req, res) => {
	try {
		const { description } = req.body
		const newTodo = await pool.query("INSERT INTO todo(description VALUES($1))",
			[description])
	} catch (err) {
		console.error(err.message);
	}
})

// get all todos


// get a todo

// update a todo

// remove a todo

app.listen(5000, () => {
	console.log('server has started');
})