import React from "react";
import Card from "./card";
import CardData from "./freelancer.json";
export default function Header() {
  console.log(CardData);
  return (
    <div className="hero-container grid  grid-5-cols">
      <div className="hero-text">
        <p className="heading-p">Velit officia consequat</p>
        <h1>Lorem ipsum dolor amet, consectetur adipiscing.</h1>
      </div>

      <div>
        <Card img={CardData[0].img} png="cover1.jpg" name={CardData[0].name} />
      </div>
      <div>
        <Card img={CardData[1].img} png="cover2.webp" name={CardData[1].name} />
      </div>
      <div>
        <Card img={CardData[2].img} png="cover3.jpg" name={CardData[2].name} />
      </div>
      <div>
        <Card img={CardData[4].img} png="cover2.webp" name={CardData[3].name} />
      </div>
      <div className="grid-extras">
        <Card img={CardData[3].img} png="cover1.jpg" name={CardData[4].name} />
      </div>
      <div className="grid-extras">
        <Card img={CardData[2].img} png="cover2.webp" name={CardData[0].name} />
      </div>
      <div className="grid-extras">
        <Card img={CardData[4].img} png="cover3.jpg" name={CardData[1].name} />
      </div>
      <div className="grid-extras">
        <Card img={CardData[0].img} png="cover2.webp" name={CardData[2].name} />
      </div>
      <a href="#" className="freelancer-link">
        see more<ion-icon name="arrow-forward-sharp"></ion-icon>{" "}
      </a>
    </div>
  );
}
