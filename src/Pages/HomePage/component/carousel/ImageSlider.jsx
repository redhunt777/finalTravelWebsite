import React, { useEffect } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    name: "Varanasi Ganga Arti",
    des: "Experience the enchanting Ganga Arti at Varanasi, where devotees gather every evening to witness a mesmerizing ritual. This vibrant ceremony, performed on the banks of the holy Ganges, features chants,",
    img: "/gangaarti.jpg",
  },
  {
    id: 2,
    name: "Konarka Sun Temple",
    des: "Marvel at the Konarka Sun Temple, a UNESCO World Heritage Site that stands as a testament to India's architectural brilliance. The temple, designed as a gigantic chariot with intricately carved wheels.",
    img: "/konarksuntemple2.jpg",
  },
  {
    id: 3,
    name: "Goa Beaches",
    des: "Relax on the pristine beaches of Goa, where golden sands meet the azure waters of the Arabian Sea. Known for its vibrant nightlife, delicious seafood, and diverse water sports.",
    img: "/goabeach2.jpg",
  },
  {
    id: 4,
    name: "Hawa Mahal",
    des: "Visit the Hawa Mahal, or 'Palace of Winds,' in Jaipur, a stunning architectural marvel that reflects the grandeur of Rajputana. This five-story palace, adorned with intricately carved windows, ",
    img: "/hawamahal2.jpg",
  },
  {
    id: 5,
    name: "Braj Holi in Mathura Vrindavan",
    des: "Join the vibrant festivities of Braj Holi in Mathura and Vrindavan, where the spirit of celebration fills the air. Experience the joy of color as locals and visitors come together to play with hues,",
    img: "/brajholi1.jpg",
  },
  {
    id: 6,
    name: "Shimla",
    des: "Explore the picturesque hill station of Shimla, nestled in the Himalayas and known for its stunning landscapes and colonial architecture. The pleasant weather makes it a year-round getaway for tourists.",
    img: "/shimla2.jpg",
  },
];

const ImageSlider = () => {
  useEffect(() => {
    const slideRef = document.querySelector(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    const handleNextClick = () => {
      let items = document.querySelectorAll(".item");
      slideRef.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll(".item");
      slideRef.prepend(items[items.length - 1]);
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, [data]);

  //img object preloading

  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  return (
    <div className="containerXY" id="featuredDestination">
      <h2 className="slider-heading">Featured Destinations</h2>
      <div className="slide">
        {data.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundSize: "cover",
            }}
            role="img"
            aria-label={item.name}
          >
            <div className="content">
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
              <button className="btn btn-outline-light">See More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button">
        <button className="prev" aria-label="Prev Slide">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" aria-label="Next Slide">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
