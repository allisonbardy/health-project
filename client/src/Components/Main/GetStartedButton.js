import { Link } from "react-router-dom";
import React from "react"

import "./Menu.css"

function GetStartedButton(props){
  return (
    <Link to="/signup" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}><button className="get-started" {...props} > Create An Account!

      {props.children}
    </button>
    </Link>
    
  )
}

export default GetStartedButton;