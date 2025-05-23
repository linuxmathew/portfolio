import React from "react";
import "./article.css";
import Image from "next/image";
import SectionDivider from "../../components/SectionDivider";
import { getArticleBySlug } from "../services/getArticleData";
import PortableText from "@sanity/block-content-to-react";

const dummy = {
  id: "3571",
  date: " July 20, 2021",
  readTime: 7,
  head: "Five months journey on the quest to becoming a full-stack developer",
  tip: "Tips for every young developer and beginners.",
  lead: [
    {
      id: 1,
      para: "Lorem ipsum dolor sit amet consectetur. Amet volutpat ut in at aliquet orci morbi. Eu porttitor sed et nunc cum eget quisque condimentum nulla. Aliquam est ut in volutpat arcu massa sem enim. Enim sed integer ultricies mollis. Tincidunt morbi mi sit sem. Ullamcorper vel urna quis ut. Nibh eget nunc odio scelerisque diam vel amet. ",
    },
    {
      id: 2,
      para: "Lectus vel ultrices sit quam semper non. Tortor tempor odio lobortis nisl dictum. At egestas eu massa habitant semper tempus. Dignissim aenean convallis ornare morbi at nisl arcu commodo. Molestie senectus laoreet dignissim feugiat morbi malesuada imperdiet congue sed. Volutpat varius eget sit mattis. Eu duis euismod amet gravida amet mauris lectus dui hendrerit.",
    },
    {
      id: 3,
      para: "Pharetra neque natoque turpis malesuada vitae. Sed ac elementum enim et leo. Platea sed proin diam mauris. Convallis nunc rhoncus euismod vitae ipsum adipiscing. Quisque nam magna hac sit malesuada hendrerit. Netus massa lectus pretium elementum amet magnis et. Dignissim leo tristique quam porttitor orci vel est.",
    },
    {
      id: 4,
      para: "Libero lacus morbi dictumst cursus risus molestie. Velit quis vel aliquam quam nunc dignissim potenti. Placerat ornare elementum congue ipsum dolor varius. Habitant orci pellentesque id malesuada. Imperdiet pellentesque a scelerisque sit auctor ultrices imperdiet eget. Ante dui vel condimentum diam. Amet cursus lectus eu id.",
    },
    {
      id: 5,
      para: "Orci consequat sit sed purus netus in tortor viverra. Tempus hendrerit ornare etiam adipiscing arcu ut leo sed. Vel et adipiscing arcu vel. A netus sed orci massa mauris integer tristique imperdiet. Mauris habitasse et convallis semper vel enim ut facilisi. Non sit donec mattis pellentesque id. Id.",
    },
  ],
  img: "/images/full-stack-quest.svg",
};
const ArticleDetails = async ({ params }) => {
  const { slug } = params;
  //   const article = await getArticleByUUID(uuid); // Fetch article details

  if (!slug || typeof slug !== "string") {
    console.log("Invalid slug:", slug);
    notFound();
  }

  const article = await getArticleBySlug(slug);
  console.log("articu", article);

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
