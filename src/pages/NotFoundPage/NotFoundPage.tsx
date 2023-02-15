import {FC} from "react";

import css from '../Page.module.css';

const NotFoundPage: FC = () => {
    return (
        <div className={css.Page}>
            <h1>Not Found Page</h1>
        </div>
    );
};

export {
    NotFoundPage
};