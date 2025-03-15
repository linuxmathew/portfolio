import "./articlePeep.css";
import Image from "next/image";
import Link from "next/link";

const ArticlePeep = ({ article }) => {
  const { date, readTime, head, tip, lead, img, id } = article;

  return (
    <Link
      href={`/shelf/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div key={id} className="row" style={{ cursor: "pointer" }}>
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
          <p className="displayHeading">{head}</p>
          {tip && <i className="articleTips">{tip}</i>}

          <p className="articleLead">{lead}</p>
        </div>
        <div className="col">
          <Image
            src={img}
            alt=""
            layout="responsive"
            width={300}
            height={200}
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticlePeep;
