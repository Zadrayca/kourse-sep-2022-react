import React, {useEffect, useState} from 'react';
import {Post} from "../Post/Post";
import {postService} from "../../services";

const Posts = ({userIdByPost, getPostIdByPost}) => {

    const [postsUser, setPostsUser] = useState([]);

    useEffect(() => {
        postService.getByUserId(userIdByPost).then(value => setPostsUser(value))
    }, [userIdByPost]);

    return (
        <div>
            {postsUser && postsUser.map(post => <Post key={post.id} post={post} getPostIdByPost={getPostIdByPost}/>)}
        </div>
    );
};

export {Posts};
