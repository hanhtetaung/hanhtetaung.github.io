import { navHref } from "../../../lib/asset.js";
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
    margin-bottom: 2rem;
    font-size: var(--size-title);
  }
`;

const template = /* html */ `
  <section>

      <h2>One Design System, 100+ Workflows</h2>

      <article>
          <p>
            A design system keeps interfaces consistent, reusable, and
            easier to scale as the product grows to 100+ workflows. For
            example, the same button, input, table, and form patterns are
            reused across patient registration, inventory, and reporting
            instead of being redesigned for each workflow.
          </p>

      </article>
  </section>
`;

define("section-mmo-one-design-system", { styles, template });
