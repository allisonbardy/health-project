import React from "react";
import { Link } from "react-router-dom";

import "./Navtabs.css"

function SignInNav() {
  return (
    <ul className="nav grad">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Health Project
        </Link>
      </li>
    </ul>
  );
}

export default SignInNav;