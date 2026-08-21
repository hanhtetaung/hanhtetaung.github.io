import { define } from "../define.js";

const styles = /* css */ `
  :host {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 10;
    border: 10px solid var(--color-secondary);
    pointer-events: none;
  }

  :host([variant="color-primary"]) {
    /* border-color: var(--color-primary); */
    /* border-color: var(--color-tertiary); */
    /* border-color: #a36aa5; */
  }
`;

const template = /* html */ `
`;

define("app-frame", { styles, template });
