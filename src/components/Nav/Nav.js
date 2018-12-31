import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <nav className="col-xs-8 col-sm-8 col-md-12 col-lg-12 center-xs">
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
