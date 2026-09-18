import { define } from "../../lib/define.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`;

const attrs = ["width", "height", "src", "alt"];

const template = () => /* html */ `<img data-forward />`;

define("app-logo", { attrs, styles, template });
