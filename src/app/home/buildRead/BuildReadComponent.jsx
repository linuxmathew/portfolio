import React from "react";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";

// Example inline SVGs
const LaptopSVG = ({ color = "currentColor" }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.39987 28.444V8C6.39987 6.93913 6.8213 5.92172 7.57145 5.17157C8.32159 4.42143 9.33901 4 10.3999 4H37.5999C38.6607 4 39.6782 4.42143 40.4283 5.17157C41.1784 5.92172 41.5999 6.93913 41.5999 8V28.444M6.39987 28.444H41.5999M6.39987 28.444L3.43987 38.912C3.27176 39.5068 3.24376 40.1324 3.35807 40.7398C3.47238 41.3472 3.7259 41.9199 4.09872 42.4128C4.47154 42.9058 4.95353 43.3056 5.50686 43.581C6.06019 43.8564 6.66981 43.9998 7.28787 44H40.7119C41.3299 43.9998 41.9396 43.8564 42.4929 43.581C43.0462 43.3056 43.5282 42.9058 43.901 42.4128C44.2738 41.9199 44.5274 41.3472 44.6417 40.7398C44.756 40.1324 44.728 39.5068 44.5599 38.912L41.5999 28.444"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M22 38H26M28 12L32 16L28 20M20 12L16 16L20 20"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const QuillSVG = ({ color = "currentColor" }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Replace with your actual path(s) */}
    <path
      d="M21.1 6C13.396 6.014 9.36 6.204 6.782 8.78C4 11.566 4 16.044 4 25C4 33.956 4 38.434 6.782 41.218C9.566 44 14.042 44 23.002 44C31.958 44 36.436 44 39.218 41.218C41.798 38.638 41.986 34.604 42 26.898"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.1116 26.0003C20.6636 7.7323 33.6036 2.5523 43.9596 4.3283C44.3776 10.3823 41.4136 12.6483 35.7736 13.6963C36.8636 14.8363 38.7876 16.2683 38.5796 18.0563C38.4316 19.3323 37.5676 19.9563 35.8356 21.2083C32.0436 23.9483 27.6516 25.6763 22.1116 26.0003Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 34C22 23 25.92 19.272 30 16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BuildReadComponent = ({
  imgPath,
  imgAlt,
  beforeBreak,
  afterBreak,
  desc,
  btnText,
  btnRoute,
  onClick,
  iconColor = "var(--new-icon-title-blue)", // <-- dynamic color
}) => {
  // Render inline SVGs based on imgPath
  const renderIcon = () => {
    if (imgPath.includes("buildlap.svg"))
      return <LaptopSVG color={iconColor} />;
    if (imgPath.includes("quillwrite.svg"))
      return <QuillSVG color={iconColor} />;
    return null;
  };

  return (
    <>
      {renderIcon()}
      <p className="buildTitle">
        {beforeBreak} <br className="d-none d-md-block" />
        {afterBreak}
      </p>
      <p className="buildDesc">{desc}</p>
      <UniversalBtn type="primary" onClick={onClick}>
        {btnText} <FiArrowUpRight className="ms-1" />
      </UniversalBtn>
    </>
  );
};

export default BuildReadComponent;
