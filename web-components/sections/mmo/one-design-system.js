export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>One Design System, 100+ Workflows</h2>
            </div>

            <div class="article__body">
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

              <a
                href="/foundation-building-interfaces-at-scale"
                class="button--link"
                >Read the article</a
              >
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-one-design-system", Section);
