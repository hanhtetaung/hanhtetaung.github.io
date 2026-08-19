import { define } from "../define.js";
import "../components/terra-header.js";

const styles = /*css*/ `
  :host {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    background: var(--color-bg-primary);

  }
 
  @media (max-width: 768px) {
    .center { height: 70%; }
  }

  #cy {
    width: 100%;
    height: 100%;
  }
`;

const template = /*html*/ `
    <terra-header></terra-header>
    <div id="cy"></div>
`;

define("terra-main-panel", { styles, template });
