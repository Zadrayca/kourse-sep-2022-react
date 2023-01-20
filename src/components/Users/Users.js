import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUserId, getUserIdByPost}) => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then(value => setUsers(value))
    }, []);

    return (
        <div className={css.usersBox}>
            {!!users.length && users.map(user =>
                <User key={user.id} user={user} getUserId={getUserId} getUserIdByPost={getUserIdByPost}/>
            )}
        </div>
    );
};

export {Users};
