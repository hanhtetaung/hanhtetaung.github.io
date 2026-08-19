import { define } from "../define.js";

import "../components/terra-legend.js";

const styles = /*css*/ `
  :host {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 5rem;
    padding-block: 2rem;
    z-index: 5;
    width: fit-content;
  }
  @media (max-width: 768px) {
    :host { padding-inline: 1rem; }
  }
  .legend {
    display: flex;
    gap: 18px;
    margin-bottom: 1rem;
  }
  .legend span {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .source-legend, .goods-legend, .components-legend, .use-legend {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
  }
  .source-legend { background: var(--source-color-background); }
  .goods-legend { background: var(--good-color-background); }
  .components-legend { background: var(--component-color-background); }
  .use-legend { background: var(--used-in-color-background); }
  
  .search-container {
    position: relative;
    width: 100%;
    max-width: 320px;
    margin-bottom: 1.5rem;
  }
  #search-input {
    width: 100%;
    padding: 10px 14px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    background: #ffffff;
    color: #0e172a;
    font-family: inherit;
  }
  #search-input:focus {
    border-color: var(--source-color-background);
  }
  .search-results {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    max-height: 250px;
    overflow-y: auto;
    list-style: none;
    padding: 0;
    margin: 0;
    display: none;
    z-index: 1000;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  .search-result-item {
    padding: 10px 14px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    transition: background 0.1s;
  }
  .search-result-item:last-child { border-bottom: none; }
  .search-result-item:hover { background-color: #f8fafc; }
`;

const template = /*html*/ `
  <header class="header">
    <h1 class="display">Terra</h1>
    <div class="legend">
      <!-- <span class="small"><i class="source-legend"></i>Source</span>
      <span class="small"><i class="goods-legend"></i>Good</span>
      <span class="small"><i class="components-legend"></i>Ingredient</span>
      <span class="small"><i class="use-legend"></i>Use</span> -->
       <terra-legend variant="source" props='{"name": "Source"}'></terra-legend>
      <terra-legend variant="goods" props='{"name": "Goods"}'></terra-legend>
      <terra-legend variant="ingredient" props='{"name": "Ingredients"}'></terra-legend>
      <terra-legend variant="use" props='{"name": "Use"}'></terra-legend>
    </div>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="Search Sources & Goods..." autocomplete="off" />
      <ul id="search-results" class="search-results"></ul>
    </div>
  </header>
`;

define("terra-header", {
  styles,
  template,
});
