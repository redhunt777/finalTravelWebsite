import React from "react";
import NavBar from "./NavBar/NavBar";
import style from "./hero.module.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

// Variants for framer motion animations
const variants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};

const Hero = () => {
  const handleExplore = () => {
    window.location.href = "#featuredDestination";
  };
  return (
    <>
      <div
        className={style.mainContainer}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Use <video> tag to include the local india.mp4 video */}
        <img
          src="/BackGImg.png"
          alt="backGroundImage"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/connecting-campuses.appspot.com/o/heroback.mp4?alt=media&token=de803abc-9067-4837-87e5-83b8c6eec8a8"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <NavBar />

        <motion.div
          className={style.heroContainer}
          variants={variants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={style.heroTitle} variants={variants}>
            <h1>EXPLORE</h1>
            <h3>THE GLOBE</h3>
          </motion.div>
          <motion.div className={style.heroMainPara} variants={variants}>
            <p>
              Explore tailored travel experiences for individual, corporate, and
              group trips, featuring a personalized trip calculator to design
              your perfect adventure.
            </p>
          </motion.div>
          <motion.div className={style.heroBtn} variants={variants}>
            <button className="btn btn-outline-light" onClick={handleExplore}>
              Explore
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
