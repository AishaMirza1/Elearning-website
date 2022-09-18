import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        className="card-cover-img"
        src={require(`./assests/${props.png}`)}
      ></img>
      <div className="card-details">
        <div className="profile">
          <img height="40px" src={props.img}></img>
          <div>
            <p className="profile-name">{props.name}</p>
            <p className="view-link">View Profile</p>
          </div>
        </div>

        <div>
          <span className="rating">
            4.9{" "}
            <ion-icon color="warning" className="star" name="star"></ion-icon>
            <ion-icon color="warning" className="star" name="star"></ion-icon>
            <ion-icon color="warning" className="star" name="star"></ion-icon>
            <ion-icon color="warning" className="star" name="star"></ion-icon>
            <ion-icon
              color="warning"
              className="star"
              name="star-half"
            ></ion-icon>
          </span>
          <p className="profile-description">
            Amet minim mollit non deserunt ullamco est sit.
          </p>
          <hr></hr>
          <div className="price-box">
            <div>
              <strong>$200</strong>
              <span className="price">Starting Price</span>
            </div>

            <div className="select-btn">Select</div>
          </div>
        </div>
      </div>
    </div>
  );
}
