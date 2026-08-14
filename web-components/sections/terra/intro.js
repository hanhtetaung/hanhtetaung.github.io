import { define } from "../../define";

import "../../components/app-image";
import "../../components/app-link";
import { PHONE } from "../../breakpoints";

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

    @media (max-width: ${PHONE}) {
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
      variant="large"
      src="/assets/images/case-study/terra/thumbnail.avif"
      alt="Final Product Screenshot"
      width="1692"
      height="886"
    ></app-image>

    <article>
      <span>Case Study</span>
      <h1>Terra</h1>

      <p>
        A tool to visualize the connections between everyday goods and
        their fundamental sources based on my knowledge.
      </p>

      <span>Scope:</span>
      <p>Idea → Product</p>

      <app-link
        variant="secondary"
        href="/terra"
        target="_blank"
        >View Live Website</app-link>
    </article>
  </section>
`;

define("section-terra-intro", { styles, template });
