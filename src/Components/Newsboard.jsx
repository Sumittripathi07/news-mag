import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

 const Newsboard = ({ category }) => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setarticles(data.articles));
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger fs-7">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default Newsboard;
