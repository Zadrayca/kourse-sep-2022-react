import React from 'react';

import css from './Post.module.css';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={css.PostBox}>
            <div>UserId :{userId}</div>
            <div>Id :{id}</div>
            <div>Title :{title}</div>
            <div>Body :{body}</div>
        </div>
    );
};

export {
    Post
};
