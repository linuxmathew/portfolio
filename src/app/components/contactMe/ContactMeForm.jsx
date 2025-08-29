"use client";
import React from "react";
import "./ContactMeForm.css";
import UniversalBtn from "../buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";
import { useContactMe } from "../../home/hooks/useContactMeForm";
import TextField from "@mui/material/TextField";

const ContactMeForm = () => {
  const { loading, formData, handleFormChange, handleContactSubmit } =
    useContactMe();

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
              {/* <label
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
              /> */}
              {/* make the textfield white */}
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                value={formData.name}
                name="name"
                onChange={handleFormChange}
                sx={{
                  input: { color: "#F0F0FA" }, // text color
                  label: { color: "#86869B" }, // default label color
                  "& label.Mui-focused": { color: "#86869B" }, // focused label color
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#C6C6D7", // default underline
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#C6C6D7", // hover underline
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#C6C6D7", // focused underline
                  },
                  /* 👇 add extra spacing between label and underline */
                  /* 👇 add extra spacing between label and underline */
                  "& .MuiInputLabel-root": {
                    transform: "translate(0, 8px) scale(1)", // default is ~16px
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(0, 1.5px) scale(0.75)", // keep focus state normal
                  },
                }}
                // {...props}
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
                value={formData.email}
                name="email"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={handleFormChange}
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
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Write your message here"
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
          <div className="alert alert-primary mt-5" role="alert">
            🚀 Message sent! I’ll reply quicker than you can say “JavaScript!”
            😄
          </div>
          <div className="text-center" style={{ marginTop: "4rem" }}>
            <UniversalBtn fadeBorder onClick={handleContactSubmit}>
              Send away{" "}
              {loading ? (
                <div className="spinner-grow spinner-grow-sm" role="status">
                  {/* <span class="sr-only">Loading...</span> */}
                </div>
              ) : (
                <FiArrowUpRight
                  className=""
                  style={{ height: "24x", width: "24px" }}
                />
              )}
            </UniversalBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeForm;
