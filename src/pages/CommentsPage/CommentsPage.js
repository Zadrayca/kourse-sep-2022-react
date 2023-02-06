import React from 'react';

import {Comments} from "../../components";
import css from '../Page.module.css';

const CommentsPage = () => {
    return (
        <div className={css.Page}>
            <Comments/>
        </div>
    );
};

export {
    CommentsPage
};