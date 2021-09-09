import express from "express";
const router = express.Router();
import pool from './db.js';


// ROUTES //

// Create a todo
router.post("/todos", async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",
			[description]);
		// returning * to get back data
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// get all todos

router.get("/todos", async (req, res) => {
	try {
		const allTodos = await pool.query("SELECT * FROM todo");
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});


// get a todo

router.get("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

// update a todo

router.put("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

		res.json("Todo was updated");
	} catch (err) {
		console.error(err.message);
	}
});

// remove a todo

router.delete("/todos/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
		res.json("Todo was deleted");
	} catch (err) {
		console.error(err.message);
	}
});

export default router;