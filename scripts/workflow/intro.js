import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
    margin-top: 10rem;
    margin-bottom: 15rem;


    @media (min-width: ${DESKTOP}) {
      margin-top: 10rem;
      margin-bottom: 25rem;
    }
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  hgroup {
    margin-bottom: 5rem;
    text-align: start;
  }

  ul {
    padding: 0;
    margin: 0;
    padding-left: 2rem;
  }

  ul li {
    @media (min-width: ${DESKTOP}) {
      margin-bottom: 0.7rem;
    }
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    margin-bottom: 2rem;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    max-width: 70rem;
  }

  article {
    margin-bottom: 5rem;
  }

  div {
    @media (min-width: ${DESKTOP}) {
      display: flex;
      gap: 20rem;
    }
  }

  span {
    display: inline-block;
    border: 1px solid var(--color-primary);
    border-radius: 0.2rem;
    background: var(--color-primary);
    color: var(--color-bg-primary);
    margin-top: 0.8rem;
    padding-block: 0.2rem;
    padding-inline: 0.5rem;

     @media (min-width: ${TABLET}) {
       padding-block: 0.5rem;
       padding-inline: 1rem;
    }
  }
`;

const template = /* html */ `

<section>
  <hgroup>
     <h1>Workflow</h1>
  </hgroup>

  <div>
      <article>
        <h2>Process</h2>
        <p>Brainstorm · Design · illustrate · Develop · Deploy · <span>Review</span> · Deliver</p>
      </article>
      
      <article>
          <h2>Tools</h2>
          <ul>
            <li>Design: Figma</li>
            <li>illustrate: Procreate</li>
            <li>Develop: Plain HTML, CSS, JavaScript</li>
          </ul>
      </article>
  </div>
</section>

`;

define("section-workflow-intro", { styles, template });
