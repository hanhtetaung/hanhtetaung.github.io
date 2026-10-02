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
    margin-bottom: 2rem;
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
    /* max-width: 70ch; */
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const template = /* html */ `
<section>
  <hgroup>
     <h2>Brainstorming</h2>
     <p>Learn about the business and its story. Uncover its unique character, identity, and vibe through questions and conversation.</p>
  </hgroup>

  <img src=${asset("./assets/images/workflow/brainstorming.png")} alt="Stickey notes on the wall">

</section>

`;

define("section-workflow-brainstorming", { styles, template });
