import React, { Component } from "react";

import "./body_3.css";

class Body_3 extends Component {
  render() {
    return (
      <div className="App">
        <div id="Body_3">
          <div class="Body_3_Top">
            <div class="Body_3_1">—About—</div>
            <div class="Body_3_2">Skills and Knowledge</div>
          </div>

          <div class="Body_3_Bottom">
            <div class="Skills">
              <div class="Programming_Header">Programming Languages</div>
              <div class="Programming_Text">
                HTML, CSS, PHP, JavaScript, JSX, JQuery, Ajax
              </div>

              <div class="Related_Header">Related Technology</div>
              <div class="Related_Text">
                Bootstrap, SQL, PhpMyAdmin, Wordpress, JustInMind, React
              </div>

              <div class="Related_Courses">Related Courses</div>
              <div class="Related_Courses_Text">
                Data Analytics, Data Centric Application Development, Enterprise
                IT Architecture, Digital Solutions Studio, Application
                Integration and Evaluation, Lead Global Digital Projects
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body_3;
