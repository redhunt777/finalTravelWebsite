import React from "react";
import style from "./chooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src="/ChooseUs.webp" alt="a lady in background" />
      </div>
      <div className={style.textContainer}>
        <h1 className={style.heading}>
          Introducing<span>Explorify Trips </span>
        </h1>
        <p className={style.text}>
          Explorify Trips is a premier AI travel company dedicated to creating
          unforgettable journeys tailored specifically for college students and
          young travelers. By blending adventure, education, and affordability,
          we offer unique, AI-driven itineraries and immersive experiences that
          go beyond the typical trip. Our mission is to make travel enriching,
          accessible, and hassle-free, ensuring memorable journeys across
          vibrant destinations.
        </p>
      </div>
    </div>
  );
};

export default ChooseUs;
