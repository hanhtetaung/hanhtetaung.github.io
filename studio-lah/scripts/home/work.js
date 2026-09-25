import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-top: 10rem;
    margin-bottom: 10rem;
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

    @media (min-width: ${TABLET}) {
      font-size: var(--font-display);
    }
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    padding-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    overflow: scroll;

    @media (min-width: ${TABLET}) {
      justify-content: center;
    }
  }

  img {
    width: auto;
    height: 5rem;


    @media (min-width: ${TABLET}) {
      height: 7rem;
    }
  }
`;

const template = /* html */ `
  <section>
    <h2>Our Work</h2>

    <ul>
      <li><img src=${asset("./assets/work-1.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-2.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-3.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-4.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-5.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-6.svg")} alt="Work 1"></li>
      <li><img src=${asset("./assets/work-7.svg")} alt="Work 1"></li>
    </ul>


  </section>
`;

define("section-work", { styles, template });
