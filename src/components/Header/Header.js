import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={''}>Home Page</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'catsanddogs'}>Cats And Dogs</NavLink>
        </div>
    );
};

export {
    Header
};