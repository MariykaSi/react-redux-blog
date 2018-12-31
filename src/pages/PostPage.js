import React, { Component } from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PostView from "../components/PostView/PostView";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main>
          <div className="row center-xs">
            <PostView id={this.props.match.params.id} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
