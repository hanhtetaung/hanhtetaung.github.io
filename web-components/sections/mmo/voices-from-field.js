import { define } from "../../define";
import "../../components/section-title";

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
    gap: 0.5rem;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
`;

const template = /* html */ `
  <section>

  <section-title
        variant="text"
        props='{"name": "Voices from the field"}'
      ></section-title>

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
