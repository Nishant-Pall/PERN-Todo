/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useState, useRef, useEffect } from "react";

const InputTodo: React.FC = () => {
    const [description, setDescription] = useState("");
    const inputRef = useRef<any>();

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body),
            });

            // to refresh after submission
            window.location.href = "/";
        } catch (err: any) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input todo</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
