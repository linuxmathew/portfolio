import Image from "next/image";
import React from "react";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";

const BuildReadComponent = ({
  imgPath,
  imgAlt,
  beforeBreak,
  afterBreak,
  desc,
  btnText,
  btnRoute,
  onClick,
}) => {
  return (
    <>
      <Image
        src={imgPath}
        alt={imgAlt}
        width={48}
        height={48}
        className="hero-image"
      />
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
