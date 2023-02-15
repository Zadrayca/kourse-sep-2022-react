import {FC} from "react";

import css from '../Page.module.css';

const HomePage:FC = () => {
    return (
        <div className={css.Page}>
            <h1>Home Page</h1>
        </div>
    );
};

export {
    HomePage
};