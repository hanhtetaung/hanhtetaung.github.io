import { define } from "../define.js";
import { PHONE } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 10;
    border: 7px solid var(--color-secondary);
    pointer-events: none;

    @media (max-width: ${PHONE}) {
      border-width: 5px;
    }
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
