import React from 'react';

import css from './Main.module.css';
import {Users} from "../Users/Users";
import {Posts} from "../Posts/Posts";
import {useState} from "react";
import {Details} from "../Details/Details";
import {Comments} from "../Comments/Comments";

const Main = () => {

    const [userId, setUserID] = useState(null);

    const getUserId = (id) => {
        setUserID(id)
    }
    console.log(userId);

    const [userIdByPost, setUserIdByPost] = useState(null);

    const getUserIdByPost = (id) => {
        setUserIdByPost(id)
    }
    console.log(userIdByPost);

    const [postIdByPost, setPostIdByPost] = useState(null);

    const getPostIdByPost = (id) => {
        setPostIdByPost(id)
    }
    console.log(postIdByPost);

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
        </div>
    );
};

export {Main};
