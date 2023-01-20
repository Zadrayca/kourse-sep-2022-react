import React, {useState} from 'react';

import css from './Main.module.css';
import {Users} from "../Users/Users";
import {Posts} from "../Posts/Posts";
import {Details} from "../Details/Details";
import {Comments} from "../Comments/Comments";
import {Rockets} from "../Rockets/Rockets";

const Main = () => {

    const [userId, setUserID] = useState(null);

    const getUserId = (id) => {
        setUserID(id)
    }

    const [userIdByPost, setUserIdByPost] = useState(null);

    const getUserIdByPost = (id) => {
        setUserIdByPost(id)
    }

    const [postIdByPost, setPostIdByPost] = useState(null);

    const getPostIdByPost = (id) => {
        setPostIdByPost(id)
    }

    return (
        <div className={css.main}>
            <div className={css.topBox}>
                <Users userId={userId} getUserId={getUserId} getUserIdByPost={getUserIdByPost}/>
                {userId && <Details userId={userId} getUserIdByPost={getUserIdByPost}/>}
                {userIdByPost && <Posts userIdByPost={userIdByPost} getPostIdByPost={getPostIdByPost}/>}
            </div>

            <div className={css.comments}>
                {postIdByPost && <Comments postIdByPost={postIdByPost}/>}
            </div>
            <div className={css.rockets}>
                <Rockets/>
            </div>
        </div>
    );
};

export {Main};
