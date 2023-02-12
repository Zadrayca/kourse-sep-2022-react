import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={''}>Home Page</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
            {/*<NavLink to={'cars2'}>Cars2</NavLink>*/}
        </div>
    );
};

export {
    Header
};