// web-components/fonts.js
import { asset } from "./asset.js";

const fontFaceCSS = `
@font-face {
    font-family: "Archivo";
    src: url("${asset("./assets/fonts/Archivo-Black.woff2")}") format("woff2");
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Archivo";
    src: url("${asset("./assets/fonts/Archivo-Regular.woff2")}") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
`;

const style = document.createElement("style");
style.textContent = fontFaceCSS;
document.head.appendChild(style);
