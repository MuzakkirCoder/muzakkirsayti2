import React from "react";
import "./Business.css";
import busines1 from "../img/busines1.png";
import Vector from "../img/Vector.png";
import Vector22 from "../img/Vector22.png";
import busiocn1 from "../img/busicon1.png";
import busiocn2 from "../img/busicon2.png";
import busiocn3 from "../img/busicon3.png";
import busiocn4 from "../img/busicon4.png";
import busiocn5 from "../img/busicon5.png";
import busiocn6 from "../img/busicon6.png";
function Business() {
  return (
    <div className="busines-box">
      <div className="busines-typee">
        <h2>We are providing best</h2>
        <h2> business service.</h2>
        <div className="span-text">
          <span>
            The two major realms of Classical physics: Newtonian mechanics
          </span>
          <span>problems trying to resolve the conflict between</span>
        </div>
      </div>
      <div className="business-content">
        <div className="busines-img">
          <img src={busines1} alt="" />
        </div>
        <div className="busines-type2">
          <h2>Most trusted in our field</h2>
          <span>Most calendars are designed for teams.</span>
          <span>Slate is designed for freelancers who want</span>
          <span> a simple way to plan their schedule.</span>
          <div className="busines-type3">
            <img src={Vector} alt="" />
            <div className="most-type">
              <span> the quick fox jumps over the </span>
              <span>Lazy</span>
              <span>Dog</span>
              <span>Things on a very small scale ...</span>
            </div>
          </div>
          <div className="busines-type3">
            <img src={Vector22} alt="" />
            <div className="most-type">
              <span> the quick fox jumps over the lazy</span>
              <span>Dog</span>
              <span>Things on a very small scale ...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bus-icon">
        <img src={busiocn1} alt="" />
        <img src={busiocn2} alt="" />
        <img src={busiocn3} alt="" />
        <img src={busiocn4} alt="" />
        <img src={busiocn5} alt="" />
        <img src={busiocn6} alt="" />
      </div>

      <div className="button-type-box">
      <div className="buttonbox">
       <div className="type-input">
        <h2>Subscribe For Latest </h2>
        <h2>Newsletter</h2>
      </div>
      <div className="input-button">
          <input type="text" placeholder="Your Email"/>
          <button>Subscribe</button>  
        </div>
       </div>
     
      </div>
       
      
      
    </div>
  );
}

export default Business;
