import React from 'react';

import css from './Comment.module.css';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className={css.commentBox}>
            <div>PostId: {postId}.</div>
            <div>ID: {id}.</div>
            <div>Name: {name}.</div>
            <div>Email: {email}.</div>
            <div>Body: {body}.</div>
        </div>
    );
};

export {Comment};
