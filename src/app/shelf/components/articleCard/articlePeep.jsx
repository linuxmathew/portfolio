import "./articlePeep.css";
import Image from "next/image";
import Link from "next/link";

const ArticlePeep = ({ article }) => {
  const { publishedAt, readTime, title, tip, excerpt, image, slug } = article;

  const date = new Date(publishedAt).toISOString().split("T")[0];
  // console.log("article", article);

  return (
    <Link
      href={`/shelf/${slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div key={slug} className="row" style={{ cursor: "pointer" }}>
        <div className="colLeftSide col col-12 col-md-8 ">
          <div className="dateAndTime d-flex">
            <span
              // className="me-4"
              style={{ marginRight: "24px" }}
            >
              {date}
            </span>
            <span>
              {" "}
              <Image
                // className="me-2"
                src="/images/icons/book-open-01.svg"
                alt=""
                // layout="responsive"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
              {readTime} min read
            </span>
          </div>
          <p className="displayHeading">{title}</p>
          {tip && <i className="articleTips">{tip}</i>}

          <p className="articleLead">{excerpt}</p>
        </div>
        <div className="col">
          <Image
            src={image}
            alt=""
            // layout="responsive"
            width={350}
            height={250}
            style={{ width: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticlePeep;
