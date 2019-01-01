import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.scss";
import PostItem from "../PostItem/PostItem";
import iconLoad from "../../img/icon-load.svg";

class PostList extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { posts, fetching, error } = this.props;
    const countPages = posts.length / 9;
    console.log(countPages);
    return (
      <div className="row center-xs">
        <div className="row container page-content">
          {posts
            ? posts
                .map(post => <PostItem key={post.id} post={post} />)
                .slice(0, 9)
            : ""}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pagination">
            <button>1</button>
            <button>2</button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 loading">
            {fetching ? <img alt="" src={iconLoad} /> : ""}
            {error ? <p>eroor...</p> : ""}
          </div>
        </div>
      </div>
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
