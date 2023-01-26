import React from 'react';

import css from './Todo.module.css';

const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className={css.TodoBox}>
            <div>UserId :{userId}</div>
            <div>Id :{id}</div>
            <div>Title :{title}</div>
            <div>Completed :{completed.toString()}</div>
        </div>
    );
};

export {
    Todo
};
