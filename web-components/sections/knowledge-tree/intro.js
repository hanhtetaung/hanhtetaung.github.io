export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="/assets/images/case-study/knowledge-tree/thumbnail.avif"
                alt="Final Product Screenshot"
                class="image"
                width="1692"
                height="886"
              />
            </div>

            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>Knowledge Tree</h1>
              </div>

              <div class="article__body">
                <p>
                  A tool to visualize the connections between everyday goods and
                  their fundamental sources based on my knowledge.
                </p>

                <div>
                  <span class="small--emphasis">Scope:</span>
                  <p>Idea → Product</p>
                </div>

                <a
                  class="button--outline"
                  href="https://hanhtetaung.dev/knowledge-tree"
                  target="_blank"
                  >View Live Website</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-knowledge-tree-intro", Section);
