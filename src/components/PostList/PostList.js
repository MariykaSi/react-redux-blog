import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostList.scss";
import PostItem from "../PostItem/PostItem";
import Paginator from "../Paginator/Paginator";
import * as actionTypes from "../../actions/actionTypes";
import iconLoad from "../../img/icon-load.svg";

class PostList extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const {
      paginatedPosts,
      fetching,
      error,
      paginatorData,
      pages,
      setPagination
    } = this.props;
    return (
      <div className="row center-xs">
        <div className="row container page-content">
          <div className="row">
            {paginatedPosts
              ? paginatedPosts.map(post => (
                  <PostItem key={post.id} post={post} />
                ))
              : null}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {paginatorData && pages ? (
              <Paginator
                setPagination={setPagination}
                paginatorData={paginatorData}
                pages={pages}
              />
            ) : null}
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 loading">
            {fetching ? <img alt="" src={iconLoad} /> : null}
            {error ? <p>eroor...</p> : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  fetching: state.postsReducer.fetching,
  paginatedPosts: state.postsReducer.paginatedPosts,
  paginatorData: state.postsReducer.paginatorData,
  pages: state.postsReducer.pages,
  error: state.postsReducer.error
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch({ type: actionTypes.API_CALL_REQUEST }),
  setPagination: currentPage =>
    dispatch({ type: actionTypes.SET_PAGINATION, currentPage: currentPage })
});

export default connect(
  mapState,
  mapDispatchToProps
)(PostList);
