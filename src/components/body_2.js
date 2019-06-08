import React, { Component } from "react";
import Dylan from "./dylan_grad_pic.png";

import "./body_2.css";

class Body_2 extends Component {
  render() {
    return (
      <div className="App">
        <div id="Body_2">
          <div class="Body_2_Top">
            <div class="Body_2_1">—Dylan Casey—</div>
            <div class="Body_2_2">Developer, Designer, Information Manager</div>
          </div>

          <div class="Body_2_Bottom">
            <div class="Profile_Pic">
              <img src={Dylan} />
            </div>
            <div class="Profile_text">
              <div class="My_Mission_Header">My Mission</div>
              <div class="My_Mission_text">
                My mission is to help people achieve their personal and
                professional goals through technology. Bringing a vision to life
                using technology comes with a certain sense of satisfaction that
                I haven't found elsewhere. I love watching others succeed and
                having some success of my own in the process.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body_2;
