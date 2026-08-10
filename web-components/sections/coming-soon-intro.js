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

  p {
    margin: 0;
  }

  @media (max-width: ${PHONE}) {
          app-image {
            display: none;
          }
        }
`;

const template = /* html */ `
  <section>
      <div>
        <hgroup>
          <p class="body">Coming Soon</p>
          <h1>Name</h1>
        </hgroup>

        <app-icon
          variant="large"
          src="/assets/icons/cuckoo-cock.svg"
          alt="Coming Soon"
        ></app-icon>
      </div>

      <app-image variant="large" src="/assets/images/coming-soon.jpg" alt="Coming Soon"></app-image>
  </section>
`;

define("section-coming-soon-intro", { styles, template });
