import React from "react";
import { useEffect } from "react";
import "../App.css";

const UpcomingTripCard = ({ handleClose }) => {
  useEffect(() => {
    // Add the no-scroll class to the body to prevent scrolling
    document.body.classList.add("no-scroll");

    return () => {
      // Remove the no-scroll class when the component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: 2000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        top: 0,
        overflow: "hidden",
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="card">
        <div
          className="card-header"
          style={{
            backgroundColor: "#d897f0",
            color: "#fff",
            fontFamily: `"Montserrat", sans-serif`,
          }}
        >
          Upcoming Trip
          <button
            type="button"
            style={{ float: "right" }}
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            Mood Indigo and Mumbai Darshan
          </h5>
          <p
            className="card-text"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            Join us for an exciting trip to Mumbai and IIT’s Mood Indigo fest,
            blending cultural thrills with city exploration.
          </p>
          <p
            className="card-text"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            Enjoy an exclusive 10% discount for the first 10 bookings!
          </p>
          <p
            className="card-text"
            style={{ fontFamily: `"Montserrat", sans-serif` }}
          >
            Only On ₹11499/-
          </p>
          <a
            href="/group-trips/mumbai"
            className="btn btn-primary"
            style={{ backgroundColor: "#d897f0", borderColor: "#d897f0" }}
          >
            Show Trip
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTripCard;
