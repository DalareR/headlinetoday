import { Box, Image, VStack, Text, HStack } from "@chakra-ui/react";

function ArticleBox() {
  return (
    <HStack borderRadius="15px" boxShadow="5px 5px 15px rgba(0,0,0, .3)">
      <Image
        w={{ base: "130px", md: "150px" }}
        h={{ base: "130px", md: "150px" }}
        bg="gray"
        m="10px"
        borderRadius="10%"
      />
      <VStack alignItems="start">
        <Text textStyle="h3">Title Goes Here</Text>
        <Text textStyle="h4">News Source</Text>
        <Text fontSize=".9rem" fontStyle="italic" fontWeight="bold">
          01/02/2024
        </Text>
      </VStack>
    </HStack>
  );
}

export default ArticleBox;
