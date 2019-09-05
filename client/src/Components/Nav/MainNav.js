import React from "react";
import { Link } from "react-router-dom";
import Signin from "../SignIn/userSignIn"
import {SubmitButton, Input, SignIn} from "../SignIn/index"

import "./Navtabs.css"

function MainNav() {
  return (
    <ul className="nav">
      <li className="nav-brand">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Health Project
        </Link>
      </li>
      <li className="nav-item ml-auto">
       <Signin/>

      </li>
    </ul>
  );
}

export default MainNav;