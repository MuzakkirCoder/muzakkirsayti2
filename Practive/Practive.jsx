import React from 'react'
import "./Parctivee.css"
import "./PractivRespons.css"
import practiv1 from "../img/practiv1.png";
import practiv2 from "../img/practiv2.png";
import practiv3 from "../img/practiv3.png";
import practiv4 from "../img/practiv4.png";
function Practive() {
  return (
    <div className='practiv' id='practive'>
            <div className="box-bottom">
             <div className="bottom-type">
                <h1>Practive Advice</h1>
                <span>Problems trying to resovle the conflict between the two</span>
              <span>major relms of classical pysics: Newtonian mechanics</span>
             </div>
             <div className="bottom-card">
              <div className="bottom-cardd">
               <div className="practiv-type">
                <h3>A single soucre of truth</h3>
                <span>Newton thought  that ligh</span>
                <span>was made up of</span>
                <span>particels, but then it</span>
                <span>was discovered</span>
                <div className="imgg">
                <img src={practiv1} alt="" />
                   
                </div>
               </div>
              </div>
              <div className="bottom-cardd">
                <div className="practiv-type">
                       <h3>Fastest Way to organize</h3>
                       <span>Qauntum Mechaniks</span>
                       <span>is the description of the</span>
                       <span>behavour of matter</span>
                       <span>Lorem ipsum dolor sit amet.</span>
                       <div className="imgg">
                <img src={practiv2} alt="" />
                   
                </div>
                </div>
              </div>
              <div className="bottom-cardd">
                <div className="practiv-type">
                  <h3>Fastest Way to take action</h3>
                  <span>They describe a </span>
                  <span>Unverse consting of</span>
                  <span>bodies moving</span>
                  <div className="imgg">
                <img src={practiv3} alt="" />
                   
                </div>
                </div>
                
              </div>
              <div className="bottom-cardd">
                <div className="practiv-type">
                  <h3>Work better together</h3>
                  <span>They finaly obtained</span>
                  <span>a consistent description</span>
                  <span> of the behavour</span>
                  <span>Lorem ipsum dolor sit.</span>
                  <div className="imgg">
                <img src={practiv4} alt="" />
                   
                </div>
                </div>
              </div>
             </div>
           </div>
    </div>
  )
}

export default Practive;