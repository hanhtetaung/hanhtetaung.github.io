import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 10rem;
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
    padding: 0;
    overflow: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    max-width: 80%;
    margin-inline: auto;
  }

  ul li {
    min-width: 12ch;
  }

  p {
    margin: 0;
    font-size: var(--font-body);
    font-weight: var(--font-bold);
    margin-bottom: 0.5rem;
  }

  img {
    height: 15rem;
    width: auto;

    @media (min-width: ${TABLET}) {
      height: 20rem;
    }
  }

  figcaption {
    margin-top: 1rem;
    font-size: var(--font-small);
  }

  figure {
    margin: 0;
    text-align: center;
  }
`;

const template = /* html */ `
  <section>
    <h2>Meet Our Team</h2>

    <ul>
        <li>
          <figure>
            <img src=${asset("./assets/chan-hein.png")} alt="Chan Hein">
            <figcaption>
              <p>
                Chan Hein
              </p>
              Manager
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/nay-thurein.png")} alt="Nay Thurein">
            <figcaption>
              <p>
                Nay Thurein
              </p>
              Photographer
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/aung-thura.png")} alt="Aung Thura">
            <figcaption>
              <p>
                 Aung Thura
                </p>
                Videographer
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/tin-nyo.png")} alt="Tin Nyo">
            <figcaption>
              <p>
                 Tin Nyo
                 </p>
                 Assistant Videographer
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/thein-min-htike.png")} alt="Thein Min Htike">
            <figcaption>
              <p>
                 Thein Min Htike
                </p>
                Photographer/Videographer
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/than-sein.png")} alt="Than Sein">
            <figcaption>
              <p>
                 Than Sein
                </p>
                Planner
            </figcaption>
          </figure>
        </li>
    </ul>

  </section>
`;

define("section-team", { styles, template });
