import { asset } from "../../lib/asset.js";
import { define } from "../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /*css*/ `
  :host {
    display: block;
    margin-top: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

   h1 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: var(--size-display);
    font-family: var(--font-heading);

    @media (min-width: ${TABLET}) {
      margin-bottom: 4rem;
    }
  }

  article {
    @media (min-width: ${TABLET}) {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
  }

  img {
    height: 10rem;
    width: auto;
  }

  figure {
    padding: 0;
    margin: 0;
    width: fit-content;
    text-align: center;
    font-size: var(--size-small);
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
    max-width: 40ch;
  }
`;

const template = /* html */ `
  <section>
      <h1>About</h1>
        
        <article>
          <figure>
            <img src=${asset("./assets/images/about/profile.png")}
            alt="profile">
            <figcaption>Han Htet Aung</figcaption>
          </figure>

          <div>
            <p>
              Hello world. You can call me "Han". I grew up in Dawei, a lovely coastal town. 
              
              
              
            </p>
            <p>
              I believe everything is unique in its own way.
            </p>
              <!-- <p>I see patterns in chaos.</p> -->
          </div>
          </article>
  </section>
`;

define("section-about-intro", { styles, template });
