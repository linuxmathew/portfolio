import { useState } from "react";

export const useContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const text = e.target.value;

    console.log("colose", text);
    return;
    const form = [...formData];
    const change = form[val];
    change = text;
    form[val] = change;
    setFormData(form);
  };

  return { handleFormChange, formData };
};
