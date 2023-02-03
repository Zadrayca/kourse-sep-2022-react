import React from 'react';

import {Cat} from "../Cat/Cat";
import css from './Cats.module.css';

const Cats = ({cats, dispatch}) => {

    return (
        <div className={css.cats}>
            {cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {
    Cats
};
