import React from 'react';

import {Users} from "../../components";
import css from '../Page.module.css';

const UsersPage = () => {
    return (
        <div className={css.Page}>
            <Users/>
        </div>
    );
};

export {
    UsersPage
};