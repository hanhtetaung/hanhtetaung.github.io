function b(o,a){if(o===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(o);if(a===Number)return Number(o);return o}function e(o,{props:a={},attrs:l=[],styles:u="",template:n}){let f=["props",...l];class c extends HTMLElement{static observedAttributes=f;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},t=this.getAttribute("props");if(t)try{i=JSON.parse(t)}catch{i={}}let d={};for(let s of Object.keys(a))d[s]=b(i[s],a[s]);return d}_applyForwardedAttrs(){if(l.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let t of l)if(this.hasAttribute(t))i.setAttribute(t,this.getAttribute(t));else i.removeAttribute(t)}_render(){let i=this._getProps(),t=typeof n==="function"?n(i):n;this.shadowRoot.innerHTML=`<style>${u}</style>${t}`,this._applyForwardedAttrs()}}customElements.define(o,c)}var y=`
  :host {
    --local-bg: transparent;
    --local-color: var(--color-text);
    --local-border: 1px solid var(--local-color);
    --local-decoration: none;
    --local-direction: row;
    --local-padding: 1rem 2rem;
    display: inline-block;
  }

  a {
    display: inline-flex;
    gap: 0.5rem;
    background: var(--local-bg);
    color: var(--local-color);
    border: var(--local-border);
    text-decoration: var(--local-decoration);
    padding: var(--local-padding);
    white-space: nowrap;
    flex-direction: var(--local-direction);
  }

  :host([variant="primary"]) {
    --local-bg: var(--color-primary);
    --local-color: var(--color-bg-primary);
  }

  :host([variant="secondary"]) {
    --local-color: var(--color-primary);
  }

  :host([variant="underline"]) {
    --local-color: var(--color-secondary);
    --local-border: none;
    --local-decoration: underline;
    --local-padding: 0;
  }

  :host([variant="plain"]) {
    --local-border: none;
    --local-padding: 0.2rem 0;
  }

  :host([variant="image"]) {
    --local-border: none;
    --local-decoration: underline;
    --local-padding: 0.2rem 0;
    --local-color: var(--color-secondary);
    --local-border: none;
    --local-direction: column;
  }
`,k=["href","target","rel","download"],w=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:k,styles:y,template:w});var _=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,x=["width","height","src","alt"],S=()=>"<img data-forward />";e("app-logo",{attrs:x,styles:_,template:S});var r="769px",O="992px";var T=`
  :host {
    display: block;
  }

  header {
    width: 80%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.6rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8rem;
    overflow-y: auto;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .button--primary {
    box-shadow: none;
  }

  @media (max-width: ${r}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,H=`
  <header>
      <app-link variant="plain" href="/">
        <app-logo
          src="/assets/images/logo.avif"
          alt="Logo"
          width="200"
          height="200"
        ></app-logo>
      </app-link>

      <div>
        <nav>
          <ul>
            <li>
              <app-link variant="plain" href="/">Home</app-link>
            </li>

            <li>
              <app-link variant="plain" href="/about">About</app-link>
            </li>
          </ul>
        </nav>

        <app-link class="button--primary" variant="primary" href="/hire-me">
          Let's chat &#8629;
        </app-link>
      </div>
  </header>
`;e("section-header",{template:H,styles:T});var E=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${r}) {
        flex-direction: column;
        gap: 3rem;
        margin-block: 2rem;
   }
  }

  ul, ol {
    padding: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
    margin-top: 0.5rem
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  nav ol {
    flex-direction: column;
  }

  nav ul {
    gap: 2rem;
    margin-top: 1rem;
  }
`,C=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            <li>
                <app-link href="/" variant="plain">Home</app-link>
            </li>
            <li>
                <app-link href="/about" variant="plain">About</app-link>
            </li>

            <li>
                <app-link href="/credits" variant="plain">Credits</app-link>
            </li>
            <li>
                <app-link href="/hire-me" variant="plain">Hire me</app-link>
            </li>
            <li>
                <app-link href="/thank-you" variant="plain">Thank you</app-link>
            </li>
        </ol>
    </nav>

    <nav>
        <span>Get in touch:</span>

        <ul>
            <li>
                <app-link href="mailto:hanhtetaung.dev@gmail.com" variant="image">
                <img
                    src="/assets/icons/email.svg"
                    alt="Email Icon"
                    class="icon--sm"
                />
                </app-link>
            </li>
            <li>
                <app-link
                href="https://github.com/hanhtetaung/"
                target="_blank"
                rel="noopener"
                variant="image"
                >
                <img
                    src="/assets/icons/github.svg"
                    alt="Github Icon"
                    class="icon--sm"
                />
                </app-link>
            </li>
            <li>
                <app-link
                href="https://www.linkedin.com/in/han-htet-aung/"
                target="_blank"
                rel="noopener"
                variant="image"
                >
                <img
                    src="/assets/icons/linkedin.svg"
                    alt="Linkedin Icon"
                    class="icon--sm"
                />
                </app-link>
            </li>
        </ul>
    </nav>
`;e("footer-nav",{styles:E,template:C});var L=`
  :host {
    --local-bg-color: var(--color-bg-secondary);

    display: block;
    background-color: var(--local-bg-color);
    padding-block: 10rem;
  }

  :host([variant="secondary"]) {
    --local-bg-color: var(--color-bg-primary);
  }

  p {
    margin: 0;
  }

  footer {
    width: 80%;
    margin-inline: auto;
  }

  

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${r}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`,A=`
  <footer>
      <article>
        <div>
          <app-logo
            src="/assets/images/logo.avif"
            alt="Logo"
            width="200"
            height="200"
          ></app-logo>
        
          <p>
            Thank You <br />
            for Visiting
          </p>
        </div>

        <footer-nav></footer-nav>
      </article>

      <p class="footer__copy">
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>
  </footer>
`;e("section-footer",{styles:L,template:A});class p extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-knowledge-tree-intro",p);class h extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-knowledge-tree-overview",h);class m extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
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
      </section>`}}customElements.define("section-knowledge-tree-building-block",m);class g extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-knowledge-tree-need-one-interface",g);class v extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
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
      </section>`}}customElements.define("section-knowledge-tree-conclusion",v);
