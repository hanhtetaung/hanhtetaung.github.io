import "../../components/app-image.js";
import { DESKTOP, TABLET } from "../../breakpoints.js";
import { define } from "../../../lib/define.js";
import { asset } from "../../../lib/asset.js";

const styles = /* css */ `
  :host {
    display: block;
    padding-block: 10rem;
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


    span {
      font-size: var(--size-small);
      text-transform: uppercase;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-bold);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

  hgroup {
    margin-bottom: 3rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: disc;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  ol {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;


    @media (min-width: ${DESKTOP}) {
      flex-direction: row;
      justify-content: space-between;
    }
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
      <hgroup>
        <p><span>Case Study</span></p> 
        <h1>MMO</h1>
        <p>
          An internal portal that uses to run daily operations in
          hospital.
        </p>
      </hgroup>

      
      <ol>
        <li>
          <span>Role:</span>
          <p>UX Designer</p>
        </li>

        <li>
          <span>Scope:</span>
          <ul>
            <li>Gather requirements</li>
            <li>Build Prototype</li>
            <li>Simplify complex workflows</li>
            <li>Design System</li>
            <li>Developer Handoff</li>
          </ul>
        </li>
      </ol>
      </article>
  </section>
`;

define("section-mmo-intro", { styles, template });
