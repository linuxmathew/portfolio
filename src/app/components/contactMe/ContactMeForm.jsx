"use client";
import React from "react";
import "./ContactMeForm.css";
import UniversalBtn from "../buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";
import { useContactMe } from "../../home/hooks/useContactMeForm";
import CustomInput from "./CustomInput";

const ContactMeForm = () => {
  const {
    loading,
    errors,
    formData,
    handleFormChange,
    handleContactSubmit,
    messageSent,
  } = useContactMe();

  return (
    <div className="container-md" style={{}}>
      <div className="mx-auto d-flex justify-content-center ">
        <div className="form-wrapper px-auto">
          <p className="formHead text-center">Let’s work together</p>
          <p className="formDesc text-center">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
          <div className="flex-wrapper d-flex justify-content-between">
            <div className="form-group">
              <CustomInput
                label="Your name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Jane Doe"
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div className="form-group mt-5 mt-md-0">
              <CustomInput
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="name@example.com"
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>
          </div>
          <div className="text-area-wrapper">
            <CustomInput
              label="Your Message"
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Write your message here"
              multiline
              error={!!errors.message}
              helperText={errors.message}
              // rows={4}
            />
          </div>
          {messageSent && (
            <div className="alert alert-primary mt-5" role="alert">
              🚀 Message sent! I’ll reply quicker than you can say “JavaScript!”
              😄
            </div>
          )}

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
