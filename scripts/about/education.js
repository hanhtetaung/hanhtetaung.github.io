import { define } from "../../lib/define.js";
import { DESKTOP, LARGE, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
  }
  
  section {
    width: min(80%, 144rem);
    margin-block: 20rem;
    margin-inline: auto;

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
    height: 10rem;
  }
`;

const template = /* html */ `
  <section>
    <img src="./assets/images/home/graduation-cap.png" alt="Assumption University">
    <hgroup>
      <h2>Education</h2>
      <p>Bachelor's Degree in Computer Science, Assumption University, Thailand — 2025</p>
    </hgroup>
    
    <!-- <img src="./assets/images/home/assumption-university.avif" alt="Assumption University"> -->
  </section>

`;

define("section-education", { styles, template });
