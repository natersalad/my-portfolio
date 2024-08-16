import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = () => {
    const name = formRef.current.elements.user_name.value;
    const subj = formRef.current.elements.user_subject.value;
    const email = formRef.current.elements.user_email.value;
    const message = formRef.current.elements.message.value;

    const isValid = name && subj && email && message;
    // Enable the button only when all input fields are filled
    setDisabled(isValid);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const name = e.target.elements.user_name.value;
    const subj = e.target.elements.user_subject.value;
    const email = e.target.elements.user_email.value;
    const message = e.target.elements.message.value;

    console.log(process.env.REACT_APP_EMAILJS_USER_ID);

    if (disabled) {
      console.log("submitted");
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets get in contact!</h1>
          <div className="c-info">
            <div className="c-info-items">
              <p className="c-phone">
                <span style={{ fontWeight: "bolder" }}>Phone: </span>
                954-612-2450
              </p>
              <p className="c-email">
                <span style={{ fontWeight: "bold" }}>Email: </span>
                nathan.wand1234@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let me know more about you! </b>
            You can email me using the box below or using the email on the side!
          </p>
          <form ref={formRef} onSubmit={handleSumbit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" disabled={done || !disabled}>
              Submit
            </button>
            {done && (
              <div className="c-done">Thank you for your submission!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
