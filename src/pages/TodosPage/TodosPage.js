import React from 'react';

import css from './TodosPage.module.css';
import {Todos} from "../../components";

const TodosPage = () => {
    return (
        <div className={css.todos}>
            <Todos/>
        </div>
    );
};

export {
    TodosPage
};
