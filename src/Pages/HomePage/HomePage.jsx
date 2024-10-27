import React from "react";
import Hero from "./component/Hero/Hero";
import Services from "./component/Services/Services";
import ImageSlider from "./component/carousel/ImageSlider";
import HappyCustomers from "./component/HappyCustomers/HappyCustomers";
import Testimonial from "./component/testimonial/testimonial";
import ContactForm from "./component/ContactForm/ContactForm";
import HoneymoonDesties from "./component/HoneyMoondesties/HoneymoonDesties";
import TrandingSlider from "./component/TrandingSlider/TrandingSlider";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
    if (location.hash === "#contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services></Services>
      <ImageSlider />
      <HappyCustomers />

      <Testimonial />
      {/* <HoneymoonDesties /> */}
      <ContactForm />
      <TrandingSlider />
      <Footer></Footer>
    </>
  );
};

export default HomePage;
