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
      error={!!error} // MUI shows red underline if true
      helperText={error ? helperText : ""}
      sx={{
        input: { color: "#F0F0FA" }, // text color
        textarea: { color: "#F0F0FA" },
        label: { color: "#86869B" }, // default label color
        "& label.Mui-focused": { color: "#86869B" }, // focused label color
        // Underline
        "& .MuiInput-underline:before": {
          borderBottomColor: error ? "red" : "#F0F0FA",
        },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "#C6C6D7 !important", // hover underline
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
      {...props}
    />
  );
};

export default CustomInput;
