import React, { Component } from "react";

import "./PostItem.scss";
import itemBg from "../../utils/img/itemBg.jpg";
import { Link } from "react-router-dom";

export default class PostItem extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 post-item">
        <div className="entry-cover">
          <Link to={`/posts/${post.id}`}>
            <img alt={post.title} src={itemBg} />
          </Link>
        </div>
        <div className="entry-content">
          <Link to={`/posts/${post.id}`} className="entry-title">
            {post.title}
          </Link>
          <p>{post.body}</p>
        </div>
        <Link className="read-more" to={`/posts/${post.id}`}>
          Read More
        </Link>
      </div>
    );
  }
}
