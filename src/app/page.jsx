import Hero from "./home/hero/Hero";
import SlideTech from "./components/slideTechnologies/SlideTech";
import BuildRead from "./home/buildRead/BuildRead";
import WorkSection from "./home/WorkSection";
import OverTheYears from "./home/OverTheYears";
import SectionDivider from "./components/SectionDivider";
import WhatPeopleSay from "./home/whatPeopleSay/WhatPeopleSay";
import OtherThings from "./home/otherThings/OtherThings";
import LetsWork from "./components/workTogether/letsWork";
import ContactMeFooter from "./components/contactMe/ContactMe";

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
      <WhatPeopleSay />
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
