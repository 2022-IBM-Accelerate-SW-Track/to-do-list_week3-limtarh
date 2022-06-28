import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Limtarh Ngong</div>
            <div className="brief_description">
              Aspiring computer science student who loves to make a difference. In my free time I enjoy watching
              anime, trying new hispanic restaurants, and reading.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
