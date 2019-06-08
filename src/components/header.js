import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <div className="Header_Nav">
            <div className="Header_1">
              <a href="#Body_2"> My Mission</a>
            </div>
            <div className="Header_2">
              <a href="#Body_3"> About</a>
            </div>
            <div className="Header_3">
              <a href="#Projects">Projects</a>
            </div>
            <div className="Header_4">
              <a href="#Body_4"> Contact</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
