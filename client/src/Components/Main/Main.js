import React, { Component } from "react"
import './Menu.css'
// import GetStartedButton from "./GetStartedButton"


const menu = (props) => {
  
  return (
    <div className="container">
      <h3 className="main-info text-center col-md-6 col-xs-12">
        Main Page Content 
          <br />
      {/* <GetStartedButton  /> */}
      </h3>
      <div>
        {/* <img src="https://www.fastweb.com/uploads/article_photo/photo/2035781/crop635w_making-money-from-money.jpg" className="col-md-6 col-xs-12" alt="Stock Photo">
        </img> */}
      </div>
    </div>
  )
}

export default menu;
