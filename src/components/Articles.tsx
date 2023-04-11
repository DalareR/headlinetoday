import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import ArticleBox from "./ArticleBox";
import { useEffect, useState } from "react";

const key = `6931e5d37075445a96f6b0850b424f03`;

interface Source {
  id: string | null;
  name: string | null;
}

export interface Article {
  title: string;
  author: string;
  description: string;
  publishedAt: string;
  source: Source;
  urlToImage: string;
}

function Articles() {
  const controller = new AbortController();
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getArticle();
  }, []);

  function getArticle() {
    const request = axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setArticles(res.data.articles);
        console.log(res.data.articles);
      })
      .catch((err) => {
        setError(err.message);
      });
  }

  return (
    <Box
      h="100%"
      position="relative"
      _after={{
        position: { base: "fixed", md: "absolute" },
        top: "90%",
        left: "0%",
        content: `''`,
        width: "100%",
        height: "10%",
        borderRadius: { base: "none", md: "0 0 15px 15px" },
        bg: `linear-gradient(0deg, rgba(29,29,29,.5) 0%, rgba(242,113,33,0) 100%)`,
      }}
    >
      <Box h="100%" overflow="scroll" p="15px" borderRadius="15px">
        {articles.map((article) => (
          <ArticleBox
            key={article.title}
            imageURL={article.urlToImage}
            title={article.title}
            source={article.source.name}
            publishDate={article.publishedAt}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Articles;
