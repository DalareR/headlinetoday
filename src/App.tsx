import { Grid, GridItem } from "@chakra-ui/react";
import ArticleBox from "./components/ArticleBox";
import ArticleExpanded from "./components/ArticleExpanded";
import NavBar from "./components/NavBar";

const key = `6931e5d37075445a96f6b0850b424f03`;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Grid
        gridTemplateAreas={{
          base: `'articleExpanded' 'articles'`,
          md: `'articles articleExpanded'`,
        }}
        templateColumns={{ base: "auto", md: "1fr 1fr" }}
        gap="5"
        p="25px"
      >
        <GridItem gridArea="articles">
          <ArticleBox />
        </GridItem>
        <GridItem gridArea="articleExpanded">
          <ArticleExpanded />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
