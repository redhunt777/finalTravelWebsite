import React, { useEffect } from "react";
import "./ImageSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import img2 from "../../../../assets/img2.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Mood Indigo and Mumbai Darshan",
    linkTo: "/group-trips/mumbai",
    des: "Mood Indigo is Asia's largest college cultural festival, held annually in Mumbai, celebrating creativity.",
    img: "/Marine_Drive.jpg",
  },
  {
    id: 2,
    name: "Panchmarhi",
    linkTo: "/group-trips/panchmarhi",
    des: " Explore the lush greenery and serene waterfalls of Panchmarhi, a hill station in Madhya Pradesh known for its natural beauty and rich biodiversity. ",
    img: "/Sunset_Point.jpeg",
  },
  {
    id: 3,
    name: "Goa Beaches",
    linkTo: "/group-trips/goa",
    des: "Relax on the pristine beaches of Goa, where golden sands meet the azure waters of the Arabian Sea. Known for its nightlife and water sports.",
    img: img2,
  },
  {
    id: 4,
    name: "Udaipur and Mount Abu",
    linkTo: "/group-trips/udaipur",
    des: "Discover the royal heritage of Udaipur and the scenic beauty of Mount Abu. Explore the majestic palaces, tranquil lakes, and lush hills.",
    img: "/Nakki_Lake.jpg",
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
  }, [data]);

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
              <Link to={item.linkTo}>
                <button className="btn btn-outline-light">See More</button>
              </Link>
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
