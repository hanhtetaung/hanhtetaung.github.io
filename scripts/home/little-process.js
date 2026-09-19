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
    margin-bottom: 2rem;
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

    @media (min-width: ${TABLET}) {
      display: flex;
      gap: 5rem;
      align-items: normal;
    }
  }

  li {
    padding-bottom: 3rem;
    padding-top: 2rem;
    border-bottom: 1px solid var(--color-text);
    min-width: 20ch;
    width: fit-content;
    text-align: start;

     @media (min-width: ${TABLET}) {
      min-width: auto;
      /* border-right: 1px solid var(--color-text); */
      width: 100%;
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
    position: absolute;
    right: 1rem;
    top: 1rem;
    opacity: 0.1;
    z-index: -2;
  

    @media (min-width: ${TABLET}) {
      margin-bottom: 3rem;
      margin-top: 2rem;

      opacity: 1;
      position: static;
      max-height: 40rem;
      width: auto;
    }

  }
  span {
    font-size: var(--size-body);
  }

  a {
    /* text-decoration: none; */
    color: var(--color-primary);
  }
`;

const template = /* html */ `

<section>
  <hgroup>
    <p>[ Process ]</p>
    <h2><span>By</span> One Person</h2>
  </hgroup>

  <img src=${asset("./assets/images/home/process.avif")} alt="Little Process">

  <ul>
    <li>
      <h3>Step 1</h3>
      <p>Ask a little question</p>
    </li>

    <li>
      <h3>Step 2</h3>
      <p>Crafting ...</p>
    </li>

    <li>
      <h3>Step 3</h3>
      <p>Your Web Presence</p>
    </li>
  </ul>
</section>

`;

define("section-little-process", { styles, template });
