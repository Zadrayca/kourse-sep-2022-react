import React, {useEffect, useState} from 'react';

import css from './Posts.module.css';
import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({postId}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getPostById(postId).then(({data}) => setPost(data))
    }, [postId]);

    return (
        <div className={css.PostsBox}>
            <h1>Posts Page</h1>
            {post && <Post post={post}/>}
        </div>
    );
};

export {
    Posts
};
