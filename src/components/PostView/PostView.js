import React, { Component } from "react";
import { connect } from "react-redux";

import "./PostView.scss";

class PostView extends Component {
  componentDidMount() {
    this.props.loadOne(this.props.id);
  }
  render() {
    const { title } = this.props.post;
    return <div>{title}</div>;
  }
}

const mapState = state => ({
  fetching: state.postReducer.fetching,
  post: state.postReducer.post,
  error: state.postReducer.error
});

const mapDispatchToProps = dispatch => ({
  loadOne: id => dispatch({ type: "API_CALL_REQUEST_ONE_POST", postId: id })
});

export default connect(
  mapState,
  mapDispatchToProps
)(PostView);
