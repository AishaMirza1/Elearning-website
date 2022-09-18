import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="footer-1">
          <a href="#" className="logo">
            LOGO
          </a>

          <address className="contacts">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </address>
          <p></p>
        </div>

        <div className="nav-col">
          <p className="footer-header">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About
              </a>{" "}
            </li>
            <li>
              <a className="footer-link" href="#">
                {" "}
                For Bussiness
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-header">Products</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy and terms
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-header">links</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy and terms
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-col">
          <p className="footer-header">follow-us</p>
          <a className="footer-logo-link" href="#">
            <ion-icon
              size="small"
              className="footer-logo"
              name="logo-instagram"
            ></ion-icon>
          </a>
          <a className="footer-logo-link" href="#">
            <ion-icon
              size="small"
              className="footer-logo"
              name="logo-twitter"
            ></ion-icon>
          </a>
          <a className="footer-logo-link" href="#">
            <ion-icon
              size="small"
              className="footer-logo"
              name="logo-facebook"
            ></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
}
