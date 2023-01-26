import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import {Post} from "../Post/Post";

const Posts = ({postId, state}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost({...state})
        } else {
            postsService.getPostById(postId).then(({data}) => setPost(data))
        }
    }, [postId]);


    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {
    Posts
};
