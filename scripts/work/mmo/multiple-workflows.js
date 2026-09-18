import { define } from "../../define.js";

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
`;

const template = /* html */ `
  <section>

  <section-title
        variant="text"
        props='{"name": "100+ workflows in the system"}'
      ></section-title>

        <ul>
          <li>Register new employee</li>
          <li>Generate Inventory Report</li>
          <li>Request items from warehouse</li>
        </ul>
  </section>
`;

define("section-mmo-multiple-workflows", { styles, template });
