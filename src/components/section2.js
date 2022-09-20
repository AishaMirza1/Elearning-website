import React from "react";
import Card from "./card";
export default function Section2() {
  return (
    <div className="section-2">
      <p className="heading-p">Velit officia consequat</p>
      <h2>Lorem ipsum dolor sit amet</h2>
      <a href="#" className="freelancer-link">
        see more<ion-icon name="arrow-forward-sharp"></ion-icon>{" "}
      </a>
      <div className="section2-cards">
        <div className="section-2-cards">
          <Card
            img={require("./assests/1.png")}
            png="cover1.jpg"
            name="Megan"
          />
        </div>
        <div className="section-2-cards">
          <Card
            img={require("./assests/2.png")}
            png="cover1.jpg"
            name="Megan"
          />
        </div>

        <div className="section-2-cards">
          <Card
            img={require("./assests/3.png")}
            png="cover1.jpg"
            name="Megan"
          />
        </div>
        <div className="section-2-cards">
          <Card
            img={require("./assests/4.png")}
            png="cover1.jpg"
            name="Megan"
          />
        </div>
        <div className="section-2-cards">
          <Card
            img={require("./assests/4.png")}
            png="cover1.jpg"
            name="Megan"
            className="grid-extras"
          />
        </div>
      </div>
    </div>
  );
}
