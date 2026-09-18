import { asset } from "../../lib/asset.js";

const fontFaceCSS = `
@font-face {
    font-family: "Archivo";
    src: url("${asset("./assets/fonts/Andika-Bold.woff2")}") format("woff2");
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    font-family: "Archivo";
    src: url("${asset("./assets/fonts/Andika-Regular.woff2")}") format("woff2");
    font-weight: 400;
    font-display: swap;
  }
`;

const style = document.createElement("style");
style.textContent = fontFaceCSS;
document.head.appendChild(style);
