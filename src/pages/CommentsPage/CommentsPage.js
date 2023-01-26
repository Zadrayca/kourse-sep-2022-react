import React from 'react';
import {Outlet} from "react-router-dom";

import css from './CommentsPage.module.css';
import {Comments} from "../../components";

const CommentsPage = () => {
    return (
        <div className={css.bigBox}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {
    CommentsPage
};
