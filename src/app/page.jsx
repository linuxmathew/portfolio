import Hero from "./home/hero/Hero";
import SlideTech from "./components/slideTechnologies/slideTech";
import BuildRead from "./home/buildRead/BuildRead";
import WorkSection from "./home/WorkSection";
import OverTheYears from "./home/OverTheYears";
import SectionDivider from "./components/SectionDivider";
import WhatPeopleSay from "./home/whatPeopleSay/WhatPeopleSay";
import OtherThings from "./home/otherThings/OtherThings";

const testimonials = [
  {
    quote:
      "Working with Temitayo was a game changer for our team. Not only did they bring deep technical expertise, but their ability to simplify complex problems and collaborate across functions really elevated our entire workflow.",
    name: "Adewale Adedokun",
    title: "ICT coordinator, NBTS",
  },
  {
    quote:
      "Temitayo doesn’t just write great code—they solve real problems. Whether it was debugging legacy systems or architecting new features, they always approached challenges with clarity, empathy, and a bias for action.",
    name: "Seun Oriade",
    title: "Software Team Lead, Klakpad.",
  },
  {
    quote:
      "One of the most reliable and thoughtful engineers I’ve worked with. Temitayo seamlessly fit into our fast-paced environment, communicated clearly, and consistently delivered beyond expectations.",
    name: "Gideon Ayanwoye",
    title: "Data Engineer, Raenest",
  },
  {
    quote:
      "Every team needs a Tayo. Adaptable, solution-oriented, and always willing to jump in where needed. They’re the kind of teammate who makes others better just by being on the project.",
    name: "Omiwole Temitope",
    title: "Fullstack Engineer, Klakpad",
  },
  {
    quote:
      "Temitayo brought a rare mix of technical depth and people skills. His insights during code reviews, paired with a calm and constructive approach, made him a cornerstone of our development team.",
    name: "Idowu Adeyinka",
    title: "Backend Engineer, Klakpad",
  },
];

export default function Home() {
  return (
    <>
      <div className="container-md">
        <Hero />
      </div>
      <SlideTech />
      <BuildRead />
      <div
        className="d-block d-md-none"
        style={{ borderBottom: "1px solid #aaaadd", marginBottom: "4.25rem" }}
      ></div>
      <WorkSection />
      <SectionDivider isDefault />
      <OverTheYears />
      <SectionDivider isDefault />
      <WhatPeopleSay testimonials={testimonials} />
      <SectionDivider isDefault />
      <OtherThings />
      <SectionDivider isDefault />
    </>
  );
}

// const styles = {
//   hello: {
//     color: "var(--primary-color)",
//   },
// };
