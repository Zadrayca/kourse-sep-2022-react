import React from 'react';
import {useEffect, useState} from "react";

import css from './Comments.module.css';
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getComments().then(({data}) => setComments([...data]));
    }, []);

    return (
        <div className={css.CommentsBox}>
            <h1>Comments Page</h1>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {
    Comments
};
