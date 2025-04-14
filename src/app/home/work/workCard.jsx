import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import "./workCard.css";

const WorkCard = ({ image, title, link, desc, addLink }) => {
  return (
    <>
      <div
        className="relative group"
        style={{
          padding: "30px",
          backgroundColor: "#13132F",
          borderRadius: "24px",
          overflow: "hidden", // Ensure content stays within rounded borders
          marginBottom: "24px",
        }}
      >
        {/* Image with fade-out on hover */}
        <Image
          src={image}
          alt={title}
          width={330}
          height={250}
          layout="responsive"
          className="object-cover w-full h-60 transition-opacity duration-300 group-hover:opacity-20"
        />

        {/* Overlay background that appears on hover */}
        <div
          className="absolute inset-0 bg-[#13132F] opacity-0 group-hover:opacity-90 transition-opacity duration-300"
          style={{ zIndex: 10 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            zIndex: 20,
            backdropFilter: "blur(5px)", // Apply blur to the background
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional dark overlay
          }}
        >
          <p className="text-sm text-center text-white font-medium">{desc}</p>
        </div>
        {/* <div
          className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 description-overlay mt-0"
          style={{ zIndex: 20 }}
        >
          <p className="text-sm text-center text-white font-medium bg-red-500">
            {desc}
          </p>
        </div> */}

        {/* Optional: Uncomment to show title and link below image at all times */}
        {/* <div className="p-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View Project
          </a>
        )}
      </div> */}
      </div>
      {addLink && (
        <p
          className="d-flex align-items-center py-0"
          style={{ cursor: "pointer" }}
        >
          {" "}
          <span style={{ marginRight: "20px" }}>
            <FaArrowRight className="link-icon" />{" "}
          </span>{" "}
          <span className="link-title">{title}</span>
        </p>
      )}
    </>
  );
};

export default WorkCard;
