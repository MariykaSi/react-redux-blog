import React, { Component } from "react";
import { connect } from "react-redux";

import itemBg from "../../img/item-bg.jpg";
import "./PostView.scss";
import getUserNameOfId from "../../selectors/getUserNameOfId";

class PostView extends Component {
  componentDidMount() {
    this.props.loadUsers();
    this.props.loadOne(this.props.id);
    this.props.loadComments(this.props.id);
  }
  render() {
    const { post, users, comments } = this.props;
    return (
      <div className="row container page-content start-xs">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 entry-cover">
          <img alt={post.title} src={itemBg} />
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 entry-content">
          <h1>{post.title}</h1>
          <h2>{getUserNameOfId(users, post.userId)}</h2>
          <p>{post.body}</p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 entry-comments">
          <h3>Comments</h3>
          <p>
            {comments.map(comment => (
              <p>{comment.name}</p>
            ))}
          </p>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  post: state.postReducer.post,
  users: state.usersReducer.users,
  comments: state.commentsReducer.comments
});

const mapDispatchToProps = dispatch => ({
  loadOne: id => dispatch({ type: "API_CALL_REQUEST_ONE_POST", postId: id }),
  loadComments: id =>
    dispatch({ type: "API_CALL_REQUEST_COMMENTS", postId: id }),
  loadUsers: () => dispatch({ type: "API_CALL_REQUEST_USERS" })
});

export default connect(
  mapState,
  mapDispatchToProps
)(PostView);
