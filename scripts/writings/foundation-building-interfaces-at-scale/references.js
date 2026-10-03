import { define } from "../../../lib/define.js";

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

  a {
    color: var(--color-text);
  }
`;

const template = /* html */ `
  <section>

    <h2>Reference</h2>

    <ul>
      <li>
        <a href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank">
          Atomic Design Principle
        </a>
      </li>
      <li>
        <a href="https://playbook.ebay.com/foundations" target="_blank">
          ebay Playbook
        </a>
      </li>
      <li>
        <a href="https://www.designsystem.tech.gov.sg/foundations/" target="_blank">
          SGDS Design
        </a>
      </li>
      <li>
        <a href="https://www.strava.com/" target="_blank">
          Strava
        </a>
      </li>
    </ul>
  </section>
`;

define("section-foundation-building-interfaces-at-scale-references", {
  styles,
  template,
});
