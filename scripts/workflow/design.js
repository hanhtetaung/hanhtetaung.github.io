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

    @media (min-width: ${DESKTOP}) {
        display: flex;
        gap: 20rem;
    }
  }

  hgroup {
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
    /* max-width: 70rem; */
  }

  img {
    width: 100%;
    height: auto;
  }


`;

const template = /* html */ `

<section>
  <hgroup>
     <h2>Design</h2>
    </hgroup>
    
    <article>
        <p>Define the visual direction, layout, and storytelling in Figma. Create the overall website view and map how each section connects.</p>
        <img src=${asset("./assets/images/workflow/design.png")} alt="Designing at figma">
    </article>


</section>

`;

define("section-workflow-design", { styles, template });
