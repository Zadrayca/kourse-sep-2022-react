import React from 'react';
import {useEffect, useState} from "react";

import css from './Details.module.css';
import {UserDetails} from "../UserDetails/UserDetails";
import {userService} from "../../services";

const Details = ({userId, getUserIdByPost}) => {

    const [detailsUser, setDetailsUser] = useState();

    useEffect(() => {
        userService.getUserById(userId).then(value => setDetailsUser(value))
    }, [userId]);

    console.log(detailsUser);

    return (
        <div className={css.detailsBox}>
            {detailsUser && <UserDetails getUserIdByPost={getUserIdByPost} detailsUser={detailsUser}/>}
        </div>
    );
};

export {Details};
