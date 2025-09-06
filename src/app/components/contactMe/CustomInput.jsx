import React from "react";
import TextField from "@mui/material/TextField";

const CustomInput = ({
  label,
  value,
  name,
  onChange,
  error,
  helperText,
  required = false,
  ...props
}) => {
  // define a soft error color once
  const softErrorColor = "#ff7b7b";

  return (
    <TextField
      style={{ width: "100%" }}
      id="standard-basic"
      label={label}
      variant="standard"
      value={value}
      name={name}
      onChange={onChange}
      required={required}
      error={!!error}
      helperText={error ? helperText : ""}
      sx={{
        input: { color: "#F0F0FA" },
        textarea: { color: "#F0F0FA" },

        // Label stays gray always
        label: { color: "#86869B" },
        "& label.Mui-focused": { color: "#86869B" },
        "& label.Mui-error": { color: "#86869B" },

        // Underline
        "& .MuiInput-underline:before": {
          borderBottomColor: error ? softErrorColor : "#F0F0FA",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: error ? softErrorColor : "#C6C6D7",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: error ? softErrorColor : "#C6C6D7",
        },

        // Make sure error state underline matches too
        "& .Mui-error:before, & .Mui-error:after": {
          borderBottomColor: `${softErrorColor} !important`,
        },

        // Helper text in soft red
        "& .MuiFormHelperText-root.Mui-error": {
          color: softErrorColor,
        },

        // Label spacing tweak
        "& .MuiInputLabel-root": {
          transform: "translate(0, 8px) scale(1)",
        },
        "& .MuiInputLabel-shrink": {
          transform: "translate(0, 1.5px) scale(0.75)",
        },
      }}
      {...props}
    />
  );
};

export default CustomInput;
