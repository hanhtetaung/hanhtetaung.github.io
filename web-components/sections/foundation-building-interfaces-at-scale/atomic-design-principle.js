import { define } from "../../define";

import "../../components/section-title";
import "../../components/app-image";
import "../../components/app-article-paragraph";

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
`;

const template = /* html */ `
  <section id="atomic-design-principle">
    <section-title variant="text" props='{"name": "Atomic Design Principle"}'></section-title>

    <p>
      Follow Atomic Design principles to create scalable, reusable, and
      maintainable interface building blocks.
    </p>

    <app-image
      variant="full"
      src="/assets/images/foundation-building-software/atomic-design.avif"
      alt="Atomic design overview"
      width="1398"
      height="1236"
    ></app-image>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "Page" }'>
          <p>
            A complete interface that is composed of multiple organisms. Let’s break down the Strava Activities interface into organisms → molecules → atoms → subatomic particles. For example, the Strava Activities page contains four organisms.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/page.avif"
            alt="Page overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Organism" }'>
          <p>
            A distinct section of an interface composed of molecules, atoms, subatomic particles, or even other organisms. The following diagram shows an organism made up of three molecules, one atom, and one other organism.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/organisms.avif"
            alt="Organism overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Molecule" }'>
          <p>
            A simple interface element composed of atoms or subatomic particles as well as other molecules. The example below shows how six atoms combine to form a molecule.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/molecule.avif"
            alt="Molecule overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Atom" }'>
          <p>
            A foundational building block of an interface composed of subatomic particles. The illustration below shows an atom composed of three subatomic particles.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/atom.avif"
            alt="Atom overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Subatomic particle" }'>
          <p>Smallest unit of the system, represents a design token.</p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/subatomic-particles.avif"
            alt="Subatomic particles overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;

define("section-atomic-design-principle", { styles, template });
