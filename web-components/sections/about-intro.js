import { define } from "../define.js";
import "../components/app-image.js";
import { TABLET } from "../breakpoints.js";

const styles = /*css*/ `
  :host {
    display: block;
    margin-top: 10rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
     display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${TABLET}) {
      display: block; 
        text-align: center;
    }
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-family: var(--font-heading);
  }

  div {
    display: flex;
    align-items: center;
    gap: 3rem;

     @media (max-width: ${TABLET}) {
      display: block; 
    }
  }

  img {
    height: 10rem;
  }
`;

const template = /* html */ `
  <section>
      <h1>About</h1>
      <div>
        <img src="./assets/images/about-profile.avif"
          alt="profile">

        <article>
          <p>
            I'm Han Htet Aung. I see it, capture it, sketch it and bring it to the web.
          </p>

          <p>I see patterns in chaos.</p>
        </article>
      </div>
  </section>
`;

define("section-about-intro", { styles, template });
