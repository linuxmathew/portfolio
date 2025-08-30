import { useState } from "react";

export const useContactMe = () => {
  const excel_url = process.env.NEXT_PUBLIC_EXCEL_SHEET_URL;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [messageSent, setMessageSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [e.target.name]: "" }); // clear error while typing
  };

  const handleContactSubmit = async () => {
    // preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      try {
        // Create FormData to send URL-encoded data
        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("message", formData.message);

        const response = await fetch(excel_url, {
          method: "POST",
          // mode: "no-cors", // Use no-cors to avoid CORS issues
          body: form, // No headers, browser sets them automatically
        });

        const result = await response.json();
        console.log("Response from server:", result);

        if (result.result === "success") {
          setMessageSent(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setMessageSent(false), 5000); // hide after 5 seconds
        } else {
          alert("Error saving data.");
        }
      } catch (error) {
        alert("An error occurred while submitting the form.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    loading,
    errors,
    handleFormChange,
    formData,
    handleContactSubmit,
    messageSent,
  };
};
