export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <div class="section-title">
            <h2>Need One Interface</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                The interface has two main areas: a <b>Center Panel</b> to
                visualize the knowledge tree and a <b> Right Panel</b> to
                display information about the selected node.
              </p>
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Default State</h3>
              </div>

              <div class="article__body">
                <p>
                  The center panel displays the entire knowledge tree. Sources
                  are shown as blue nodes, while Goods are shown as green nodes.
                  Every node is clickable, and the right panel remains empty
                  until a node is selected.
                </p>

                <img
                  src="/assets/images/case-study/knowledge-tree/default-state.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Selecting a Source Node</h3>
              </div>

              <div class="article__body">
                <p>
                  When a source is selected, the center panel highlights its
                  connected goods. The right panel displays the source name, and
                  a list of goods made from that source.
                </p>

                <img
                  src="/assets/images/case-study/knowledge-tree/selecting-a-source-node.avif"
                  alt="Wireframe Screenshot"
                  width="1398"
                  height="1366"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Selecting a Good Node</h3>
              </div>

              <div class="article__body">
                <p>
                  A good can be made directly from sources or from other goods.
                  When a good is selected, the right panel displays its sources,
                  ingredients (if any), and the goods that use it (if any).
                </p>

                <img
                  src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-1.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />

                <img
                  src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-2.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("section-knowledge-tree-need-one-interface", Section);
