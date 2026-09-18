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

  h2 {
    margin: 0;
    margin-bottom: 1.5rem;
    font-size: var(--size-title);
  }

  p {
    margin: 0;
  }
`;

const template = /* html */ `
  <section>
      <h2>About the Business</h2>

      <article>
          <p>
            MMO hospital is a private hospital. With over 50 staff including
            doctors, nurse, pharmacist, it provides outpatient and inpatient
            care, emergency services, pharmacy services, and medicine
            inventory management.
          </p>
      </article>
  </section>
`;

define("section-mmo-about", { styles, template });
