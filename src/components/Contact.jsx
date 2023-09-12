import React, { useRef } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import TrackVisibility from "react-on-screen";

function Contact() {
  const form = useRef();

  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "service_4kb8ldm",
        "template_dy9kvcj",
        form.current,
        "14-TuXMqzQyPQ9IU7"
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Message sent!" });
          setButtonText("Send");
          console.log(result.text);
        },
        (error) => {
          setStatus({
            success: false,
            message:
              "The email service is currently unavailable. Please contact me directly on gugubuthelezi7@gmail.com",
          });
          setButtonText("Send");

        }
      );
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
            <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__backInUp" : ""}
            >
              <img src={contactImage} alt="Contact Me" />
              </div>
          )}
        </TrackVisibility>
            </Col>
            <Col md={6}>
              <h2>I'm open to new opportunities</h2>
              
            <form ref={form} onSubmit={sendEmail}>
                <Row>
              <label>Name</label>
              <input type="text" name="user_name" required/>
              <label>Email</label>
              <input type="email" name="user_email" required/>
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value={buttonText} required/>
              </Row>
            </form>
            </Col>
          </Row>
          {status?.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
        </Container>
      </section>
    </>
  );
}

export default Contact;
