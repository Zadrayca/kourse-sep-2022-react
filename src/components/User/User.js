import React from 'react';

import css from './User.module.css';

const User = ({user, getUserId, getUserIdByPost}) => {

    const {id, name} = user;

    return (
        <div className={css.userBox}>
            <div>{id}) {name}</div>
            <div className={css.btnBox}>
                <button onClick={() => getUserId(id)}>Details</button>
                <button onClick={() => getUserId(null)}>Clear Details</button>
                <button onClick={() => getUserIdByPost(null)}>Clear Posts</button>
            </div>
        </div>
    );
};

export {User};
