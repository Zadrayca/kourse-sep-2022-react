import React from 'react';

import css from './Post.module.css';

const Post = ({post, getPostIdByPost}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={css.postBox}>
            <div>UserId: {userId}. ID: {id}. Title: {title}. -- Body: {body}.</div>
            {/*<div>Body: {body}.</div>*/}
            <div className={css.btnBox}>
                <button onClick={() => getPostIdByPost(id)}>Comments to Post</button>
                <button onClick={() => getPostIdByPost(null)}>Clear Comments</button>
            </div>
        </div>
    );
};

export {Post};
