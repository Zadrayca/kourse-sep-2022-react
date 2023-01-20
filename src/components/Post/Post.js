import React from 'react';

const Post = ({post, getPostIdByPost}) => {

    const {userId, id, title, body} = post;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => getPostIdByPost(id)}>Comments to Post</button>
            <button onClick={() => getPostIdByPost(null)}>Clear Comments</button>
        </div>
    );
};

export {Post};
