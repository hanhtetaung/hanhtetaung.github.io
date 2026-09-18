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
    padding: 0;
    padding-inline: 2rem;

    display: flex;
    flex-direction: column;
  }

   h2 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: var(--size-title);
  }
`;

const template = /* html */ `
  <section>
      <h2>100+ workflows in the system</h2>

        <ul>
          <li>Register new employee</li>
          <li>Generate Inventory Report</li>
          <li>Request items from warehouse</li>
        </ul>
  </section>
`;

define("section-mmo-multiple-workflows", { styles, template });
