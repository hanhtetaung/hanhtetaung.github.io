import { DESKTOP, LARGE, TABLET } from "../../breakpoints.js";
import { define } from "../../define.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    height: 70rem;
    margin-bottom: 10rem;
    overflow-x: hidden;
    overflow-y: visible;

    @media (min-width: ${LARGE}) {
      height: auto;
    }
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    margin-top: 5rem;

    @media (min-width: ${LARGE}) {
      position: relative;
      overflow: hidden;
      height: 70rem;
    }
  }

   h2 {
     margin: 0;
     margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    max-width: 50ch;
  }


  img {
    width: auto;
    height: 65rem;
    bottom: 5px;
    opacity: 0.1;
    
    position: absolute;
    left: 0;
    bottom: 5rem;
    z-index: -1;
    
    @media (min-width: ${TABLET}) {
      left: 40%;
    }

    @media (min-width: ${DESKTOP}) {
      opacity: 1;
      right: 10%;
      left: auto;
    }
    
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
      <p>[ Education ]</p>
      <h2>Computer Science Graduate</h2>
    </hgroup>
    <!-- <p>Completed a bachelor's degree in Computer Science from Assumption University, Thailand, in 2025</p> -->
    <p>Bachelor's Degree in Computer Science, Assumption University, Thailand — 2025</p>
    <img src="./assets/images/home/assumption-university.avif" alt="Assumption University">
  </section>

`;

define("section-education", { styles, template });
