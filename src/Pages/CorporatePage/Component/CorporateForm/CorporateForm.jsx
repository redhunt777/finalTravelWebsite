import React from "react";
import style from "./CorporateForm.module.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const CorporateForm = () => {
  const [error, setError] = useState(null);
  const [active, setActive] = useState(true);
  const [success, setSuccess] = useState(false);
  const formRef = useRef(null);
  const FirstnameRef = useRef(null);
  const LastnameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      FirstnameRef.current.value === "" ||
      LastnameRef.current.value === "" ||
      emailRef.current.value === "" ||
      mobileRef.current.value === "" ||
      messageRef.current.value === ""
    ) {
      setError("All fields are required to be filled");
      return;
    }

    const mobile = mobileRef.current.value;
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
      setError("Please enter a valid mobile number");
      return;
    }

    setError(null);
    setActive(false);
    emailjs
      .sendForm("service_yh5rp6z", "template_wdiayub", formRef.current, {
        publicKey: "GLIFLP2sFpNmjPUS4",
      })
      .then(
        () => {
          setError(null);
          setSuccess(true);
          setActive(true);
          formRef.current.reset();
        },
        (error) => {
          setError(error);
          setActive(true);
        }
      );
  };

  return (
    <>
      <div className={style.calciContainer} id="form">
        <div className={style.formContainer}>
          <h1>Call Us!</h1>
          <form ref={formRef}>
            <div className={style.bind}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="FirstName"
                  ref={FirstnameRef}
                  className="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  ref={LastnameRef}
                  className="form-control"
                  name="LastName"
                  id="floatingInput"
                  placeholder="Last Name"
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
            </div>
            <div className={`${style.bind} ${style.emailPhone}`}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Mobile Number"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  ref={mobileRef}
                  required
                />
                <label htmlFor="floatingInput">Mobile Number</label>
              </div>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="message"
                ref={messageRef}
                placeholder="Add any essential information here"
                id="floatingTextarea2"
                style={{ height: "100px", resize: "none" }}
              ></textarea>
              <label htmlFor="floatingTextarea2" className={style.msg}>
                Any other details you'd like to include?
              </label>
            </div>
            {error && <p className={style.error}>*{error}</p>}
            {success && (
              <p className={style.success}>
                Your message has been sent successfully!
              </p>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={!active}
              className={`btn btn-primary ${style.button1}`}
            >
              Submit
            </button>
          </form>
          <p className={style.info}>
            *Our Agent will get in touch with you within some time.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default CorporateForm;
