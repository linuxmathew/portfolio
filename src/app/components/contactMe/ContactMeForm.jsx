"use client";
import React from "react";
import "./ContactMeForm.css";
import UniversalBtn from "../buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";
import { useContactMe } from "../../home/hooks/useContactMeForm";

const ContactMeForm = () => {
  const { formData, handleFormChange } = useContactMe();

  return (
    <div className="container-md" style={{}}>
      <div className="mx-auto d-flex justify-content-center ">
        <div className="form-wrapper px-auto">
          <p className="formHead text-center">Let’s work together</p>
          <p className="formDesc text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="flex-wrapper d-flex justify-content-between">
            <div className="form-group ">
              <label
                style={{ color: "#86869B" }}
                htmlFor="exampleFormControlInput1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                className="form-input form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={handleFormChange}
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
            <UniversalBtn fadeBorder>
              Send away{" "}
              <FiArrowUpRight
                className=""
                style={{ height: "24x", width: "24px" }}
              />
            </UniversalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
