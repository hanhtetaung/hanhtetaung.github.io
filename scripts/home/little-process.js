import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
    margin-block: 15rem;

    @media (min-width: ${DESKTOP}) {
      margin-top: 20rem;
      margin-bottom: 25rem;
    }
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    text-align: center;
  }

  hgroup {
    margin-bottom: 5rem;
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: flex-start;
    grid-column: span 3;
  }

  li {
    padding-bottom: 3rem;
    padding-top: 2rem;
    border-bottom: 1px solid var(--color-text);
    text-align: start;
    /* min-width: 60rem;     */
  }

  h3 {
    margin: 0;
    font-size: var(--size-body);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

  img {
    width: 100%;
    max-width: 30rem;
    height: auto;
    margin-left: auto;

    @media (min-width: ${TABLET}) {
      max-height: 40rem;
      grid-column: span 2; 
    }

  }

  a {
    color: var(--color-primary);
  }

  ol {
    list-style-type: disc;
    padding: 0;
    padding-left: 1.5rem;
  }

  ol li {
    border: none;
    padding: 0;
    padding-bottom: 0.5rem;
  }

  article {
    @media (min-width: ${TABLET}) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      gap: 12rem;
    }
  }
`;

const template = /* html */ `

<section>
  <hgroup>
    <p>[ Process ]</p>
     <h2>All in One Person</h2>
  </hgroup>

  <article>
    <img src=${asset("./assets/images/home/process.avif")} alt="Little Process">
  
    <ul>
      <li>
        <h3>Step 1</h3>
        <p>Ask a little question</p>
      </li>
  
      <li>
        <h3>Step 2</h3>
        <ol>
          <li>Design</li>
          <li>illustrate</li>
          <li>Develop</li>
          <li>Deliver</li>
        </ol>
      </li>
  
      <li>
        <h3>Step 3</h3>
        <p>Your Brand New Website</p>
      </li>
    </ul>

  </article>
  
</section>

`;

define("section-little-process", { styles, template });
