import { Box } from "@chakra-ui/react";
import ArticleBox from "./ArticleBox";
import { Article } from "../hooks/useGetArticles";

interface Props {
  articles: Article[];
  onClick: (article: Article) => void;
}

function Articles({ articles, onClick }: Props) {
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
            onClick={() => onClick(article)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Articles;
