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
    <section-title variant="text" props='{"name": "Challenge"}'></section-title>

    <p>
      One of the main challenges of the project was designing a visual
      direction that felt modern, minimal, and boutique while still
      maintaining clarity and professionalism. The redesign focused on
      creating a strong visual identity through typography, spacing,
      layout, and overall presentation to build a more polished and
      trustworthy user experience.
    </p>
  </section>
`;

define("section-portfolio-challenge", { styles, template });
