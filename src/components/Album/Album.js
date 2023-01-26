import React from 'react';

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div>
            <div>UserId :{userId}</div>
            <div>Id :{id}</div>
            <div>Title :{title}</div>
        </div>
    );
};

export {
    Album
};
