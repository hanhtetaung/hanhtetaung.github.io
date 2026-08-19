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

  p {
    margin-block: 2rem;
  }
`;

const template = /* html */ `
  <section>
    <section-title
        variant="text"
        props='{"name": "Overview"}'
      ></section-title>

      <article>
        <p>
          The Terra is built around two primary node types:
          <b>Sources</b> and <b>Goods</b>.
        </p>

        <p>
          Sources are the fundamental sources that all goods come from.
          The current version includes <b> seven foundational sources</b>.
        </p>

        <p>Goods are daily products.</p>

        <ul>
          <li>Can contain sources or other goods.
          </li>
          <li>Can be used to make other goods.</li>
        </ul>
      </article>
  </section>
`;

define("section-terra-overview", { styles, template });
