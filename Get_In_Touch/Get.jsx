import React from "react";
import "./Get.css";
import getcall from "../img/getcall.png";
import getlocatsia from "../img/getlokatsia.png";
import gettelegram from "../img/gettelegram.png"
function Get() {
  return (
    <div className="get-box">
      <div className="gettype">
        <h1>Get In Touch</h1>
        <div className="gettype1">
          <span>Problems trying to resolve the conflict between</span>
          <span>the two major realms of Classical physics: Newtonian mechanics </span>
        </div>
      </div>
      <div className="getcard">
       <div className="getcardd">
        <div className="calbox">
        <div className="calltype">
          <img src={getcall} alt="" />
          <span>georgia.young@example.com</span>
          <span>georgia.young@ple.com</span>
          <div className="getsupport-button">
           <h3>Get Support</h3>
           <button>Submit Request</button>
          </div>
        </div>
        </div>
       </div>
       <div className="getcardd">
       <div className="calltype">
          <img src={getlocatsia} alt="" />
           <span>georgia.young@example.com</span>
           <span>georgia.young@ple.com</span>
           <div className="getsupport-button2">
           <h3>Get Support</h3>
           <button>Submit Request</button>
          </div>
        </div>
       </div>
       <div className="getcardd">
       <div className="calltype">
          <img src={gettelegram} alt="" />
          <span>georgia.young@example.com</span>
          <span>georgia.young@ple.com</span>
          <div className="getsupport-button">
           <h3>Get Support</h3>
           <button>Submit Request</button>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Get;
