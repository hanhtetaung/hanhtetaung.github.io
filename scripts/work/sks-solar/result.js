import { define } from "../../../lib/define.js";
import { asset } from "../../../lib/asset.js";

import "../../components/app-image.js";
import "../../components/app-link.js";
import { TABLET } from "../../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
        margin-bottom: 10rem;

  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 3rem;

    @media (max-width: ${TABLET}) {
      flex-direction: column;
    }
  }
`;

const template = /* html */ `
  <section>

    <h2>Result</h2>

    <p>
      The project resulted in a modern, responsive, and professional SKS
      Solar website with a stronger visual identity and improved user
      experience. The final website also achieved outstanding Google
      Lighthouse performance with optimized accessibility, responsiveness,
      and loading performance.
    </p>

    <app-link variant="secondary" href="https://skssolarmymyanmar.com/" target="_blank">
      Visit ➶
    </app-link>

    <ul>
      <li>
        <app-image
          variant="medium"
          src=${asset("./assets/images/case-study/skssolar/lighthouse.avif")}
          alt="Lighthouse Photo"
          width="960"
          height="1028"
        ></app-image>
      </li>

       <li>
        <app-image
          variant="medium"
          src=${asset("./assets/images/case-study/skssolar/mockup.avif")}
          alt="Mockup Photo"
          width="1692"
          height="886"
        ></app-image>
      </li>
    </ul>
  </section>
`;

define("section-sks-solar-result", { styles, template });
