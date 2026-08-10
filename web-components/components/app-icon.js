import { define } from "../define";

const styles = /* css */ `
  :host {
    --local-width: 3rem;
    --local-height: auto;

    display: block;
  }

  img {
    width: var(--local-width);
      height: var(--local-height);
  }

  :host([variant="large"]) {
    --local-width: auto;
    --local-height: 10rem;
  }

  :host([variant="creator"]) {
    --local-height: auto;
    --local-width: 4rem;
  }


`;

const attrs = ["src", "alt"];

const template = () =>
  /* html */ `<img data-forward width="200" height="200"/>`;

define("app-icon", { attrs, styles, template });
