import React from "react";
import "./Card.css";
import "./CardResponsiv.css";
import cardicon from "../img/cardicon.png";
import cardicon1 from "../img/cardicon1.png";
import cardicon2 from "../img/cardicon2.png";
import cardicon3 from "../img/cardicon3.png";
function Card() {
  return (
    <div className="cardlar" id="product">
      <div className="typecard">
        <h3>WHY CHOOSE US</h3>
        <span>Problems trying to resovle the conflict between the two</span>
        <span>major relms of classical pysics: Newtonian mechanics</span>
      </div>
      <div className="focard">
        <div className="focar">
          <img src={cardicon} alt="" />
          <h1>3k</h1>
          <span>CASES DONE</span>
        </div>
        <div className="focar">
          <img src={cardicon1} alt="" />
          <h1>45</h1>
          <span>HAPPY CUSTOMERS</span>
        </div>
        <div className="focar">
          <img src={cardicon2} alt="" />
          <h1>12+</h1>
          <span>AWARD WINNING</span>
        </div>
        <div className="focar">
          <img src={cardicon3} alt="" />
          <h1>1.5k</h1>
          <span>CASES DONE</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
