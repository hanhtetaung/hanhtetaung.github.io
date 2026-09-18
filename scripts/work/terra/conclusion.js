import { define } from "../../../lib/define.js";

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

      <h2>Continue to Expand Terra</h2>

      <article>
          <p>
            This project is designed to grow over time by adding more
            sources, goods, and their relationships. As the Terra
            expands, it will provide a more complete view of how everyday
            products are connected.
          </p>
      </article>
  </section>
`;

define("section-terra-conclusion", { styles, template });
