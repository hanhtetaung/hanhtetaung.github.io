export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Building Blocks</h2>
            </div>

            <div class="article__body">
              <article class="article">
                <div class="article__header">
                  <h3>Design Foundation</h3>
                </div>
                <div class="article__body">
                  <img
                    src="/assets/images/case-study/knowledge-tree/foundation.avif"
                    alt="Wireframe Screenshot"
                    width="1398"
                    height="1366"
                  />
                </div>
              </article>

              <article class="article">
                <div class="article__header">
                  <h3>Data Structure</h3>
                </div>
                <div class="article__body">
                  <div>
                    <p><b>Source</b></p>
                    <p>
                      <code> { "id": "name", "type": "source" } </code>
                    </p>
                  </div>

                  <div>
                    <p>
                      <b>Good :</b> The components field references either
                      source nodes or other goods
                    </p>
                    <p>
                      <code>
                        { "id": "name", "type": "good", "components": ["id",
                        "id", "id"] }
                      </code>
                    </p>
                  </div>
                </div>
              </article>

              <article class="article">
                <div class="article__header">
                  <h3>Tech Stacks</h3>
                </div>
                <div class="article__body">
                  <ul>
                    <li><p>Figma</p></li>
                    <li><p>HTML5</p></li>
                    <li><p>CSS3</p></li>
                    <li><p>SCSS</p></li>
                    <li><p>JavaScript</p></li>
                    <li><p>Sonnet 5, Quwen3.7-Plus</p></li>
                  </ul>

                  <p>
                    <b>Hosted on:</b>
                    <a
                      href="https://github.com/hanhtetaung/hanhtetaung.github.io/tree/main/knowledge-tree"
                      target="_blank"
                      class="button--link"
                      >Github</a
                    >
                  </p>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-knowledge-tree-building-block", Section);
