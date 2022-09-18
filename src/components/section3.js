import React from "react";

export default function Section3() {
  return (
    <div className="section-3">
      <div className="section3-img">
        <img src={require("./assests/section3.jpg")}></img>
      </div>
      <div className="section3-content">
        <p className="heading-p">Velit officia consequat</p>
        <h1>Lorem ipsum dolor amet, consectetur adipiscing.</h1>

        <p className="heading-p">Velit officia consequat</p>
        <span className="btn">
          freelancer
          <ion-icon name="arrow-forward-sharp"></ion-icon>
        </span>
      </div>
    </div>
  );
}
