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
    <section-title variant="text" props='{"name": "Background"}'></section-title>

    <p>
      This project was created as a personal portfolio website to showcase
      selected projects and experience in a modern, responsive, and
      boutique-style presentation. The goal was to create a clean and
      polished experience with clear structure, minimal visuals, and a
      strong professional presence.
    </p>
  </section>
`;

define("section-portfolio-background", { styles, template });
