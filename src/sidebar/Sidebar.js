import "./Sidebar.css";
import { Link } from "react-router-dom";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="nav">
        <li>
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/info">
            Similar Colleges
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
