import React from 'react';

import {Posts} from "../../components";
import {useLocation, useParams} from "react-router-dom";

const PostPage = () => {

    const {postId} = useParams();

    const {state} = useLocation();

    return (
        <div>
            <Posts postId={postId} state={state}/>
        </div>
    );
};

export {
    PostPage
};
