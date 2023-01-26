import React from 'react';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div>
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
