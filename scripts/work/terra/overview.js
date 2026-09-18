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

  p {
    margin-block: 2rem;
  }
`;

const template = /* html */ `
  <section>
  

      <h2>Overview</h2>

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
