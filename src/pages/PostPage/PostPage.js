import React from 'react';

import css from './PostPage.module.css';
import {Posts} from "../../components";
import {useParams} from "react-router-dom";

const PostPage = () => {

    const {postId} = useParams();

    return (
        <div className={css.bigBox}>
            <Posts postId={postId}/>
        </div>
    );
};

export {
    PostPage
};
