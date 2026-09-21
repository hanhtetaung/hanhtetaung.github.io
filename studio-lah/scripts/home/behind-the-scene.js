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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10rem;
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
    <!-- <ul>
        <li>
          <figure>
            <img src=${asset("./assets/live-streaming.png")} alt="Teamwork">
            <figcaption>
              Live Streaming
            </figcaption>
          </figure>
        </li>
        <li>
            <h2>Behind the Scene</h2>
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
        <li>
          <figure>
            <img src=${asset("./assets/videography.png")} alt="Literacy">
            <figcaption>
              Videography
            </figcaption>

          </figure>
        </li>
    </ul> -->

  </section>
`;

define("section-behind-the-scene", { styles, template });
