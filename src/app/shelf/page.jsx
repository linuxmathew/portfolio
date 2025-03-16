"use client";
import SlashHead from "../components/slashHead/slashHead";
import ArticlePeep from "./components/articleCard/articlePeep";
import SectionDivider from "../components/SectionDivider";
import "./shelf.css";

export default function Shelf() {
  const articleArr = [
    {
      id: "3571",
      date: " July 20, 2021",
      readTime: 7,
      head: "Five months journey on the quest to becoming a full-stack developer",
      tip: "Tips for every young developer and beginners.",
      lead: " I will try as much as possible to make this article not be just about my story but to also serve as a guide for fellow young developers who are planning...",
      img: "/images/full-stack-quest.svg",
    },
    {
      id: "3572",
      date: " July 20, 2021",
      readTime: 7,
      head: "What happens when you type google.com in your browser and press Enter?",
      tip: "A peep into behind the scene of web request",
      lead: " Imagine the internet as a massive library, filled with endless shelves of books containing every piece of information you could ever need...",
      img: "/images/google-com.svg",
    },
  ];
  return (
    <>
      <div className="shelf-contain container-md px-md-5">
        <SlashHead headName="Shelf" />
        {articleArr.map((article, index) => (
          <div key={index}>
            <ArticlePeep article={article} />
            {index === articleArr.length - 1 ? "" : <hr className="my-5" />}
          </div>
        ))}
      </div>
      <SectionDivider isDefault />
    </>
  );
}
