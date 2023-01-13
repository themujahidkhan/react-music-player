import React from "react";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="playlist">
        <div className="playlist-card">
          <div className="playlist-image">
            <img src="https://picsum.photos/65" />
          </div>
          <div>
            <h1>Song 1</h1>
            <p>Artist Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
