import { define } from "../define.js";
import "../components/terra-empty-state.js";
import "../components/terra-card.js";

const styles = /*css*/ `
  :host {
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-secondary);
    border-left: 1px solid var(--color-text);
    width: 100%;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    :host { height: 30%; }
  }
`;

const template = /*html*/ `
  <terra-empty-state id="empty"></terra-empty-state>
  <terra-card id="card"></terra-card>
`;

define("terra-right-panel", { styles, template });
