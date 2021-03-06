import React, { Component } from "react";
import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import "./Header.scss";
import iconFb from "../../utils/img/fb-icon.svg";
import iconTwit from "../../utils/img/twit-icon.svg";
import iconLink from "../../utils/img/link-icon.svg";
import iconSearch from "../../utils/img/search-icon.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="row center-xs">
        <div className="row top-header container">
          <div className="col-sm-4 col-md-4 col-lg-4 start-xs top-left">
            <ul>
              <li>
                <img alt="" src={iconFb} />
              </li>
              <li>
                <img alt="" src={iconTwit} />
              </li>
              <li>
                <img alt="" src={iconLink} />
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 logo-block">
            <Link to={`/`}>minimag</Link>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 end-xs top-right">
            <ul>
              <li>
                <img alt="" src={iconSearch} />
              </li>
            </ul>
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}
