import React, {useEffect, useState} from "react";

import css from './Comments.module.css';
import {Comment} from "../Comment/Comment";
import {commentService} from "../../services";

const Comments = ({postIdByPost}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByPostId(postIdByPost).then(value => setComments(value))
    }, [postIdByPost]);

    return (
        <div className={css.commentBox}>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
};

export {Comments};