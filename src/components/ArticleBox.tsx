import { Box, Image, VStack, Text, HStack, Stack } from "@chakra-ui/react";

interface Props {
  title: string;
  source: string | null;
  publishDate: string;
  imageURL: string | undefined;
}

function ArticleBox({ title, source, publishDate, imageURL }: Props) {
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      borderRadius="15px"
      boxShadow="5px 5px 15px rgba(0,0,0, .3)"
      m="10px"
      transition="all .2s ease"
      _hover={{ transform: "scale(1.03)", transition: "all .2s ease" }}
      cursor="pointer"
      alignItems="center"
    >
      <Image
        w={{ base: "130px", md: "150px" }}
        h={{ base: "130px", md: "150px" }}
        objectFit="cover"
        objectPosition="center"
        bg="gray"
        m="10px"
        borderRadius="10%"
        src={imageURL}
      />
      <VStack alignItems="start" p="10px">
        <Text
          textStyle="h3"
          _hover={{
            textDecor: "underline",
          }}
        >
          {title}
        </Text>
        <Text textStyle="h4" color="gray">
          {source}
        </Text>
        <Text fontSize=".9rem" fontWeight="bold">
          {publishDate}
        </Text>
      </VStack>
    </Stack>
  );
}

export default ArticleBox;
