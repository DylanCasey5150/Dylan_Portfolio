import React, { Component } from "react";
import "./projects.css";
import Tapp_Home from "./TAPP_home.png";
import Tapp_Settings from "./TAPP_settings.png";
import Tapp_3 from "./TAPP_3.png";
import Above_Average_1 from "./Above_Average_Template.png";
import Above_Average_2 from "./Above_Average_Template_2.png";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    };
    this.onNextClick = this.onNextClick.bind(this);
    this.onPrevClick = this.onPrevClick.bind(this);
  }
  onNextClick() {
    if (this.state.activeIndex < 4) {
      this.setState({ activeIndex: this.state.activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  onPrevClick() {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.setState({ activeIndex: 4 });
    }
  }
  render() {
    let sliderStyle = {
      transform: `translateX(${this.state.activeIndex * -100}%)`,
      transition: "0.2s"
    };

    let externalUrlLinks = {
      truetone: "http://truetonebeta.com/",
      github: "https://github.com/DylanCasey5150"
    };

    return (
      <div className="App">
        <div id="Projects">
          <div class="Projects_Top">
            <div class="Projects_Title">—Projects—</div>
            <div class="Projects_Sub_Title">Projects and Links</div>
          </div>
          <div class="Projects_Bottom">
            <div className="quick_overview_header">Quick Project Overview</div>{" "}
            <div className="container">
              <div className="buttons">
                <button onClick={this.onPrevClick}>
                  <b className="previous_button_arrow">{"<"}</b>
                </button>
                <button onClick={this.onNextClick}>
                  <b className="next_button_arrow">{">"}</b>
                </button>
              </div>
              <ol className="slide-container">
                {[
                  <img src={Tapp_Home} />,
                  <img src={Tapp_Settings} />,
                  <img src={Tapp_3} />,
                  <img src={Above_Average_1} />,
                  <img src={Above_Average_2} />
                ].map((item, index) => {
                  let computedClass =
                    index === this.state.activeIndex ? "slide active" : "slide";
                  return (
                    <li className={computedClass} key={index}>
                      {item}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>{" "}
        </div>
        <div className="project_links">
          <div className="project_links_header">Project Links</div>
          <div className="project_links_body_1">
            <a
              className="project_links_body_1_link"
              href={externalUrlLinks.truetone}
              target="_blank"
            >
              True Tone
            </a>
          </div>
          <div className="true_tone_description">
            - True Tone is a service that helps users shop for cosmetics based
            on a quiz prompt that is given to the user based on categories of
            products. <b>(currently under construction)</b>
          </div>
          <div className="project_links_body_2">
            <a
              className="project_links_body_2_link"
              href={externalUrlLinks.github}
              target="_blank"
            >
              Github
            </a>
          </div>
          <div className="github_description">
            - Here you will find a collection of various projects that I've
            created for development practice.
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
