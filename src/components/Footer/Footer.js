import React, { Component } from "react";

import "./Footer.scss";
import Nav from "../Nav/Nav";

export default class Footer extends Component {
  render() {
    return (
      <footer className="row">
        <Nav />
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center-xs copyright">
          <p>Copyright @ 2019 MINIMAG</p>
        </div>
      </footer>
    );
  }
}
