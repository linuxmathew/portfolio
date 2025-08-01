"use client";
import React from "react";
import SectionHead from "../components/secHead/SectionHead";
import Image from "next/image";
import "./OverTheYears.css";
import UniversalBtn from "../components/buttons/UniversalBtn";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "../utils/navigation";

const OverTheYears = () => {
  const navigate = useNavigate();
  // Example usage:

  return (
    <div className="container-md">
      <div className="row">
        <div className="col col-12 col-lg-6">
          <SectionHead secHead1="WORK EXPERIENCE" secHead2="Over the years" />
          <p className="justItDesc pe-lg-5">
            {/* From my first spark of curiosity in network infrastructure to
            designing seamless user experiences in modern web apps, my journey
            as a software engineer has been anything but conventional. I started
            out wiring up systems and optimizing shared resources—hands-on,
            gritty, and foundational work that taught me how technology truly
            serves people. It wasn’t glamorous, but it was the bedrock that
            shaped my problem-solving mindset. */}
            My journey began at NBTS, where I took on a hands-on role in network
            infrastructure: configuring systems, solving real problems, and
            learning how tech meets everyday needs. It wasn’t flashy, but it
            taught me the value of solid groundwork and practical thinking.
          </p>
          <p className="justItDesc pe-lg-5">
            {/* The pace quickened when I joined ResearchGains. There, I stepped
            into leadership—driving frontend development, building highly
            responsive interfaces, and implementing automated workflows that
            slashed bug reports and elevated user satisfaction. It was a shift
            from just writing functional code to creating meaningful solutions.
            Every feature shipped felt like a small victory for usability and
            efficiency. */}
            At ResearchGains, I stepped into more responsibility: leading
            frontend efforts, streamlining workflows, and shipping features that
            made a real difference. It was here I learned that great code isn’t
            just functional; it’s thoughtful and user-focused.
          </p>
          <p className="justItDesc pe-lg-5">
            {/* Today at Klakpad, I engineer enterprise-grade software used by
            thousands across Nigeria. Whether it's managing inventory,
            processing sales, or simplifying customer relations, I build tools
            that make business smoother and smarter. Through every chapter, one
            theme has remained constant: a deep curiosity, a love for learning,
            and the drive to transform ideas into experiences that leave a
            lasting impact. */}
            Now at Klakpad, I build tools that help businesses run better;
            managing sales, inventory, and customer operations. I’ve grown into
            someone who doesn’t just build software, but shapes experiences that
            impact lives, driven by curiosity and a love for learning.
          </p>
          <div style={{ marginTop: "3rem" }}></div>
          <UniversalBtn onClick={() => navigate("resume")}>
            My resume <FiArrowUpRight className="ms-1" />
          </UniversalBtn>
          <div
            className="d-block d-lg-none"
            style={{ marginTop: "3rem" }}
          ></div>
        </div>
        <div className="col col-12 col-lg-6">
          <div className="image-layout">
            <div className="large-image">
              <Image
                src="/images/imgL.png"
                alt="Large"
                width={500}
                height={500}
              />
            </div>
            <div className="small-images">
              <Image
                src="/images/imgR1.png"
                alt="Large"
                width={500}
                height={500}
              />
              <Image
                src="/images/imgR2.png"
                alt="Large"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverTheYears;
