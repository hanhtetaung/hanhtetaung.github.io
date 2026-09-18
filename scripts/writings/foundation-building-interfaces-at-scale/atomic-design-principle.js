import { define } from "../../../lib/define.js";
import { asset } from "../../../lib/asset.js";

import "../../components/app-image.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const template = /* html */ `
  <section >

    <h2>Atomic Design Principle</h2>

    <p>
      Follow Atomic Design principles to create scalable, reusable, and
      maintainable interface building blocks.
    </p>

    <app-image
      variant="full"
      src=${asset("./assets/images/foundation-building-software/atomic-design.avif")}
      alt="Atomic design overview"
      width="1398"
      height="1236"
    ></app-image>

    <ul>
      <li>
        <article>
          <h3>Page</h3>
          <p>
            A complete interface that is composed of multiple organisms. Let’s break down the Strava Activities interface into organisms → molecules → atoms → subatomic particles. For example, the Strava Activities page contains four organisms.
          </p>
          <app-image
            variant="full"
            src=${asset("./assets/images/foundation-building-software/page.avif")}
            alt="Page overview"
            width="1398"
            height="1236"
          ></app-image>
        </article>
      </li>

      <li>
        <article>
          <h3>Organism</h3>
          <p>
            A distinct section of an interface composed of molecules, atoms, subatomic particles, or even other organisms. The following diagram shows an organism made up of three molecules, one atom, and one other organism.
          </p>
          <app-image
            variant="full"
            src=${asset("./assets/images/foundation-building-software/organisms.avif")}
            alt="Organism overview"
            width="1398"
            height="1236"
          ></app-image>
        </article>
      </li>

      <li>
        <article>
          <h3>Molecule</h3>
          <p>
            A simple interface element composed of atoms or subatomic particles as well as other molecules. The example below shows how six atoms combine to form a molecule.
          </p>
          <app-image
            variant="full"
            src=${asset("./assets/images/foundation-building-software/molecule.avif")}
            alt="Molecule overview"
            width="1398"
            height="1236"
          ></app-image>
        </article>
      </li>

      <li>
        <article>
          <h3>Atom</h3>
          <p>
            A foundational building block of an interface composed of subatomic particles. The illustration below shows an atom composed of three subatomic particles.
          </p>
          <app-image
            variant="full"
            src=${asset("./assets/images/foundation-building-software/atom.avif")}
            alt="Atom overview"
            width="1398"
            height="1236"
          ></app-image>
        </article>
      </li>

      <li>
        <article>
          <h3>Subatomic particle</h3>
          <p>Smallest unit of the system, represents a design token.</p>
          <app-image
            variant="full"
            src=${asset("./assets/images/foundation-building-software/subatomic-particles.avif")}
            alt="Subatomic particles overview"
            width="1398"
            height="1236"
          ></app-image>
        </article>
      </li>
    </ul>
  </section>
`;

define("section-atomic-design-principle", { styles, template });
