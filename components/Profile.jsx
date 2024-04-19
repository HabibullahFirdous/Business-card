import React from "react";

import { ReactDOM } from "react";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <img src="https://source.unsplash.com/WLxQvbMyfas" />
        <div className="profile-info">
          <h1 className="user-name"> Laura Smith</h1>
          <p className="user-job">Frontend Developer</p>
          <p className="user-website">Laurasmith.website</p>
        </div>
        <div className="social-links">
          <a href="#" className="Email">
          <ion-icon name="mail"></ion-icon> Email
          </a>
          <a href="#" className="linkedIn">
          <ion-icon name="logo-linkedin"></ion-icon> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
}
