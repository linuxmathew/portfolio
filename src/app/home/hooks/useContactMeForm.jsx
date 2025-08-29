import { useState } from "react";

export const useContactMe = () => {
  const excel_url = process.env.NEXT_PUBLIC_EXCEL_SHEET_URL;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async () => {
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
        alert("Data saved to Google Sheet!");
      } else {
        alert("Error saving data.");
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleFormChange, formData, handleContactSubmit };
};
