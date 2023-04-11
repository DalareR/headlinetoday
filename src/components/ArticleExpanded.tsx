import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

function ArticleExpanded() {
  return (
    <Box
      h="100%"
      borderRadius="15px"
      boxShadow="5px 5px 15px rgba(0,0,0, .3)"
      p="15px"
    >
      <Flex direction="column">
        <Box flex="1" mb="15px">
          <Image w="400px" h="400px" bg="gray" borderRadius="15px" />
        </Box>
        <VStack alignItems="start" flex="1">
          <Text textStyle="h3">This is a title</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            beatae aut commodi, error modi ex voluptas reprehenderit assumenda
            autem sit.
          </Text>
          <HStack justifyContent="space-between">
            <Text textStyle="h4">Author: Michael Jr.</Text>
            <Text textStyle="h4">01/02/2023</Text>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
}

export default ArticleExpanded;
