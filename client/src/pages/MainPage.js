import React from "react";
import MainNav from "../Components/Nav/MainNav";
import Main from "../Components/Main/Main";
import Signup from "../Components/Signup/userReg"
import Signin from "../Components/SignIn/userSignIn"

function MainPage() {
  return (
      <div>
        <MainNav />
        <Main/>
        <Signup/>
    </div>

  );
}

export default MainPage;