import React from "react";
import style from "./privacyPolicy.module.css";
import NavBar from "../../Pages//HomePage/component/Hero/NavBar/NavBar";
import Footer from "../../Pages/HomePage/component/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className={style.privacyPolicy}>
        <div className={style.container1}></div>
        <NavBar />
        <div className={style.textContainer}>
          <h1>Privacy Policy</h1>
          <p>
            The terms “We” / “Us” / “Our” / “Company” refer to Btech Travelwala,
            and the terms “You” / “Your” / “Yourself” refer to users.
          </p>
          <p>
            This Privacy Policy is an electronic record under the Information
            Technology Act, 2000, and the rules amended thereunder for
            electronic documents and records. No physical or digital signature
            is required.
          </p>
          <p>
            This document is a legally binding contract between you and Btech
            Travelwala, effective upon your acceptance{" "}
            {`(either directly or by
            using the website, clicking "I accept," or similar means)`}{" "}
            and will govern the relationship between you and Btech Travelwala
            for use of the website “www.btechtravelwala.com.”
          </p>
          <p>
            This Privacy Policy aligns with the Information Technology
            {`(reasonable security practices and procedures and sensitive personal
            data or information)`}{" "}
            Rules, 2011 under the Information Technology Act, 2000. It governs
            the collection, use, storage, and transfer of sensitive personal
            data.
          </p>
          <p>
            Please read this Privacy Policy carefully. By using the Website, you
            confirm your understanding, agreement, and consent to it. If you
            disagree, please do not use this Website.
          </p>
          <p>
            By providing your information or using the Website’s facilities, you
            consent to the collection, storage, processing, and transfer of your
            personal and non-personal information as specified. Such information
            use will not result in any loss or wrongful gain to you or others.
          </p>
          <h4>User Information</h4>
          <p>
            To access certain services, you may need to provide information
            including your name, email, gender, age, PIN code, credit/debit card
            details, medical history, biometric data, occupation, and interests.
            This data enables us to improve user experience and develop new
            services.
          </p>
          <p>
            We treat any public domain information or information furnished
            under the Right to Information Act or similar as non-sensitive.
          </p>
          <h4>Cookies</h4>
          <p>
            To enhance website responsiveness, we may use “cookies” or similar
            tools to collect data and assign each visitor a unique User
            Identification {`(User ID)`}. Cookies cannot read data from your
            hard drive, and only store information you supply. Advertisers may
            assign their own cookies, which we do not control.
          </p>
          <p>
            Our web servers automatically collect information like IP addresses
            for traffic analysis, helping us tailor our site and measure
            geographic engagement.
          </p>
          <h4>Links to Other Sites</h4>
          <p>
            This Privacy Policy applies to our website only. Links to external
            sites are beyond our control, and we are not responsible for their
            content or policies.
          </p>
          <h4>Information Sharing</h4>
          <p>
            We may share sensitive personal information without prior user
            consent in the following cases:
            <li>
              <strong>Legal Requirements:</strong> When requested by law,
              courts, or government agencies for identity verification, cyber
              incident investigations, and other lawful purposes.
            </li>
            <li>
              <strong>Group Companies:</strong> We may share information within
              our group companies and employees for processing, adhering to
              confidentiality and security measures.
            </li>
          </p>
          <h4>Information Security</h4>
          <p>
            We implement security measures against unauthorized data access,
            alteration, or destruction, including encryption and
            password-protected servers. However, no system is impenetrable, and
            we cannot guarantee complete security for data transmissions over
            the Internet.
          </p>
          <p>
            As the internet evolves, we may update this Privacy Policy. Future
            use of collected information will follow the original policy under
            which it was gathered.
          </p>
          <p>
            For privacy-related inquiries, please email us at{" "}
            <a href="/">support@btechtravelwala.com</a> or contact us via postal
            mail at:
          </p>
          <p>
            <strong>Btech Travelwala</strong>
          </p>
          <p>
            <strong>1234 Main Street</strong>
          </p>
          <p>
            <strong>City, State, 12345</strong>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
