function v(o,a){if(o===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(o);if(a===Number)return Number(o);return o}function e(o,{props:a={},attrs:r=[],styles:f="",template:s}){let u=["props",...r];class c extends HTMLElement{static observedAttributes=u;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},t=this.getAttribute("props");if(t)try{i=JSON.parse(t)}catch{i={}}let d={};for(let n of Object.keys(a))d[n]=v(i[n],a[n]);return d}_applyForwardedAttrs(){if(r.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let t of r)if(this.hasAttribute(t))i.setAttribute(t,this.getAttribute(t));else i.removeAttribute(t)}_render(){let i=this._getProps(),t=typeof s==="function"?s(i):s;this.shadowRoot.innerHTML=`<style>${f}</style>${t}`,this._applyForwardedAttrs()}}customElements.define(o,c)}var b=`
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
`;e("app-link",{attrs:k,styles:b,template:w});var y=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,_=["width","height","src","alt"],x=()=>"<img data-forward />";e("app-logo",{attrs:_,styles:y,template:x});var l="769px",D="992px";var A=`
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

  @media (max-width: ${l}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,T=`
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
`;e("section-header",{template:T,styles:A});var H=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${l}) {
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
`;e("footer-nav",{styles:H,template:C});var E=`
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

  @media (max-width: ${l}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`,S=`
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
`;e("section-footer",{styles:E,template:S});class p extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-foundation-building-interfaces-at-scale-intro",p);class m extends HTMLElement{connectedCallback(){this.innerHTML=`<section id="atomic-design-principle">
        <div class="container">
          <article class="article">
            <h2>Atomic Design Principle</h2>

            <div class="article__body">
              <p>
                Follow Atomic Design principles to create scalable, reusable,
                and maintainable interface building blocks.
              </p>

              <img
                src="/assets/images/foundation-building-software/atomic-design.avif"
                alt=""
              />
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Page</h3>
              </div>
              <div class="article__body">
                <p>
                  A complete interface that composed of multiple organisms.
                  Let’s break down the Strava Activities interface into
                  organisms → molecules → atoms → subatomic particles. <br />For
                  example, the Strava Activities page contains four organisms.
                </p>

                <img
                  src="/assets/images/foundation-building-software/page.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Organism</h3>
              </div>
              <div class="article__body">
                <p>
                  A distinct section of an interface composed of molecules,
                  atoms, subatomic particles or even other organisms. The
                  following diagram shows an organism made up of three
                  molecules, one atom and one other organism.
                </p>

                <img
                  src="/assets/images/foundation-building-software/organisms.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Molecule</h3>
              </div>
              <div class="article__body">
                <p>
                  A simple interface element composed of atoms or subatomic
                  particles as well as other molecules. The example below shows
                  how six atoms combine to form a molecule.
                </p>

                <img
                  src="/assets/images/foundation-building-software/molecule.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Atom</h3>
              </div>
              <div class="article__body">
                <p>
                  A foundational building block of an interface composed of
                  subatomic particles.The illustration below shows an atom
                  composed of three subatomic particles.
                </p>

                <img
                  src="/assets/images/foundation-building-software/atom.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Subatomic particle</h3>
              </div>
              <div class="article__body">
                <p>Smallest unit of the system, represents design token.</p>

                <img
                  src="/assets/images/foundation-building-software/subatomic-particles.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`}}customElements.define("section-atomic-design-principle",m);class h extends HTMLElement{connectedCallback(){this.innerHTML=`<section id="design-token-architecture">
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Design Token Architecture</h2>
            </div>

            <div class="article__body">
              <p>A two-tier architecture is enough: Primitive and Semantic.</p>

              <img
                src="/assets/images/foundation-building-software/token-architecture.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Single Source of Truth</h3>
            </div>
            <div class="article__body">
              <p>
                Use semantic tokens to define all interface building blocks. The
                figma uses slash as separators with all letters lowercase, but
                can be converted to a preferred platform convention like dashes
                or camelCase.
              </p>

              <img
                src="/assets/images/foundation-building-software/single-source-of-truth.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Theming</h3>
            </div>
            <div class="article__body">
              <p>
                A token can point to different value related to mode and when
                the mode changes, the reference values are updated
                automatically.
              </p>

              <img
                src="/assets/images/foundation-building-software/theming.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Token Structure</h3>
            </div>
            <div class="article__body">
              <p>Tokens are named in two parts:</p>

              <ol>
                <li>Base</li>
                <li>Modifier (optional)</li>
              </ol>
              <img
                src="/assets/images/foundation-building-software/token-structure.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Design Token Anatomy</h3>
            </div>
            <div class="article__body">
              <p>
                The diagram below shows how primitive, and semantic tokens
                combine base, and modifier.
              </p>

              <img
                src="/assets/images/foundation-building-software/design-token-anatomy.avif"
                alt="Design Token Anatomy"
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Applying Design Tokens</h3>
            </div>
            <div class="article__body">
              <p>
                Here's an example of how semantic tokens are used throughout a
                strava activities page.
              </p>

              <img
                src="/assets/images/foundation-building-software/applying-token.avif"
                alt="Applying Token photo"
              />
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-design-token-architecture",h);class g extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="reference">
        <div class="container">
          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://atomicdesign.bradfrost.com/chapter-2/"
                target="_blank"
                class="button--link"
                >Atomic Design Principle
              </a>
            </li>
            <li>
              <a
                href="https://playbook.ebay.com/foundations"
                target="_blank"
                class="button--link"
                >ebay Playbook</a
              >
            </li>
            <li>
              <a
                href="https://www.designsystem.tech.gov.sg/foundations/"
                class="button--link"
                target="_blank"
              >
                SGDS Design
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/"
                target="_blank"
                class="button--link"
              >
                Strava
              </a>
            </li>
          </ul>
        </div>
      </section>`}}customElements.define("section-foundation-building-interfaces-at-scale-references",g);
