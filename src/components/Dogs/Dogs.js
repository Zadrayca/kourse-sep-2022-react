import React from 'react';

import {Dog} from "../Dog/Dog";
import css from './Dogs.module.css';

const Dogs = ({dogs, dispatch}) => {
    return (
        <div className={css.dogs}>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {
    Dogs
};
