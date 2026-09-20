import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";

import { TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    margin-top: 5rem;
  }

  p {
    margin: 0;
  }

  div {
    overflow: scroll;
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
      width: 100%;
      height: auto;
    }
  }
`;

const template = /* html */ `
  <div>
    <img src=${asset("./assets/images/home/sketching.avif")} alt="Sketching SEA">
  </div>

  <section>
    <p>[ Hobby ]</p>
    <h2>Self-taught in illustration</h2>
    <p>All hand-drawn. Bring the same approach to make each website feel memorable.</p>
  </section>
`;

define("section-hobby", { styles, template });
