import Image from "next/image";

const WorkCard = ({ image, title, link, desc }) => {
  return (
    <div
      className="relative group"
      style={{
        padding: "30px",
        backgroundColor: "#13132F",
        borderRadius: "24px",
        overflow: "hidden", // Ensure content stays within rounded borders
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
        style={{ zIndex: 10 }} // Overlay on top of image
      />

      {/* Description that appears on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ zIndex: 20 }} // Description on top of overlay
      >
        <p className="text-sm text-center text-white font-medium ">
          {desc || "No description available"}
        </p>
      </div>

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
  );
};

export default WorkCard;
