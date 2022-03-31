import React from "react";
import logo from "../img/Stereo.png";
import profilePic from "../img/justin-bieber.jpg";
import notificationBell from "../img/icons/notification-bell.png";
import settingIcon from "../img/icons/settings.png";

const Nav = () => {
  return (
    <header>
      <div className="logo">
        <img className="" src={logo} alt="logo-img" />
      </div>
      <div className="profile-details">
        <img className="icons" src={settingIcon} alt="settings" />
        <img className="icons" src={notificationBell} alt="notification-bell" />
        <div className="profile">
          <p className="username"> James Hartley </p>
          <img className="rounded-image" src={profilePic} alt="profilePic" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
