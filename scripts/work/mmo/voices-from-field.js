import { define } from "../../../lib/define.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 10rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 1rem;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  h2 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: var(--size-title);
  }

  p {
    margin: 0;
  }

  span {
    font-size: var(--size-small);
    text-transform: uppercase;
  }
`;

const template = /* html */ `
  <section>
      <h2>Voices from the Field</h2>

        <ul>
          <li>
            “It takes days to prepare monthly sales and inventory
            reports.” -
            <span> Business owner </span>
          </li>
          <li>
            “Patient registration takes too many steps.” -
            <span> Front desk staff </span>
          </li>
          <li>
            "I need an activity history for every transaction." -
            <span> Business owner </span>
          </li>
          <li>
            “I hate searching for medicines every time.” -
            <span> Pharmacist </span>
          </li>
          <li>
            “It's difficult to trace who adjusted stock.” -
            <span> Warehouse staff </span>
          </li>
          <li>
            “I want different permissions for different roles.” -
            <span> Business owner </span>
          </li>
        </ul>
  </section>
`;

define("section-mmo-voices-from-field", { styles, template });
