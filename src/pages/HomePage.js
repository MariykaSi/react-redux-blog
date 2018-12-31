import React, { Component } from "react";

import Header from "../components/Header/Header";
import PostList from "../components/PostList/PostList";
import Footer from "../components/Footer/Footer";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main>
          <PostList />
        </main>
        <Footer />
      </div>
    );
  }
}
