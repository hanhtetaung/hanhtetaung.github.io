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
`;

const template = /* html */ `
  <section>
    <section-title variant="text" props='{"name": "Background"}'></section-title>

    <p>
      This project was created for SKS Solar to redesign and redevelop the
      company’s outdated website into a more professional and modern
      experience. The goal was to create a clean, responsive, and
      trustworthy presentation that showcases the company’s solar
      products, services, and completed projects with simple navigation,
      clear structure, and minimal visuals.
    </p>
  </section>
`;

define("section-sks-solar-background", { styles, template });
