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

    height: 15rem;
    width: auto;

    @media (min-width: ${TABLET}) {
      height: 20rem;
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
    <h2>Meet Our Team</h2>

    <ul>
        <li>
          <figure>
            <img src=${asset("./assets/chan-hein.png")} alt="Chan Hein">
            <figcaption>
              Chan Hein
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/nay-thurein.png")} alt="Nay Thurein">
            <figcaption>
              Nay Thurein
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/aung-thura.png")} alt="Aung Thura">
            <figcaption>
              Aung Thura
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/tin-nyo.png")} alt="Tin Nyo">
            <figcaption>
              Tin Nyo
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/thein-min-htike.png")} alt="Thein Min Htike">
            <figcaption>
              Thein Min Htike
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src=${asset("./assets/than-sein.png")} alt="Than Sein">
            <figcaption>
              Than Sein
            </figcaption>
          </figure>
        </li>
    </ul>

  </section>
`;

define("section-team", { styles, template });
