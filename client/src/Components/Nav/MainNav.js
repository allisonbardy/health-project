import React from "react";
import { Link } from "react-router-dom";

import "./Navtabs.css"

function MainNav() {
  return (
    <ul className="navbar">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Health Project
        </Link>
      </li>
      <li className="nav-item ml-auto">
        <Link
          to="/signin"
          className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
}

export default MainNav;