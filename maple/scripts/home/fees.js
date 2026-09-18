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

  hgroup {
    max-width: 50rem;
  }


  h1 {
    margin: 0;
    font-size: var(--font-display);
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
        <h2>Registration & Fees</h2>
    </hgroup>

    <ul>
        <li><img src="" alt="">Team Work</li>
        <li><img src="" alt="">Communication</li>
        <li><img src="" alt="">Art</li>
        <li><img src="" alt="">Science</li>
        <li><img src="" alt="">Literacy</li>
    </ul>

  </section>
`;

define("section-activities", { styles, template });
