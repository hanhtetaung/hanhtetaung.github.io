import { define } from "../../define.js";

import "../../components/app-image.js";
import "../../components/app-link.js";
import { TABLET } from "../../breakpoints.js";
import { asset, navHref } from "../../asset.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: ${TABLET}) {
      flex-direction: column;
    }
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 2rem;
  }

  article {
    max-width: 40ch;
  }

    span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
`;

const template = /* html */ `
  <section>
      <app-image
        variant="medium"
        src=${asset("./assets/images/case-study/portfolio/mockup.avif")}
        alt="Final Product Screenshot"
        width="1692"
        height="886"
      ></app-image>

      <article>
        <span>Case Study</span>
        <h1>Portfolio</h1>

        <p>
          A personal portfolio website focused on creating a modern,
          responsive, and minimal experience that showcases projects,
          skills, and professional identity with clarity and simplicity.
        </p>

        <span>Role: </span>
        <p>Web Designer & Developer</p>

          <span>Scope:</span>
          <p>Idea → Website</p>

        <app-link variant="secondary" href=${navHref("https://hanhtetaung.dev/")} target="_blank">
          Visit ➶
        </app-link>
      </article>
  </section>
`;

define("section-portfolio-intro", { styles, template });
