import React, { Component } from "react";

import "./PostItem.scss";
import itemBg from "../../img/item-bg.jpg";

export default class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 post-item">
        <div className="entry-cover">
          <a href="/">
            <img alt={post.title} src={itemBg} />
          </a>
        </div>
        <a href="/" className="entry-title">
          {post.title}
        </a>
        <div className="entry-content">
          <a href="/" title="Read More">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
