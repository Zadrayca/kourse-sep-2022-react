import {Component} from "react";

import {postsService} from "../../services";
import {Post} from "../Post/Post";
import css from './Posts.module.css';

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        postsService.getAllPosts().then(({data}) => this.setState({posts: [...data]}));
    }

    render() {
        return (
            <div className={css.PostsBox}>
                <h1>Posts Page</h1>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {
    Posts
};