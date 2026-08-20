// web-components/fonts.js
import { asset } from "./asset.js";

const fontFaceCSS = `
  @font-face {
    font-family: "Chicle";
    src: url("${asset("assets/fonts/Chicle-Regular.woff2")}") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "StackSans";
    src: url("${asset("assets/fonts/StackSansText-Bold.woff2")}") format("woff2");
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "StackSans";
    src: url("${asset("assets/fonts/StackSansText-Regular.woff2")}") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
`;

const style = document.createElement("style");
style.textContent = fontFaceCSS;
document.head.appendChild(style);
