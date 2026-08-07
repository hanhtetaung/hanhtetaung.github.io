export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Continue to Expand the Knowledge Tree</h2>
            </div>

            <div class="article__body">
              <p>
                This project is designed to grow over time by adding more
                sources, goods, and their relationships. As the knowledge tree
                expands, it will provide a more complete view of how everyday
                products are connected.
              </p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-knowledge-tree-conclusion", Section);
