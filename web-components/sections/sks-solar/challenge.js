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
      One of the main challenges of the project was creating a visual
      direction that felt modern, clean, and professional while
      maintaining clarity and usability. The redesign focused on
      improving typography, spacing, layout, and overall presentation
      to deliver a more polished and trustworthy user experience.
    </p>
  </section>
`;

define("section-sks-solar-challenge", { styles, template });
