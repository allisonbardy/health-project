import React from "react"

import "../Signup/Signup.css"

export default function SubmitButton(props){
  return (
    <button className="btn" {...props} > Signin

      {props.children}
    </button>
  )
}
