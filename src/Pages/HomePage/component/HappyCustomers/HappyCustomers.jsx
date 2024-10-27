import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./HappyCustomers.css";

const HappyCustomers = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    if (counterOn) {
      return;
    }
  }, [counterOn]);

  const handleEnter = () => {
    setCounterOn(true);
  };

  return (
    <div className="contain">
      <ScrollTrigger onEnter={handleEnter}>
        <div
          className={`section section-work-data animated 
          }`}
        >
          <div className="heavy">
            <h2>Trusted Vendors</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={0} end={20} duration={4} delay={0.3} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Happy Customers</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={1} end={50} duration={4} delay={0.3} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Region Unlocked</h2>
            <p className="counter-numbers">
              {counterOn && (
                <CountUp start={0} end={5} duration={4} delay={0.3} />
              )}
              +
            </p>
          </div>
          <div className="heavy">
            <h2>Rating</h2>
            <p className="counter-numbers">4.5/5</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default HappyCustomers;
