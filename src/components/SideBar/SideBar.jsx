import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="default avatar" className="sidebar__avatar" />
      <h2 className="sidebar__username">Riona</h2>
    </div>
  );
}

export default SideBar;
