export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Overview</h2>
            </div>

            <div class="article__body">
              <p>
                The knowledge tree is built around two primary node types:
                <b>Sources</b> and <b>Goods</b>.
              </p>

              <p>
                Sources are the fundamental sources that all goods come from.
                The current version includes <b> seven foundational sources</b>.
              </p>

              <div>
                <p>Goods are daily products.</p>
                <ul>
                  <li>
                    <p>Can contain sources or other goods.</p>
                  </li>
                  <li><p>Can be used to make other goods.</p></li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-knowledge-tree-overview", Section);
