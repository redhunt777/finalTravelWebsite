import React from "react";
import style from "./meetTheTeam.module.css";
const data = [
  {
    img: "/kabirTalade1.jpg",
    name: "Kabir Talade",
    title: "CEO & Co-Founder",
    instagram: "https://www.instagram.com/kabir_talade_29/",
    description:
      "Kabir Talade, founder and CEO of Explorify Trips , revolutionizes student travel by blending technology and tourism. Passionate about affordable luxury, he creates personalized, budget-friendly trips powered by AI-driven solutions, combining adventure and education for enriching, memorable journeys tailored to college students.",
  },
  {
    img: "/ashishPal.jpg",
    name: "Aashish Pal",
    title: "COO and Co-Founder",
    instagram: "https://www.instagram.com/aashishpal3115/",
    description:
      "Aashish Pal, COO of Explorify Trips , ensures smooth operations and high-quality travel experiences. With expertise in managing large-scale projects, he focuses on operational excellence, enabling the company to offer personalized, enriching trips while upholding top customer satisfaction standards.",
  },
  {
    img: "/IMG-20241211-WA0009.jpg",
    name: "Suryansh Dey",
    title: "Chief Technology Officer",
    description:
      "Suryansh Dey, CTO of Explorify Trips , leverages his software development and expertise to drive AI-driven, personalized itineraries. His passion for integrating cutting-edge technology ensures Explorify Trips  stays at the forefront of tech-enabled travel, providing seamless, customized experiences for college students.",
  },
  {
    img: "/MayankPal.jpg",
    name: "Mayank Pal",
    title: "Chief Marketing Officer",
    instagram: "https://www.instagram.com/mayankpal2408/",
    description:
      "Mayank Pal, CMO of Explorify Trips , leads innovative marketing strategies to connect with college students. With expertise in digital marketing and branding, he promotes the company’s AI-driven itineraries and experiential trips, building the brand’s presence and ensuring memorable, affordable travel experiences.",
  },
  {
    img: "/jayaTalade.jpg",
    name: "Jaya Talade",
    title: "Head of Content",
    instagram: "https://www.instagram.com/jaya.talade038/",
    description:
      "Jaya Talade, Head of Content at Explorify Trips , curates content that aligns with the company’s vision. With expertise in travel storytelling and digital communication, she ensures every message resonates with students and travelers, from social media posts to in-depth trip guides, maintaining Explorify Trips ’s unique voice.",
  },
];

const MeetTheTeam = () => {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>MEET OUR TEAM</h2>
        <div className={style.cardContainer}>
          {data.map((item, index) => (
            <div className={style.card} key={index}>
              <img src={item.img} alt="John" />
              <div className={style.textContainer}>
                <h3>{item.name}</h3>
                <h6 className={style.cardTitle}>{item.title}</h6>
                <p>{item.description}</p>
                <p>
                  <div className={style.logo}>
                    <a href={item.instagram} target="_blank" rel="noreferrer">
                      <img src="/instagram_icon.png"></img>
                    </a>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
