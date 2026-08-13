import { define } from "../define";

const styles = /* css */ `
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

    display: inline-block;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    width: fit-content;
    white-space: nowrap;
    border-radius: 3rem;
    border: var(--local-border);
    font-size: var(--size-small);
    background: var(--local-bg);
    color: var(--local-color);
  }

  :host([variant="outline"]) {
    --local-bg: var(--color-transparent);
    --local-color: var(--color-secondary);
    --local-border: 1px solid var(--color-secondary);
  }

  :host([variant="success"]) {
    /* --local-bg: #157d6c; */
    --local-bg: #a36aa5;
     --local-border: 1px solid var( --local-color);
  }
`;

const props = { name: String };

const template = ({ name }) => /* html */ `${name}`;

define("app-badge", { props, styles, template });
