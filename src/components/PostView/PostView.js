import React, { Component } from "react";
import { connect } from "react-redux";

import itemBg from "../../img/itemBg.jpg";
import "./PostView.scss";
import * as actionTypes from "../../actions/actionTypes";
import getUserNameOfId from "../../selectors/getUserNameOfId";

class PostView extends Component {
  componentDidMount() {
    this.props.loadOne(this.props.id);
    this.props.loadUsers();
    this.props.loadComments(this.props.id);
  }
  render() {
    const { post, users, comments } = this.props;
    return (
      <div className="row container page-content start-xs">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 entry-cover">
          <img alt={post.title} src={itemBg} />
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10 entry-content">
          <h1>{post.title}</h1>
          <h2>Аuthor: {getUserNameOfId(users, post.userId)}</h2>
          <p>{post.body}</p>
          <div className="entry-comments">
            <h3>Comments:</h3>
            {comments.map(comment => (
              <div key={comment.id}>
                <b>{comment.email}</b>
                <p>{comment.name}</p>
              </div>
            ))}
          </div>
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
  loadOne: id =>
    dispatch({ type: actionTypes.API_CALL_REQUEST_ONE_POST, postId: id }),
  loadComments: id =>
    dispatch({ type: actionTypes.API_CALL_REQUEST_COMMENTS, postId: id }),
  loadUsers: () => dispatch({ type: actionTypes.API_CALL_REQUEST_USERS })
});

export default connect(
  mapState,
  mapDispatchToProps
)(PostView);
