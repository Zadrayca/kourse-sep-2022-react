import {NavLink} from "react-router-dom";
import {FC} from "react";

import css from './Header.module.css';

const Header: FC = () => {
    return (
        <div className={css.header}>
            <NavLink to={''}>Home Page</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {
    Header
};