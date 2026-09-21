import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 15rem;
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
  }

  hgroup {
    width: 100%;
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
        <h1>Studio LAH</h1>
        <p>First Live Streaming Team in Town</p>
    </hgroup>
</section>
<img id="visible-img" src=${asset("./assets/hero.png")} alt="Dawei">
`;

define("section-hero", { styles, template });
