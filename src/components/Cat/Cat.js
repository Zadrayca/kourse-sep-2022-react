import React from 'react';

import css from './Cat.module.css';

const Cat = ({cat, dispatch}) => {

    const {id, name} = cat;

    return (
        <div className={css.cat}>
            <div>Id: {id}</div>
            <div>Cat name: {name}</div>
            <button onClick={() => dispatch({type: 'DELETE_CAT', payload: id})}>Delete</button>
        </div>
    );
};

export {
    Cat
};
