function h(i,a){if(i===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return""}if(a===Boolean)return Boolean(i);if(a===Number)return Number(i);return i}function o(i,{props:a={},attrs:n=[],styles:m="",template:l}){let g=["props",...n];class c extends HTMLElement{static observedAttributes=g;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let e={},r=this.getAttribute("props");if(r)try{e=JSON.parse(r)}catch{e={}}let p={};for(let s of Object.keys(a))p[s]=h(e[s],a[s]);return p}_applyForwardedAttrs(){if(n.length===0)return;let e=this.shadowRoot.querySelector("[data-forward]");if(!e)return;for(let r of n)if(this.hasAttribute(r))e.setAttribute(r,this.getAttribute(r));else e.removeAttribute(r)}_render(){let e=this._getProps(),r=typeof l==="function"?l(e):l;this.shadowRoot.innerHTML=`<style>${m}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(i,c)}var f=`
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
`,u=["href","target","rel","download"],v=`
  <a data-forward><slot></slot></a>
`;o("app-link",{attrs:u,styles:f,template:v});var b=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,k=["width","height","src","alt"],y=()=>"<img data-forward />";o("app-logo",{attrs:k,styles:b,template:y});var t="769px",N="992px";var x=`
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

  @media (max-width: ${t}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,w=`
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
`;o("section-header",{template:w,styles:x});var _=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${t}) {
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
`,A=()=>`
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
`;o("footer-nav",{styles:_,template:A});var H=`
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

  @media (max-width: ${t}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`,C=`
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
`;o("section-footer",{styles:H,template:C});class d extends HTMLElement{connectedCallback(){this.innerHTML=` <section class="coming-soon">
        <div class="container">
          <div class="coming-soon__header">
            <hgroup>
              <p class="body">Coming Soon</p>
              <h1>AU Van</h1>
            </hgroup>

            <img
              src="/assets/icons/cuckoo-cock.svg"
              alt="Coming Soon"
              class="coming-soon__image"
            />
          </div>

            <img src="/assets/images/coming-soon.jpg" class="image" alt="Coming Soon" />
        </div>
      </section>`}}customElements.define("section-au-van-intro",d);
