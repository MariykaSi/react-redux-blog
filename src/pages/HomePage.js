import React, { Component } from "react";

import Header from "../components/Header/Header";
import PostList from "../components/PostList/PostList";
import Footer from "../components/Footer/Footer";
import PostSlider from "../components/PostSlider";

export default class HomePage extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <PostSlider />
        <PostList />
        <Footer />
      </div>
    );
  }
}
