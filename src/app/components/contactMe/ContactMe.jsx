import React from "react";
import ContactMeForm from "./ContactMeForm";

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
    </div>
  );
};

export default ContactMeFooter;
