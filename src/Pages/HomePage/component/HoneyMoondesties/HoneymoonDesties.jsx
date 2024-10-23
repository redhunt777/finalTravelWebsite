import React, { useEffect } from "react";
import styles from "./HoneymoonDesties.module.css";
import img1 from "../../../../assets/img1.jpg";
import img2 from "../../../../assets/img2.jpg";
import img3 from "../../../../assets/img3.jpg";
import img4 from "../../../../assets/img4.jpg";
import img5 from "../../../../assets/img5.jpg";
import img6 from "../../../../assets/img6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
const slideData = [
  {
    title: "Maldives",
    description:
      "Maldives: A paradise on Earth where turquoise waters meet white sandy beaches. The Maldives offers an intimate escape with luxurious overwater villas and breathtaking sunsets.",
    imgSrc: img1,
  },
  {
    title: "Santorini, Greece",
    description:
      "Santorini, Greece: A dreamlike island where blue-domed churches meet crystal-clear waters. Santorini enchants with its stunning sunsets and romantic cliffside views.",
    imgSrc: img2,
  },
  {
    title: "Bora Bora, French Polynesia",
    description:
      "Bora Bora, French Polynesia: An idyllic getaway with pristine lagoons and vibrant coral reefs. Bora Bora promises a romantic retreat with its iconic overwater bungalows and serene ambiance.",
    imgSrc: img3,
  },
  {
    title: "Bali, Indonesia",
    description:
      "Bali, Indonesia: A tropical haven where lush jungles meet serene beaches. Bali offers a perfect blend of culture, adventure, and relaxation for a truly unforgettable honeymoon.",
    imgSrc: img4,
  },
  {
    title: "Amalfi Coast, Italy",
    description:
      "Amalfi Coast, Italy: A picturesque coastline where charming villages cling to cliffs above the sparkling Mediterranean. The Amalfi Coast is a romantic escape with stunning views.",
    imgSrc: img5,
  },
  {
    title: "Maui, Hawaii",
    description:
      " Maui, Hawaii: A breathtaking island where volcanic landscapes meet crystal-clear waters. Maui offers diverse adventures, from exploring lush rainforests to relaxing on golden beaches.",
    imgSrc: img6,
  },
];

const HoneymoonDesties = () => {
  const preloadImages = (images) => {
    images.forEach((image) => {
      console.log(image.imgSrc);
      const img = new Image();
      img.src = image.imgSrc;
    });
  };

  useEffect(() => {
    preloadImages(slideData);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "#f8faff" }}>
        <h1 className={styles.sliderHeadinggg}>Honeymoon Destinations</h1>
        <section className={styles.collection}>
          <Swiper
            className={styles.mySwiper}
            modules={[EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView="auto"
            style={{ height: "450px" }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5, //
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // 1 slide on iphones
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2, // 2 slides on medium screens
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, // 3 slides on large screens
                spaceBetween: 30,
              },
            }}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide className={styles.content} key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className={styles.textContent}>
                  <h3 className={styles.heavy}>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button className="btn btn-outline-dark">Book Now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};
export default HoneymoonDesties;
