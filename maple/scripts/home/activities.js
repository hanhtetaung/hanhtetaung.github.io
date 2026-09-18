import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;

    @media (min-width: ${DESKTOP}) {
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 4rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 10rem;
    overflow: scroll;

     @media (min-width: ${TABLET}) {
      flex-direction: row;
      gap: 20rem;
    }
  }

  p {
    margin: 0;
  }

  img {
    height: 20rem;
    width: auto;
  }

  figcaption {
    margin-top: 1rem;
  }

  figure {
    margin: 0;
    text-align: center;

  }
`;

const template = /* html */ `
  <section>
    <h2>Our Activities</h2>

    <ul>
        <li>
          <figure>
            <img src=${asset("./assets/teamwork.png")} alt="Teamwork">
            <figcaption>
              Team Work
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/drawing.png")} alt="Drawing">
            <figcaption>
              Art
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/literacy.png")} alt="Literacy">
            <figcaption>
              Literacy
            </figcaption>

          </figure>
        </li>
    </ul>

  </section>
`;

define("section-activities", { styles, template });
