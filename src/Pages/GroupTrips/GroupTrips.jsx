import React, { useState } from "react";
import { useParams } from "react-router-dom";
import style from "./GroupTrips.module.css";
import SkeletonImage from "./components/Itenary/SkeletonImage";
import NavBar from "../HomePage/component/Hero/NavBar/NavBar";
import Footer from "../HomePage/component/Footer/Footer";

const GroupTripPage = ({ groupTripsData }) => {
  const { location } = useParams();
  const tripData = groupTripsData[location.toLowerCase()]; // Get the trip data from the groupTripsData object

  // Function to handle the Book a Call button click
  const handleClick = () => {
    window.location.href = "/#contact";
  };

  // for itinerary dropdown
  const [openDays, setOpenDays] = useState([]);
  const [showUpcoming, setShowUpcoming] = useState(true);

  // for policies dropdown
  const [showBookingPolicy, setShowBookingPolicy] = useState(false);
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false);
  const [showGeneralPolicy, setShowGeneralPolicy] = useState(false);

  // Toggle function for opening/closing each day
  const toggleDay = (day) => {
    setOpenDays((prevOpenDays) =>
      prevOpenDays.includes(day)
        ? prevOpenDays.filter((d) => d !== day)
        : [...prevOpenDays, day]
    );
  };

  const handleClose = () => {
    setShowUpcoming(false);
  };

  // Get the image sources from tripData
  const imageSources = tripData ? tripData.images : [];

  return (
    <>
      <div className={style.container}></div>
      <NavBar />
      {showUpcoming &&
        (tripData.upcomingTrip !== "none" ? (
          <div className={style.upcomingTrip}>
            The trip starts on {tripData.upcomingTrip}
            <button
              onClick={handleClick}
              style={{
                textDecoration: "none",
                marginLeft: "20px",
              }}
              className="btn btn-outline-light"
            >
              Book a Call
            </button>
            <button
              type="button"
              style={{ float: "right" }}
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        ) : (
          <div className={style.upcomingTrip}>
            Trip Comming Soon!
            <button
              type="button"
              style={{ float: "right" }}
              className="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
        ))}

      <div className={style.GroupTripPage}>
        {/* SkeletonImage with passed image sources */}
        <SkeletonImage images={imageSources} />

        {tripData ? (
          <>
            <h1 className={style.h11}>{tripData.title}</h1>
            <p className={style.description}>{tripData.description}</p>
            {tripData.price != "none" && (
              <div className={style.priceSection}>
                <h2>Price: ₹{tripData.price}</h2>
                <p>
                  *Enjoy an exclusive 10% discount for the first 10 bookings!
                </p>
              </div>
            )}
            <h2 className={style.h22}>Itinerary</h2>
            <ul className={style.itineraryList}>
              {tripData.itinerary.map((item, index) => (
                <li key={index} className={style.itineraryItem}>
                  <div
                    className={style.itineraryDay}
                    onClick={() => toggleDay(item.day)}
                  >
                    Day {item.day}: {item.title}
                  </div>
                  {openDays.includes(item.day) && (
                    <ul className={style.activitiesList}>
                      {item.activities.map((activity, activityIndex) => (
                        <li key={activityIndex}>{activity}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* Note Section */}
            <hr />
            Note: Day-wise schedule and itinerary is flexible and can be changed
            . You will updated about the change prior to the trip.
            {/* For Booking: Book a call */}
            <div className={style.bookCall}>
              <h3>
                For More Information!{" "}
                <button
                  onClick={handleClick}
                  style={{ textDecoration: "none" }}
                  className="btn btn-outline-primary"
                >
                  Book a Call
                </button>
              </h3>
            </div>
            {/* Policies Section */}
            <div className={style.policiesSection}>
              <h2 onClick={() => setShowBookingPolicy(!showBookingPolicy)}>
                Booking Policy {showBookingPolicy ? "-" : "+"}
              </h2>
              {showBookingPolicy && (
                <p>
                  Book your seats by depositing an advance of 50% per head to
                  the below account, and the rest has to be paid 1 day prior to
                  the time of departure of the trip. <br />
                  Send the payment screenshot to the numbers provided. Once the
                  form is filled and the payment is confirmed, your booking will
                  be finalized. <br />
                  If you want to book any specific seat in the traveler, you
                  have to pay an additional Rs.300/- for the seat, subject to
                  availability and on a first-come, first-served basis.
                </p>
              )}

              <h2
                onClick={() =>
                  setShowCancellationPolicy(!showCancellationPolicy)
                }
              >
                Cancellation Policy {showCancellationPolicy ? "-" : "+"}
              </h2>
              {showCancellationPolicy && (
                <p>
                  If cancellations are made 60-30 days before the trip's start
                  date, 10% of the total tour cost will be charged as
                  cancellation fees. <br />
                  If cancellations are made 30 days before the trip's start
                  date, 50% of the total tour cost will be charged as
                  cancellation fees. <br />
                  If cancellations are made within 0-30 days before the trip's
                  start date, 100% of the total tour cost will be charged.{" "}
                  <br />
                  In case of unforeseen weather conditions or government
                  restrictions, certain activities may be canceled, and an
                  alternate activity will be provided. However, no refund will
                  be offered in such cases.
                </p>
              )}

              <h2 onClick={() => setShowGeneralPolicy(!showGeneralPolicy)}>
                General Policy {showGeneralPolicy ? "-" : "+"}
              </h2>
              {showGeneralPolicy && (
                <p>
                  BtechTravelwala and its organizers strictly prohibit the
                  utilization of any narcotics or banned substances during the
                  tour. <br />
                  The trip amount is based on a quad-sharing basis. An extra
                  mattress will be provided for any additional persons. <br />
                  Fireworks, weapons, or toxic substances are not allowed. The
                  organizers reserve the right to evict anyone found violating
                  this rule without any refund. <br />
                  BtechTravelwala is not responsible for your safety or
                  whereabouts outside of the resort premises. <br />
                  In case of transport breakdown, there will be no backup
                  provided. You will have to wait until the vehicle is repaired.{" "}
                  <br />
                  All guests must carry a valid government-issued ID card.{" "}
                  <br />
                  Please cooperate with us to keep the environment clean and
                  safe. <br />
                  Any loss of resort property will incur a full charge for the
                  damaged items. <br />
                  No refund or cancellation is allowed once tickets or bookings
                  are confirmed. <br />
                  Bonfire and musical nights are subject to local authority
                  regulations.
                </p>
              )}
            </div>
          </>
        ) : (
          <div>Trip data not found.</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GroupTripPage;
