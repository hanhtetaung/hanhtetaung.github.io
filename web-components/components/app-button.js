import { define } from "../define";

const styles = /* css */ `
  :host {
    --local-bg: var(--color-primary);
    --local-color: var(--color-bg-primary);
    --local-border: 1px solid var(--color-secondary);
    --local-padding: 1rem 2rem;

    display: block;
    padding: 0;
    
  }

  button {
    display: inline-flex;
    gap: 0.5rem;
    font-size: var(--size-body);
    font-family: var(--font-body);
    justify-content: center;
    background: var(--local-bg);
    color: var(--local-color);
    border: var(--local-border);
    padding: var(--local-padding);
  }
`;

const attrs = ["type"];

const template = /* html */ `
  <button
    data-forward
    onclick="const form = this.getRootNode().host.closest('form'); if (this.type === 'submit' && form) { form.requestSubmit ? form.requestSubmit() : form.submit(); }"
  >
    <slot></slot>
  </button>
`;

define("app-button", { attrs, styles, template });
