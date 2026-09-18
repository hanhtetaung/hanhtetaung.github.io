import { define } from "../../../lib/define.js";

import "../../components/app-link.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 10rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h1 {
    margin: 0;
    font-size: var(--size-title);
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

  span {
    display: inline-block;
    margin-bottom: 1rem;
    margin-top: 2rem;
    font-weight: var(--font-bold);
  }

  hgroup span {
    font-weight: var(--font-regular);
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
      <span>[ Writing ]</span>
      <h1>Foundation for Building Interfaces at Scale</h1>
    </hgroup>

    <p>
      Build systems, not interfaces. A design system is the single source of
      truth for consistent, scalable interfaces.
    </p>

    <span>On this page</span>

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
