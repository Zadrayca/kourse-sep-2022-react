import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    const navigate = useNavigate()

    return (
        <div className={css.CommentBox}>
            <div>PostId :{postId}</div>
            <div>Id :{id}</div>
            <div>Name :{name}</div>
            <div>Email :{email}</div>
            <div>Body :{body}</div>
            <button onClick={() => navigate(postId.toString())}>Post to comment</button>
        </div>
    );
};

export {
    Comment
};
