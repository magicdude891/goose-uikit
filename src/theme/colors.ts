import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#708090",
  primaryBright: "#708090",
  primaryDark: "#708090",
  secondary: "#444444",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#778899",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#444444",
  textDisabled: "#BDC2C4",
  textSubtle: "#444444",
  borderColor: "#C0C0C0",
  card: "#696969",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#708090",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#708090",
  tertiary: "#353547",
  text: "#add8e6",
  textDisabled: "#666171",
  textSubtle: "#add8e6",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
