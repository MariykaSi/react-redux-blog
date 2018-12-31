import React, { Component } from "react";

import Nav from "../Nav/Nav";
import "./Header.scss";
import iconFb from "../../img/fb-icon.svg";
import iconTwit from "../../img/twit-icon.svg";
import iconLink from "../../img/link-icon.svg";
import iconSearch from "../../img/search-icon.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="row center-xs">
        <div className="row top-header container">
          <div className="col-md-4 col-lg-4 start-xs top-left">
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
          <div className="col-md-4 col-lg-4 logo-block">minimag</div>
          <div className="end-xs col-md-4 col-lg-4 top-right">
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
