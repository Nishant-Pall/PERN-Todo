import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

const App: React.FC = () => {
    return (
        <Fragment>
            <div className="container">
                <InputTodo />
                <ListTodo />
            </div>
        </Fragment>
    );
};

export default App;
