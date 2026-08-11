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
`;

const template = /* html */ `
  <section>
    <section-title
        variant="text"
        props='{"name": "About the Business"}'
      ></section-title>

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
