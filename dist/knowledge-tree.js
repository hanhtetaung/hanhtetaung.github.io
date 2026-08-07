// web-components/sections/header.js
class SectionHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header">
      <div class="container">
        <a href="/">
          <img
            src="/assets/images/logo.avif"
            alt="Han Htet Aung"
            class="logo"
            width="200"
            height="200"
          />
        </a>

        <div class="header__navigation">
          <nav class="nav nav--horizontal">
            <ul>
              <li>
                <a href="/" class="link-drawing"
                  >Home
                  <svg>
                    <use href="assets/sprite.svg#oval-line"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a href="/about" class="link-drawing"
                  >About
                  <svg>
                    <use href="assets/sprite.svg#oval-line"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <a class="button--primary" href="/hire-me">
            Let's chat
            <span>&#8629;</span>
          </a>
        </div>
      </div>
    </header>`;
  }
}
customElements.define("section-header", SectionHeader);

// web-components/sections/footer.js
class SectionFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__profile">
            <img
              class="logo"
              src="/assets/images/logo.avif"
              alt="Profile Icon"
            />
            <p>
              Thank You <br />
              for Visiting
            </p>
          </div>

          <div class="footer__navigation">
            <div class="foooter__sitemap">
              <span class="body">Sitemap</span>
              <nav class="nav nav--vertical">
                <ul>
                  <li>
                    <a href="/" class="button--link">Home</a>
                  </li>
                  <li>
                    <a href="/about" class="button--link">About</a>
                  </li>

                  <li>
                    <a href="/credits" class="button--link">Credits</a>
                  </li>
                  <li>
                    <a href="/hire-me" class="button--link">Hire me</a>
                  </li>
                  <li>
                    <a href="/thank-you" class="button--link">Thank you</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="footer__social">
              <span class="body">Get in touch:</span>
              <nav class="nav nav--horizontal">
                <ul>
                  <li>
                    <a href="mailto:hanhtetaung.dev@gmail.com">
                      <img
                        src="/assets/icons/email.svg"
                        alt="Email Icon"
                        class="icon--sm"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/hanhtetaung/"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/assets/icons/github.svg"
                        alt="Github Icon"
                        class="icon--sm"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/han-htet-aung/"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/assets/icons/linkedin.svg"
                        alt="Linkedin Icon"
                        class="icon--sm"
                    /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p class="footer__copy">
          © Han Htet Aung 2026 |
          <a class="button--link" href="/credits">Credits</a>
        </p>
      </div>
    </footer>`;
  }
}
customElements.define("section-footer", SectionFooter);

// web-components/sections/knowledge-tree/intro.js
class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section>
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

// web-components/sections/knowledge-tree/overview.js
class Section2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section>
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
customElements.define("section-knowledge-tree-overview", Section2);

// web-components/sections/knowledge-tree/building-block.js
class Section3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <section>
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
customElements.define("section-knowledge-tree-building-block", Section3);

// web-components/sections/knowledge-tree/need-one-interface.js
class Section4 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section>
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
customElements.define("section-knowledge-tree-need-one-interface", Section4);

// web-components/sections/knowledge-tree/conclusion.js
class Section5 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <section>
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
customElements.define("section-knowledge-tree-conclusion", Section5);
