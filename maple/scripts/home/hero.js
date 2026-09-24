import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 15rem;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    
    @media (min-width: ${DESKTOP}) {
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 60% 40% 30% 70% / 10% 30% 70% 40%;

     @media (min-width: ${TABLET}) {
      height: 40rem;
      width: auto;
      display: flex;
      justify-content: space-between;
    }
  }

  hgroup {
    max-width: 50rem;
    margin-bottom: 10rem;
  }


  h1 {
    margin: 0;
    font-size: var(--font-display);
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  p {
    margin: 0;
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
        <p>Welcome!</p>
        <h1>Maple Montessori Preschool</h1>
        <p>Play, learn, and grow together</p>
    </hgroup>


    <img src=${asset("./assets/hero.jpg")} alt="Classroom">

  </section>
`;

define("section-hero", { styles, template });
