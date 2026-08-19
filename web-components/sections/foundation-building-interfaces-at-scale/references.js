import { define } from "../../define.js";

import "../../components/app-link.js";
import "../../components/section-title.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const template = /* html */ `
  <section>
    <section-title variant="text" props='{"name": "References"}'></section-title>

    <ul>
      <li>
        <app-link href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank" variant="underline">
          Atomic Design Principle
        </app-link>
      </li>
      <li>
        <app-link href="https://playbook.ebay.com/foundations" target="_blank" variant="underline">
          ebay Playbook
        </app-link>
      </li>
      <li>
        <app-link href="https://www.designsystem.tech.gov.sg/foundations/" target="_blank" variant="underline">
          SGDS Design
        </app-link>
      </li>
      <li>
        <app-link href="https://www.strava.com/" target="_blank" variant="underline">
          Strava
        </app-link>
      </li>
    </ul>
  </section>
`;

define("section-foundation-building-interfaces-at-scale-references", {
  styles,
  template,
});
