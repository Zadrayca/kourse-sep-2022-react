import {postActions} from "../../reduxs";
import {useDispatch} from "react-redux";

import css from './Post.module.css';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    const dispatch = useDispatch();

    return (
        <div className={css.PostBox}>
            <div>UserId :{userId}</div>
            <div>Id :{id}</div>
            <div>Title :{title}</div>
            <div>Body :{body}</div>
            <button onClick={()=> dispatch(postActions.setSelectedPost(post))}>Select</button>
            <button onClick={()=> dispatch(postActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {
    Post
};