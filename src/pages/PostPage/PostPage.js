import React from 'react';

import {Posts} from "../../components";
import css from '../Page.module.css';

const PostPage = () => {

    return (
        <div className={css.Page}>
            <Posts/>
        </div>
    );
};

export {
    PostPage
};