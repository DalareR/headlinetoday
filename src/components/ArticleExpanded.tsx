import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Article } from "../hooks/useGetArticles";

interface Props {
  article: Article;
}

function ArticleExpanded({ article }: Props) {
  return (
    <Box
      h="100%"
      overflow="scroll"
      borderRadius="15px"
      boxShadow="5px 5px 15px rgba(0,0,0, .3)"
      m="10px"
      p="15px"
    >
      <Flex h="100%" direction="column">
        <Image
          w="100%"
          flex="1"
          objectFit="cover"
          objectPosition="center"
          borderRadius="15px"
          src={article.urlToImage}
          mb="15px"
        />
        <VStack flex="1" mt="15px" justifyContent="space-between">
          <VStack spacing="15px">
            <Text textStyle="h3">{article.title}</Text>
            <Text>{article.description}</Text>
          </VStack>
          <HStack w="100%" justifyContent="space-between" pt="20px">
            <Text textStyle="h4">{article.author}</Text>
            <Text textStyle="h4">{article.publishedAt}</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default ArticleExpanded;
