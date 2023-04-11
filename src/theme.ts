import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#CCCCCC",
      color: "#323232",
      fontFamily: `'Playfair Display', serif`,
    },
  },
};

const colors = {
  brand: {
    100: "#B10000",
    200: "#333333",
  },
};

const textStyles = {
  h1: {
    fontSize: ["3rem", "4rem"],
    fontWeight: "bold",
    lineHeight: "100%",
  },
  h2: {
    fontSize: ["2rem", "3rem"],
    fontWeight: "bold",
    lineHeight: "100%",
  },
  h3: {
    fontSize: ["1.5rem", "2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
  },
  h4: {
    fontSize: [".8rem", "1.2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
  },
};

export const theme = extendTheme({ textStyles, colors, styles });
