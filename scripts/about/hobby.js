import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";

import { TABLET, LARGE } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  p {
    margin: 0;
  }

  div {
    overflow: scroll;
  }

  hgroup {
    margin-top: 2rem; 
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 1rem;
  }


  img {
    height: 50rem;
    width: auto;

    @media (min-width: ${TABLET}) {
      height: auto;
      width: 100%;
    }
  }
`;

const template = /* html */ `


<section>
  <div>
    <img src=${asset("./assets/images/home/sketching.avif")} alt="Sketching SEA">
  </div>
  <hgroup>
    <h2>Self-taught in illustration</h2>
    <p>All hand-drawn. Bring the same approach to make each website feel memorable.</p>
  </hgroup>
</section>
`;

define("section-hobby", { styles, template });
