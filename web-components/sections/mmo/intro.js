import { define } from "../../define.js";
import "../../components/app-image.js";
import { PHONE } from "../../breakpoints.js";
import { asset } from "../../asset.js";

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


    span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
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

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
  }
`;

const template = /* html */ `
  <section>
    <app-image
    variant="large"
    src=${asset("./assets/images/case-study/mmo/thumbnail.avif")}
    alt="MMO thumbnail"
    width="1692"
    height="886"
    ></app-image>
    
    <article>
      <span>Case Study</span>
      <h1>MMO</h1>

      <p>
        An internal portal that uses to run daily operations in
        hospital.
      </p>

        <span>Role:</span>
        <p>UX Designer</p>

        <span>Scope: </span>
        <ul>
          <li>Gather requirements</li>
          <li>Simplify complex workflows</li>
          <li>Build Prototype</li>
          <li>Design System</li>
          <li>Developer Handoff</li>
        </ul>
      </article>
  </section>
`;

define("section-mmo-intro", { styles, template });
