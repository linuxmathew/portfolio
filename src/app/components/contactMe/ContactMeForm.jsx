import React from "react";
import "./ContactMeForm.css";
import UniversalBtn from "../buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";

const ContactMeForm = () => {
  return (
    <div className="container-md" style={{}}>
      <div className="mx-auto d-flex justify-content-center ">
        <div className="form-wrapper px-auto">
          <p className="formHead text-center">Send me a message</p>
          <p className="formDesc text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="flex-wrapper d-flex justify-content-between">
            <div className="form-group ">
              <label
                style={{ color: "#86869B" }}
                htmlFor="exampleFormControlInput1"
              >
                Your name
              </label>
              <input
                type="email"
                className="form-input form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group ">
              <label
                style={{ color: "#86869B" }}
                htmlFor="exampleFormControlInput1"
              >
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="text-area-wrapper">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label"
              style={{ color: "#86869B" }}
            >
              Your Message
            </label>
            <textarea
              className="text-area-form form-control"
              id="exampleFormControlTextarea1"
              style={{
                minHeight: "10px",
                maxHeight: "300px",
                overflowY: "auto",
                resize: "none",
              }}
              // rows="3"
            ></textarea>
          </div>
          <div className="text-center" style={{ marginTop: "4rem" }}>
            <UniversalBtn>
              send Message <TfiArrowTopRight className="ms-1" />
            </UniversalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
