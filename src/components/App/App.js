import React, { Component } from "react";
import "./App.sass";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  render() {
    const { posts, fetching, error } = this.props;
    return (
      <div className="App">
        {posts ? posts.map(post => <p key={post.id}>{post.title}</p>) : ""}
        {fetching ? <p>load...</p> : ""}
        {error ? <p>eroor...</p> : ""}
      </div>
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
)(App);
