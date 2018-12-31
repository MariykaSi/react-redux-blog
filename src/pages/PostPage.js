import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostView from "../components/PostView/PostView";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <PostView id={this.props.match.params.id} />
        <Footer />
      </div>
    );
  }
}
