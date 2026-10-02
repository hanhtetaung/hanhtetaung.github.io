import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
    margin-block: 15rem;

    @media (min-width: ${DESKTOP}) {
      margin-top: 20rem;
      margin-bottom: 25rem;
    }
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    text-align: center;
  }

  hgroup {
    margin-bottom: 3rem;
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }

  p {
    margin: 0;
    margin-bottom: 0.7rem;
  }

  img {
    width: 100%;
    height: auto;
  }


`;

const template = /* html */ `

<section>
  <hgroup>
     <h2>Develop</h2>
     <p>Build the website section by section using plain HTML, CSS, and JavaScript.</p>
        
     <p>Use the Figma design as a reference, not a blueprint. Let the design evolve naturally and make sure everything feels right across mobile, tablet, and laptop screens.</p>
  </hgroup>

  <img src=${asset("./assets/images/workflow/develop.png")} alt="Two Screens Setup">

</section>

`;

define("section-workflow-develop", { styles, template });
