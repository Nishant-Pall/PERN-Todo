import React, { Fragment, useEffect, useState } from "react";

const ListTodo = () => {
    interface todoVariable {
        todo_id: number;
        description: string;
    }
    // interface setTodoVariable {
    //     todos: todoVariable;
    //     setTodos: (todos: todoVariable) => todoVariable;
    // }
    const [todos, setTodos] = useState<any[]>([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err: any) {
            console.error(err.message);
        }
    };

    const deleteTodo = async (todoId: number) => {
        try {
            const deleteTodo = await fetch(
                `http://localhost:5000/todos/${todoId}`,
                {
                    method: "DELETE",
                    // headers: { "Content-type": "application/json" },
                    // body: JSON.stringify(todoId),
                }
            );
            setTodos(todos.filter((todo) => todo.todo_id !== todoId));
        } catch (err: any) {
            console.error(err.message);
        }
    };

    console.log(todos);

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                     */}
                    {todos.map((todo: todoVariable) => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td>
                                <button className="btn btn-success">
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteTodo(todo.todo_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListTodo;
