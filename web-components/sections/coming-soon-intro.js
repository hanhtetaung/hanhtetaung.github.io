import { define } from "../define";

import "../components/app-image";
import "../components/app-icon";
import { PHONE } from "../breakpoints";

const styles = /*css*/ `
   section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
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

  @media (max-width: ${PHONE}) {
          app-image {
            display: none;
          }
        }
`;

const props = { name: String, img: String, alt: String };

const template = ({
  name = "Name",
  img = "/assets/images/coming-soon.jpg",
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
          src="/assets/icons/cuckoo-cock.svg"
          alt="Cuckoo Cock Logo"
        ></app-icon>
      </div>

      <app-image variant="large" src=${img} alt=${alt}></app-image>
  </section>
`;

define("section-coming-soon-intro", { props, styles, template });
