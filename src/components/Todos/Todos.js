import React, {useEffect, useState} from 'react';

import css from './Todos.module.css';
import {todosService} from "../../services";
import {Todo} from "../Todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getTodos().then(({data}) => setTodos([...data]));
    }, []);

    return (
        <div className={css.TodosBox}>
            <h1>Todos Page</h1>
            {todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {
    Todos
};
