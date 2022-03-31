import React from "react";
import BannerContent from "./BannerContent";
import SideNav from "./SideNav";

const Content = () => {
  return (
    <div className="main">
      <div className="top-main">
        <BannerContent />
      </div>
      <div className="bottom-main"></div>
    </div>
  );
};

export default Content;
