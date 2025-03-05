import React from "react";
import style from "./about.module.css";

const About = () => {
  return (
    <>
      <div className={style.mainContainer} id="#read_more">
        <div className={style.textContainer}>
          <h3 className={style.title}>Turn Every Journey into a Story!</h3>
          <h1>Business Travel, Reimagined!</h1>
          <p className={style.text}>
            Welcome to Explorify Trips , where we offer unique opportunities for
            corporate and college trips. Whether you’re a business owner,
            teacher, student, or employee, you can partner with us to earn while
            delivering unforgettable travel experiences. Let us manage all
            aspects, from bookings to travel logistics, so you can focus on
            organizing a seamless and memorable trip.
          </p>
        </div>
        <div className={style.imageContainer}>
          <img src="/CorporateImage.jpg" alt="About" className={style.image} />
        </div>
      </div>
    </>
  );
};

export default About;
