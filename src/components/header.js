import React from "react";
export default function Header() {
  return (
    <div>
      <nav className="nav">
        <a href="#" className="logo">
          LOGO
        </a>

        <input className="input-box" type="text"></input>
        <span className="input-icon">
          <ion-icon size="large" name="search"></ion-icon>
        </span>
        <span className="search-text">Search project</span>
        <div className="mobile-nav">
          <ion-icon size="large" name="reorder-four-outline"></ion-icon>
        </div>
        <ul className="list nav-list">
          <li className="li-item">
            <a>
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </li>
          <li className="li-item">
            <a>
              <ion-icon name="heart-outline"></ion-icon>
            </a>
          </li>
          <li className="li-item">
            <a>
              <img
                className="profile-img"
                src={require("./assests/freelancers/albert.png")}
              ></img>
            </a>
          </li>
          <li className="li-item">
            <a>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </a>
          </li>
        </ul>
      </nav>
      <div className="categories">
        <ul className="categories-ul">
          <li>Programming & Tech</li>
          <li>Design & Art</li>
          <li>Writing & Translation</li>
          <li>SEO & Digital Marketting</li>
          <li>Video & Animation</li>
          <li>Business & Sales</li>
        </ul>
      </div>
    </div>
  );
}
