import { define } from "../define.js";

const styles = /*css*/ `
  :host {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
  }

  .icon-empty {
    height: 15rem;
    width: auto;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    margin-bottom: 0.5rem;
  }

  p {
    margin: 0;
    font-size: var(--size-body);
  }

  @media (max-width: 768px) {
    .icon-empty { height: 7rem; }
  }
`;

const template = /*html*/ `
    <img src="/terra/assets/icons/select-node.svg" alt="Select a Node" class="icon-empty" />
    <div class="empty__content">
      <h2>Select a node</h2>
      <p>Explore the connections between natural sources and everyday goods</p>
    </div>
`;

define("terra-empty-state", { styles, template });
