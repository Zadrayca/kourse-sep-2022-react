import React from 'react';

import css from './Album.module.css';
const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className={css.AlbumBox}>
            <div>UserId :{userId}</div>
            <div>Id :{id}</div>
            <div>Title :{title}</div>
        </div>
    );
};

export {
    Album
};
