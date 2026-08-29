import { define } from "../../define.js";
import { asset } from "../../asset.js";
import { DESKTOP, LARGE, TABLET } from "../../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    height: 60rem;
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
    

    @media (min-width: ${TABLET}) {
      display: flex;
      gap: 3rem;
      justify-content: space-between;
    }

    @media (min-width: ${LARGE}) {
      position: relative;
    }
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
  }

  li {
    border-bottom: 1px solid var(--color-text);
    padding-bottom: 5rem;
    padding-top: 2rem;
    min-width: 30ch;
  }

  h3 {
    margin: 0;
    font-size: var(--size-header);
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

  img {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    width: auto;
    height: 40rem;
    z-index: -1;
    opacity: 0.1;

    @media (min-width: ${DESKTOP}) {
      opacity: 1;
    }

  }
  span {
    font-size: var(--size-body);
  }
`;

const template = /* html */ `

<section>
  <hgroup>
    <p>[ Little Process ]</p>
    <h2>Every Step By Hand</h2>
  </hgroup>

  <ul>
    <li>
      <h3>Step 1</h3>
      <p>Design block by block</p>
    </li>
    <li>
      <h3>Step 2</h3>
      <p>Sketch illustration by hand</p>
    </li>
    <li>
      <h3>Step 3</h3>
      <p>Develop HTML, CSS, JS</p>
    </li>
    <li>
      <h3>Step 4</h3>
      <p>Deliver Standalone HTML</p>
    </li>
  </ul>

  <img src=${asset("./assets/images/home/craftsmanship.avif")} alt="Craftsmanship Illustration">
</section>

`;

define("section-little-process", { styles, template });
