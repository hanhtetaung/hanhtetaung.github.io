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
`;

const template = /* html */ `
`;

define("app-frame", { styles, template });
