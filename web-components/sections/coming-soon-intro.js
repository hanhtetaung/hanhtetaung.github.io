import { define } from "../define.js";
import { asset } from "../asset.js";

import "../components/app-image.js";
import "../components/app-icon.js";
import { PHONE } from "../breakpoints.js";

const styles = /*css*/ `
   section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        justify-content: space-between;

        @media (max-width: ${PHONE}) {
          flex-direction: column;
          gap: 3rem;
        }
    }

      h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  hgroup {
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }
`;

const props = { name: String, img: String, alt: String };

const template = ({
  name = "Name",
  img = "./assets/images/coming-soon.jpg",
  alt = "Coming Soon",
}) => /* html */ `
  <section>
      <div>
        <hgroup>
          <p>Coming Soon</p>
          <h1>${name}</h1>
        </hgroup>

        <app-icon
          variant="large"
          src=${asset("./assets/icons/cuckoo-clock.svg")}
          alt="Cuckoo Cock Logo"
        ></app-icon>
      </div>

      <app-image variant="large" src=${asset(img)} alt=${alt}></app-image>
  </section>
`;

define("section-coming-soon-intro", { props, styles, template });
