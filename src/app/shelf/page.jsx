import SlashHead from "../components/slashHead/slashHead";
import ArticlePeep from "./components/articleCard/articlePeep";
import SectionDivider from "../components/SectionDivider";
import "./shelf.css";
import { getAllArticles } from "./services/fetchAllArticles";

export default async function Shelf() {
  const articles = await getAllArticles();
  console.log("incos", articles);

  if (!articles || articles.length === 0) {
    return (
      <div className="container-md">
        <SlashHead headName="Shelf" />
        <p>No articles found.</p>
      </div>
    );
  }
  // Dummy data for articles

  return (
    <>
      <div className="shelf-contain container-md px-md-5">
        <SlashHead headName="Shelf" />
        {articles.map((article, index) => (
          <div key={index}>
            <ArticlePeep article={article} />
            {index === articles.length - 1 ? "" : <hr className="my-5" />}
          </div>
        ))}
      </div>
      <SectionDivider isDefault />
    </>
  );
}
