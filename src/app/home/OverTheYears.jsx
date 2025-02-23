import React from "react";
import SectionHead from "../components/secHead/SectionHead";
import Image from "next/image";
import "./OverTheYears.css";
import UniversalBtn from "../components/buttons/UniversalBtn";
import { TfiArrowTopRight } from "react-icons/tfi";

const OverTheYears = () => {
  // Example usage:

  return (
    <div className="container-md">
      <div className="row">
        <div className="col col-12 col-md-6">
          <SectionHead secHead1="WORK EXPERIENCE" secHead2="Over the years" />
          <p className="justItDesc">
            Lorem ipsum dolor sit amet consectetur. Varius blandit facilisis
            egestas nulla tristique viverra in. sit amet consectetur. Varius
            blandit facilisis egestas nulla tristique viverra in.
          </p>
          <p className="justItDesc">
            Sit amet consectetur. Varius blandit facilisis egestas nulla tmet
            contur sis egestas nulla tristique viverra in. sit et consectetur.
            Varius blandit fac
          </p>
          <p className="justItDesc">
            Varius blandit faciliilisis egestas nullviverra in. sit amet
            consectetur. Varius blandit facilisis egestas nulla tmet
            consectetur. Varius blandit facilisis egestas nulla tristique
            viverra in. sit amet
          </p>
          <div style={{ marginTop: "3rem" }}></div>
          <UniversalBtn>
            My resume <TfiArrowTopRight className="ms-1" />
          </UniversalBtn>
          <div
            className="d-block d-md-none"
            style={{ marginTop: "3rem" }}
          ></div>
        </div>
        <div className="col col-12 col-md-6">
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
