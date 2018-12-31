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

const maState = state => ({
  fetching: state.fetching,
  posts: state.posts,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch({ type: "API_CALL_REQUEST" })
});

export default connect(
  maState,
  mapDispatchToProps
)(PostList);
