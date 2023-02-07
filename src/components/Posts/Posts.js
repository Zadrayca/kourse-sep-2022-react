import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../reduxs";
import {Post} from "../Post/Post";
import css from './Posts.module.css';

const Posts = () => {

    const dispatch = useDispatch();
    const {posts, selectedPost, errors, loading} = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(postActions.getAll())
    }, [dispatch]);

    return (
        <div className={css.PostsBox}>
            <h1>Posts Page</h1>
            <div className={css.SelectedPost}>
                <h3>Selected Post</h3>
                {selectedPost && <Post post={selectedPost}/>}
            </div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading.......</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {
    Posts
};