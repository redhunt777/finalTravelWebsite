import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={style.svgContainer}>
        <img src="/Untitled_design-removebg.png" alt="footer wrapper png" />
      </div>
      <div className={style.footerContainer}>
        <div className={style.footer}>
          <div className={`${style.container} ${style.paddingRight}`}>
            <h3>BtechTravelwala.com</h3>
            <p>
              BTech Travelwala is a AI travel company that provides a wide range
              of travel services to its customers like group tours, custom
              tours, and corporate tours. We also provide travel packages for
              various destinations.
            </p>
            <div className={style.logosContainer}>
              <div className={style.logo}>
                <a
                  href="https://www.instagram.com/btech_travelwala/profilecard/?igsh=d25nOHI1bnRsOHJ4"
                  target="blank"
                >
                  <img src="/instagram_icon.png" alt="instagram logo" />
                </a>
              </div>
              <div className={style.logo}>
                <a href="https://x.com/BtechTravelwala?t=y_RpeUCWoUcSV3aRtn8meQ&s=09">
                  <img src="/sl_z_072523_61700_01.jpg" alt="X logo" />
                </a>
              </div>
              <div className={style.logo}>
                <img src="/386622_facebook_icon.png" alt="facebook logo" />
              </div>
              <div className={style.logo}>
                <img
                  src="/317725_linkedin_social_icon.png"
                  alt="linkedin logo"
                />
              </div>
            </div>
          </div>
          <div className={`${style.container} ${style.quickLinks}`}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/personalised-trips">Personalised Trips</Link>
              </li>
              <li>
                <Link to="/corporate-trips">Corporate Tours</Link>
              </li>
            </ul>
          </div>
          <div className={style.container}>
            <h4>Information</h4>
            <ul>
              <li>
                <Link to="/terms-and-conditions">Terms and Condition</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className={style.container}>
            <h4>Contact</h4>
            <ul>
              <li>46, Pawanpuri colony, Palda road, Indore</li>
              <li>Madhya pradesh-452001</li>
              <li>+91 7004555717</li>
              <li>BtechTravelwala.com</li>
            </ul>
          </div>
        </div>
        <div className={style.bottomFooter}>
          <p>
            &copy; 2024{" "}
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              BtechTravelwala.com
            </Link>{" "}
            | All Rights Reserved |<span> Designed by BtechTravelwala.com</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
