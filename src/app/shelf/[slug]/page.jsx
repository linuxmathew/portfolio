import React from "react";
import "./article.css";
import Image from "next/image";
import SectionDivider from "../../components/SectionDivider";
import { getArticleBySlug } from "../services/getArticleData";
import PortableText from "@sanity/block-content-to-react";

const ArticleDetails = async ({ params }) => {
  const { slug } = params;

  if (!slug || typeof slug !== "string") {
    // console.log("Invalid slug:", slug);
    notFound();
  }

  const article = await getArticleBySlug(slug);
  const { title, content, publishedAt, readTime, tip, image } = article;
  const date = new Date(publishedAt).toISOString().split("T")[0];
  return (
    <>
      <div className="container-md article-wrapper ">
        <div className="content-wrapper mx-auto">
          <p className="articleHead">{title}</p>
          <div className="date-and-time d-flex">
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
          <Image
            className="article-image"
            src={image}
            alt=""
            layout="responsive"
            width={100}
            height={100}
            style={{ marginRight: "8px", borderRadius: "8px" }}
          />

          <div className="">
            <PortableText
              blocks={content}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              serializers={{
                types: {
                  block: (props) =>
                    props.node.style === "normal" ? (
                      <p className="article-body">{props.children}</p>
                    ) : (
                      PortableText.defaultSerializers.types.block(props)
                    ),
                },
              }}
            />
          </div>
        </div>
      </div>
      <SectionDivider isDefault />
    </>
  );
};

export default ArticleDetails;
