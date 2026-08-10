import { define } from "../define";

const styles = /* css */ `
  :host {
    --local-width: 5rem;
    --local-heigth: auto;

    display: block;
  }

  img {
    max-width: var(--local-width);
    height: var(--local-heigth);
  }

  :host([variant="normal"]) {
    --local-width: 12rem;
    --local-heigth: auto;
  }

  :host([variant="large"]) {
    --local-width: 50rem;
  }
`;

const attrs = ["width", "height", "src", "alt"];

const template = () => /* html */ `<img data-forward />`;

define("app-image", { attrs, styles, template });
