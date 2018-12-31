import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.scss";
import PostItem from "../PostItem/PostItem";

class PostList extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { posts, fetching, error } = this.props;
    return (
      <main className="row center-xs">
        <div className="row container page-content">
          {posts
            ? posts.map(post => <PostItem key={post.id} post={post} />)
            : ""}
          {fetching ? <p>load...</p> : ""}
          {error ? <p>eroor...</p> : ""}
        </div>
      </main>
    );
  }
}

const mapState = state => ({
  fetching: state.postsReducer.fetching,
  posts: state.postsReducer.posts,
  error: state.postsReducer.error
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(
  mapState,
  mapDispatchToProps
)(PostList);
