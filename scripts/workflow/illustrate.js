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
        /* flex-direction: row-reverse; */
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
    /* max-width: 40ch; */
  }

  img {
    width: 100%;
    height: auto;
  }

`;

const template = /* html */ `

<section>
    <hgroup>
        <h2>illustrate</h2>
    </hgroup>
    
    <article>
        <p>Create hand-drawn illustrations inspired by the business, story, and personality. These small details make the website feel unique.</p>

        <img src=${asset("./assets/images/workflow/illustrate.png")} alt="Drawing on ipad">
    </article>

</section>

`;

define("section-workflow-illustrate", { styles, template });
