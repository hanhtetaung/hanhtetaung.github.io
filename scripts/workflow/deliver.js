import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  hgroup {
    margin-bottom: 15rem;
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }

  h3 {
    margin: 0;
    margin-top: 10rem;
    font-size: var(--size-heading);
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
    max-width: 70ch;
  }


`;

const template = /* html */ `

<section>
  <hgroup>
     <h2>Deliver</h2>
     <p>Hand over html files and assets. The site is 100% yours.</p>
  </hgroup>

  <h2>Done</h2>

</section>

`;

define("section-workflow-deliver", { styles, template });
