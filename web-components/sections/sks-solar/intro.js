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
      variant="full"
      src="/assets/images/case-study/skssolar/mockup.avif"
      alt="Final Product Screenshot"
      width="1692"
      height="886"
    ></app-image>

    <article>
      <span>Case Study</span>
      <h1>SKS Solar</h1>

      <p>
        SKS Solar is a solar energy company providing solar products,
        services, and solutions for homes and businesses across Myanmar.
      </p>

      <span>Role: </span>
      <p>Web Designer & Developer</p>

      <span>Scope:</span>
      <p>Revamp Website</p>

      <app-link variant="secondary" href="https://skssolarmymyanmar.com/" target="_blank">
        View Live Website
      </app-link>
    </article>
  </section>
`;

define("section-sks-solar-intro", { styles, template });
