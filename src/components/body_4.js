import React, { Component } from "react";
import Facebook from "./facebook.png";
import Instagram from "./instagram.png";
import Twitter from "./twitter.png";

import "./body_4.css";

class Body_4 extends Component {
  render() {
    let social_media_links = {
      instagram: "https://www.instagram.com/dylancasey5150/",
      twitter: "https://twitter.com/DylanCa90719178"
    };
    return (
      <div className="App">
        {" "}
        <div id="Body_4">
          <div class="Body_4_Top">
            <div class="Body_4_1">—Contact—</div>
            <div class="Body_4_2">Social Medias, Email, Phone</div>
          </div>

          <div class="Body_4_Bottom">
            <div class="Contact">
              <div class="Social_Media_Header">Social Medias</div>
              <div class="Social_Media_Text">
                <a href={social_media_links.instagram} target="_blank">
                  <img src={Instagram} />
                </a>
                <a href={social_media_links.twitter} target="_blank">
                  <img src={Twitter} />
                </a>
              </div>

              <div class="Email_Header">Email</div>
              <div class="Email_Text">dylan.casey.john@gmail.com</div>

              <div class="Phone_Header">Phone</div>
              <div class="Phone_Text">(267)602-9348</div>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Body_4;
