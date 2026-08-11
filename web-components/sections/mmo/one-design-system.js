import { define } from "../../define";

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
        props='{"name": "One Design System, 100+ Workflows"}'
      ></section-title>

      <article>
          <p>
            A design system keeps interfaces consistent, reusable, and
            easier to scale as the product grows to 100+ workflows. For
            example, the same button, input, table, and form patterns are
            reused across patient registration, inventory, and reporting
            instead of being redesigned for each workflow.
          </p>

          <p>
            The foundations behind my design approach for scalable
            interfaces.
          </p>

          <app-link variant="underline" href="/foundation-building-interfaces-at-scale">Read the article</app-link>
      </article>
  </section>
`;

define("section-mmo-one-design-system", { styles, template });
