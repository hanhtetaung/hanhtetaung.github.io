import { TABLET } from "../../breakpoints.js";
import { define } from "../../define.js";

const styles = /* css */ `
  :host {
    display: block;
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
    <img src="./assets/images/home/sketching.avif" alt="Sketching SEA">
  </div>

  <section>
    <p>[ Hobby ]</p>
    <h2>Self-taught in illustration</h2>
    <p>All hand-drawn. I bring the same approach to every website I build.</p>
  </section>
`;

define("section-hobby", { styles, template });
