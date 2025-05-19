import Image from "next/image";
import React from "react";
import "./Hero.css";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "../../../app/components/typewriter/typewritter";

const words = [
  {
    text: " ",
  },
  {
    text: "Software",
    className: "", // Optional: custom class for this word
  },
  {
    text: " ",
  },
  {
    text: "Engineer",
    className: "", // Optional: custom class for this word
  },
];

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="row g-lg-5">
        <div
          className="col col-12 col-lg-7"
          style={{ fontWeight: "var( --font-weight-bold)" }}
        >
          <div className="hero-title">
            Hi, I’m{" "}
            <span style={{ color: "var(--primary-color)" }}>Temitayo</span>,{" "}
            <div className="d-flex py-0">
              a
              <TypewriterEffectSmooth
                words={words}
                className="mt-0" // Optional: custom class for the container
                cursorClassName="bg-purple-500" // Optional: custom class for the cursor
              />
            </div>
          </div>

          <span
            style={{
              fontSize: "16px",
              border: "1px solid var( --text-color-neutral-border)",
              padding: "8px 16px",
              borderRadius: "36px",
              color: "var(--text-color-neutral)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Sounds like /te-mi-ta-jɔː/
          </span>

          <div
            className="button-wrapper"
            style={{
              marginTop: "3.18rem",
            }}
          >
            <UniversalBtn style={{ fontWeight: "var(--font-weight-medium)" }}>
              Get in touch <FiArrowUpRight className="ms-1" />
            </UniversalBtn>
            {/* <UniversalBtn type="primary">Get in touch</UniversalBtn> */}
          </div>

          <div className="row" id="hero-subDescription">
            <p className="col col-6">
              Highly skilled at progressive enhancement, design systems &amp;
              Software Engineering.
            </p>
            <p className="col col-6">
              {/* Demonstrated success in delivering impactful products for clients,
              startups, and established businesses, often collaborating with
              teams when needed to bring these products to life. */}
              Proven success in delivering impactful products for clients,
              startups, and businesses, with collaborative teamwork when
              necessary.
            </p>
          </div>
        </div>
        <div className="col col-12 col-lg-5">
          <div className="image-wrapper">
            <Image
              src="/images/actor3.jpeg"
              alt="Actor Illustration"
              // layout="responsive"
              width={491}
              height={4080}
              className="hero-image"
              style={{ width: "100%", height: "auto", borderRadius: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
