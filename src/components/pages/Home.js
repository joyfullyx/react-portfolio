import React from "react";
import "../../styles/Home.css";
import Images from "./Images/HomeImg.png"
import About from "./About"

function Home() {
  return (
    <>
    <div className="d-flex justify-content-around align-self-center">
      <div className="d-flex align-self-center">
        <h1>Joy Rhee</h1>
      </div>
      <img 
      src={Images}
      alt="profile"
      id="profile-pic"
      />
    </div>
    <div>
      <About />
    </div>
    </>
   
  );
}

export default Home;
