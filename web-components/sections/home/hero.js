import { DESKTOP, TABLET } from "../../breakpoints.js";
import { define } from "../../define.js";

const styles = /* css */ `
  :host {
    display: block;
    height: min(calc(100vh - 108px - 10rem), 70rem);
    margin-top: 5rem;

    @media (min-width: ${TABLET}) {
      margin-top: 7rem;
    }
  }

  section {
    width: min(80%, 144rem);
    height: min(100%, 60rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: relative;

    @media (min-width: ${DESKTOP}) {
      justify-content: space-between;
    }
  }

  img {
    max-height: 25rem;
    width: auto;
    align-self: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;

    @media (min-width: ${TABLET}) {
      max-height: 35rem;
    }
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }

  hgroup + p {
    max-width: min(25ch, 90%);
  }

  
`;

const template = /* html */ `
  <section>
    <hgroup>
      <p>Han Htet Aung | GMT+7</p>
      <h1>Craft Web Interfaces</h1>
    </hgroup>
    <p>Web Designer & Developer who brings hand-drawn illustrations into every site.</p>
    <img src="./assets/images/home/walking-holding-luggage.avif" alt="Man walking and holding luggage">
  </section>
`;

define("section-hero", { styles, template });
