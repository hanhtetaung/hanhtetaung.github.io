import { define } from "../define.js";

import "../components/app-icon.js";
import { TABLET } from "../breakpoints.js";

const styles = /*css*/ `
  :host {
    display: block;
    margin-block: 10rem;
  }

    section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        gap: 3rem;

        @media (max-width: ${TABLET}) {
          display: block;
        }
    }

     h1 {
    margin: 0;
    font-size: var(--size-display);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const template = /* html */ `
  <section>
      <hgroup>
        <h1>404</h1>
        <p>Sorry. Page not found.</p>
      </hgroup>

      <app-icon
        variant="large"
        src="./assets/icons/bird-with-flower.svg"
        alt="Coming Soon"
      ></app-icon>
  </section>
`;

define("section-404-intro", { styles, template });
