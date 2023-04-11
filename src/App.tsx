import { Box, Grid, GridItem } from "@chakra-ui/react";
import ArticleBox from "./components/ArticleBox";
import ArticleExpanded from "./components/ArticleExpanded";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";

const key = `6931e5d37075445a96f6b0850b424f03`;

function App() {
  return (
    <div className="App">
      {/* <Articles /> */}
      <NavBar />
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
          <Articles />
        </GridItem>
        <GridItem gridArea="articleExpanded">
          <ArticleExpanded />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
