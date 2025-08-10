import { useState } from "react";

export const useContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleContactSubmit = () => {
    console.log("Form submitted with data:", formData);
  };

  return { handleFormChange, formData, handleContactSubmit };
};
