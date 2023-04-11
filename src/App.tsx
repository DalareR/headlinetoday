import { Grid, GridItem, Text } from "@chakra-ui/react";
import ArticleExpanded from "./components/ArticleExpanded";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import useGetArticles, { Article } from "./hooks/useGetArticles";

function App() {
  const { articles, error, selectedArticle, setSelectedArticle } =
    useGetArticles();

  function handleArticleClick(article: Article) {
    setSelectedArticle(article);
  }

  return (
    <div className="App">
      <NavBar />
      {error ? (
        <Text textStyle="h2">{error}</Text>
      ) : (
        <Grid
          gridTemplateAreas={{
            base: `'articleExpanded' 'articles'`,
            md: `'articles articleExpanded'`,
          }}
          templateColumns={{ base: "auto", md: "1fr 1fr" }}
          gap="5"
          p={{ base: "10px", lg: "25px" }}
        >
          <GridItem h="85vh" gridArea="articles">
            <Articles onClick={handleArticleClick} articles={articles} />
          </GridItem>
          <GridItem gridArea="articleExpanded" h="85vh" p="15px">
            <ArticleExpanded article={selectedArticle} />
          </GridItem>
        </Grid>
      )}
    </div>
  );
}

export default App;
