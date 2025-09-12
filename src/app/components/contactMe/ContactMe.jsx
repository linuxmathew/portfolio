import React from "react";
import ContactMeForm from "./ContactMeForm";
import SectionDivider from "../SectionDivider";

const ContactMeFooter = () => {
  return (
    <div
      style={{
        // height: "300px",
        paddingTop: "96px",
        paddingBottom: "96px",
        backgroundColor: "var(--footer-background)",
        // color: "var(--footer-background)",
      }}
    >
      <ContactMeForm />
      <SectionDivider isDefault />
      <div className="mb-5"></div>
    </div>
  );
};

export default ContactMeFooter;
