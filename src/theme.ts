import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: "#CCCCCC",
      color: "#323232",
      fontFamily: `'Inter', sans-serif`,
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
    fontSize: ["2.5rem", "4rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
  h2: {
    fontSize: ["1.7rem", "2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
  h3: {
    fontSize: ["1.2rem", "1.5rem"],
    fontWeight: "bold",
    lineHeight: "105%",
    fontFamily: `'Inter', sans-serif`,
  },
  h4: {
    fontSize: [".8rem", "1.2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
};

export const theme = extendTheme({ textStyles, colors, styles });
