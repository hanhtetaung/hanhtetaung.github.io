import { define } from "../../define.js";

import "../../components/section-title.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h3, p {
    margin: 0;
  }

  h3 {
    margin-bottom: 1rem;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

   ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
     display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article {
    margin-bottom: 5rem;
  }
`;

const template = /* html */ `
  <section>
    <section-title
        variant="text"
        props='{"name": "Designing Workflow"}'
      ></section-title>



      <article>
          <h3>Select similar key insights</h3>
          <ul>
            <li>
              “We sell medicines and medical supplies to patients every
              day.” -
              <span> Business owner </span>
            </li>
            <li>
              "Staff need to check stock before completing a sale." -
              <span> Pharmacist </span>
            </li>
            <li>
              "Patients expect a fast checkout with minimal waiting." -
              <span> Front desk Staff </span>
            </li>
            <li>
              "Every transaction must be recorded for billing and
              auditing." -
              <span> Finance manager </span>
            </li>
            <li>
              "We need to track who sold each item and when." -
              <span> Business owner </span>
            </li>
          </ul>
      </article>

      <article>
          <h3>Sell Medical items</h3>

          <p>
            Start → Scan item barcode → Review total → Receive payment →
            Return Changes → Complete
          </p>
      </article>

      <article>
        <div>
          <h3>Edge case</h3>
        </div>

        <ul>
          <li>What if the cashier doesn’t have inficient cash?</li>
          <li>What if the printer is not working?</li>
          <li>What if the barcode scanner is not working?</li>
        </ul>
      </article>
  </section>
`;

define("section-mmo-designing-workflow", { styles, template });
