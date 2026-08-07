export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h1 class="title">Foundation for Building Interfaces at Scale</h1>
            </div>
            <div class="article__body">
              <p>
                Build systems, not interfaces. A design system is the single
                source of truth for consistent, scalable interfaces.
              </p>

              <p><b>On this page</b></p>

              <ul>
                <li>
                  <a href="#atomic-design-principle" class="button--link"
                    >Atomic design principle
                  </a>
                </li>
                <li>
                  <a href="#design-token-architecture" class="button--link"
                    >Design token architecture</a
                  >
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define(
  "section-foundation-building-interfaces-at-scale-intro",
  Section,
);
