import {Component} from "react";

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";
import css from './Comments.module.css';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {comments: []};
    }

    componentDidMount() {
        commentsService.getAllComments().then(({data})=> this.setState({comments:[...data]}));
    }

    render() {
        return (
            <div className={css.CommentsBox}>
                <h1>Comments Page</h1>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {
    Comments
};