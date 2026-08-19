import { define } from "../define.js";

const styles = /*css*/ `
  :host {
    display: none;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
  }
  :host(.show) {
    display: flex;
    animation: rise 0.22s ease;
  }
  @keyframes rise {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .card__header {
    display: flex;
    gap: 1rem;
    padding-block: 1rem;
    border-bottom: 1px dashed var(--color-text);
  }
  .card__header .icon {
    height: 7rem;
    width: auto;
    margin-bottom: 1.5rem;
    background: var(--color-bg-primary);
    border: 1px solid var(--source-color-background);
    padding-inline: 1rem;
    padding-block: 1.5rem;
    min-width: 7rem;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  
  /* Molecules */
  .selected-item {
    display: flex;
    align-items: center;
    min-width: 8rem;
    gap: 0.5rem;
    border-radius: 0.5rem;
    padding-inline: 1rem;
    padding-block: 0.5rem;
  }
  .selected-item--goods {
    background-color: var(--color-bg-primary);
    color: var(--good-color-background);
    border: 2px solid var(--good-color-background);
  }
  .selected-item--source {
    background-color: var(--color-bg-primary);
    color: var(--source-color-background);
    border: 2px solid var(--source-color-background);
  }
  .source-section, .component-section, .use-section, .goods-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .source-section__heading, .use-section__heading, .goods-section__heading {
    padding-inline: 1rem;
    border: 1px solid var(--color-text);
  }
  .component-section__heading {
    padding-inline: 1rem;
    border: 1px dashed var(--color-text);
  }
  .source-section__heading { background: var(--source-color-background); }
  .source-section__heading .heading { color: var(--source-color-text); }
  .component-section__heading { background: var(--component-color-background); }
  .component-section__heading .heading { color: var(--component-color-text); }
  .component-section__heading .small { color: var(--color-bg-primary); }
  .use-section__heading { background: var(--used-in-color-background); }
  .use-section__heading .heading { color: var(--used-in-color-text); }
  .goods-section__heading { background: var(--good-color-background); }
  .goods-section__heading .heading { color: var(--good-color-text); }
  
  .source-section__list, .component-section__list, .use-section__list, .goods-section__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .source-section .selected-item {
    background: var(--color-bg-primary);
    border: 2px solid var(--source-color-background);
    color: var(--source-color-background);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .source-section .selected-item .small { color: var(--source-color-background); }
  .component-section .selected-item {
    border: 2px solid var(--component-color-background);
    color: var(--component-color-background);
  }
  .use-section .selected-item {
    border: 2px solid var(--used-in-color-background);
    color: var(--used-in-color-background);
  }
`;

const template = /*html*/ `
  <div class="card__header">
    <img id="c-icon" class="icon" alt="" style="display: none" />
    <div>
      <span id="c-kicker">Element</span>
      <h2 id="c-name">—</h2>
    </div>
  </div>

  <div class="card__content">
    <div id="c-sources-section" class="source-section" data-section="sources">
      <div class="source-section__heading"><h3 class="heading">Sources</h3></div>
      <div id="c-sources" class="source-section__list" data-role="list"></div>
    </div>

    <div id="c-components-section" class="component-section" data-section="components">
      <div class="component-section__heading">
        <h3 class="heading">Ingredients <span class="small"> (common)</span></h3>
      </div>
      <div id="c-components" class="component-section__list" data-role="list"></div>
    </div>

    <div id="c-used-section" class="use-section" data-section="used">
      <div class="use-section__heading"><h3 class="heading">Used in</h3></div>
      <div id="c-used" class="use-section__list" data-role="list"></div>
    </div>

    <div id="c-goods-section" class="goods-section" data-section="goods">
      <div class="goods-section__heading"><h3 class="heading">Goods</h3></div>
      <div id="c-goods" class="goods-section__list" data-role="list"></div>
    </div>
  </div>
`;

define("terra-card", { styles, template });
