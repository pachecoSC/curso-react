import React, {Component} from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.svg";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Pacheco</span>
            <span className="font-weight-bold">Sarango</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
