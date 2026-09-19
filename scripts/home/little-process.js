import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
    margin-top: 15rem;
    margin-bottom: 10rem;

    @media (min-width: ${DESKTOP}) {
      margin-top: 20rem;
      margin-bottom: 25rem;
    }
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    
  }

  hgroup {
    margin-bottom: 2rem;
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

    @media (min-width: ${TABLET}) {
      display: flex;
      justify-content: space-between;
    }
  }

  li {
    padding-bottom: 3rem;
    padding-top: 2rem;
    border-bottom: 1px solid var(--color-text);

     @media (min-width: ${TABLET}) {
      border: none;
    }
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
  

    @media (min-width: ${TABLET}) {
      max-height: 40rem;
      width: auto;
    }

  }
  span {
    font-size: var(--size-body);
  }
`;

const template = /* html */ `

<section>
  <hgroup>
    <p>[ Process ]</p>
    <h2><span>By</span> One Person</h2>
  </hgroup>

  <ul>
    <li>
      <h3>Step 1</h3>
      <p>Ask a little question</p>
    </li>

    <li>
      <h3>Step 2</h3>
      <p>....</p>
      <img src=${asset("./assets/images/home/process.avif")} alt="Little Process">
    </li>

    <li>
      <h3>Step 3</h3>
      <p>Your Web Presence</p>
    </li>
  </ul>
</section>

`;

define("section-little-process", { styles, template });
