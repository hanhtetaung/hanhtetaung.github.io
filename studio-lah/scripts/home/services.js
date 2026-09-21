import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    padding-block: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    /* text-align: center; */

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
      display: grid;
          grid-template-columns: 1fr 1fr 1fr;

      gap: 20rem;
    }
  }

  p {
    margin: 0;
  }

  img {
    max-height: 8rem;
    width: auto;

    @media (min-width: ${TABLET}) {
      max-height: 12rem;
    }
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
    <h2>Our Services</h2>

    <ul>
        <li>
          <figure>
            <img src=${asset("./assets/live-streaming.png")} alt="Teamwork">
            <figcaption>
              Live Streaming
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/photography.png")} alt="Drawing">
            <figcaption>
              Photography
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/videography.png")} alt="Literacy">
            <figcaption>
              Videography
            </figcaption>

          </figure>
        </li>
    </ul>

  </section>
`;

define("section-services", { styles, template });
