import { HStack, Text } from "@chakra-ui/react";

function NavBar() {
  return (
    <HStack justifyContent="center" textAlign="center">
      <Text textStyle="h1" color="brand.100" p="5px">
        Headline Today
      </Text>
    </HStack>
  );
}

export default NavBar;
