import React, { Component } from "react";

import "./PostItem.scss";
import itemBg from "../../img/item-bg.jpg";
import { Link } from "react-router-dom";

export default class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 post-item">
        <div className="entry-cover">
          <Link to={`/posts/${post.id}`}>
            <img alt={post.title} src={itemBg} />
          </Link>
        </div>
        <Link to={`/posts/${post.id}`} className="entry-title">
          {post.title}
        </Link>
        <div className="entry-content">
          <p>{post.body}</p>
          <Link to={`/posts/${post.id}`}>Read More</Link>
        </div>
      </div>
    );
  }
}
