import { define } from "../../define";

import "../../components/app-link";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h1 {
    margin: 0;
    font-size: var(--size-title);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-block: 1.5rem;
  }

  ul {
    margin: 0;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const template = /* html */ `
  <section>
    <h1>Foundation for Building Interfaces at Scale</h1>

    <p>
      Build systems, not interfaces. A design system is the single source of
      truth for consistent, scalable interfaces.
    </p>

    <p><b>On this page</b></p>

    <ul>
      <li>
        <app-link href="#atomic-design-principle" variant="underline">
          Atomic design principle
        </app-link>
      </li>
      <li>
        <app-link href="#design-token-architecture" variant="underline">
          Design token architecture
        </app-link>
      </li>
    </ul>
  </section>
`;

define("section-foundation-building-interfaces-at-scale-intro", {
  styles,
  template,
});
