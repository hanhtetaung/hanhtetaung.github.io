function g(e,a){if(e===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(e);if(a===Number)return Number(e);return e}function o(e,{props:a={},attrs:n=[],styles:m="",template:l}){let d=["props",...n];class c extends HTMLElement{static observedAttributes=d;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let t={},i=this.getAttribute("props");if(i)try{t=JSON.parse(i)}catch{t={}}let p={};for(let s of Object.keys(a))p[s]=g(t[s],a[s]);return p}_applyForwardedAttrs(){if(n.length===0)return;let t=this.shadowRoot.querySelector("[data-forward]");if(!t)return;for(let i of n)if(this.hasAttribute(i))t.setAttribute(i,this.getAttribute(i));else t.removeAttribute(i)}_render(){let t=this._getProps(),i=typeof l==="function"?l(t):l;this.shadowRoot.innerHTML=`<style>${m}</style>${i}`,this._applyForwardedAttrs()}}customElements.define(e,c)}var h=`
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
`,f=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;o("app-link",{attrs:f,styles:h,template:u});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,b=["width","height","src","alt"],y=()=>"<img data-forward />";o("app-logo",{attrs:b,styles:v,template:y});var r="769px",G="992px";var k=`
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
`;o("section-header",{template:w,styles:k});var x=`
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
`;o("footer-nav",{styles:x,template:A});var H=`
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
`,_=`
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
`;o("section-footer",{styles:H,template:_});var C=`
  :host {
    --local-width: 5rem;
    --local-heigth: auto;

    display: block;
  }

  img {
    max-width: var(--local-width);
    height: var(--local-heigth);
  }

  :host([variant="normal"]) {
    --local-width: 12rem;
    --local-heigth: auto;
  }

  :host([variant="large"]) {
    --local-width: 50rem;
  }
`,E=["width","height","src","alt"],N=()=>"<img data-forward />";o("app-image",{attrs:E,styles:C,template:N});var S=`
  :host {
    --local-width: 3rem;
    --local-height: auto;

    display: block;
  }

  img {
    width: var(--local-width);
      height: var(--local-height);
  }

  :host([variant="large"]) {
    --local-width: auto;
    --local-height: 10rem;
  }

  :host([variant="creator"]) {
    --local-height: auto;
    --local-width: 4rem;
  }


`,O=["src","alt"],$=()=>'<img data-forward width="200" height="200"/>';o("app-icon",{attrs:O,styles:S,template:$});var L=`
   section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

      h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  hgroup {
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }

  @media (max-width: ${r}) {
          app-image {
            display: none;
          }
        }
`,P={name:String,img:String,alt:String},T=({name:e="Name",img:a="/assets/images/coming-soon.jpg",alt:n="Coming Soon"})=>`
  <section>
      <div>
        <hgroup>
          <p>Coming Soon</p>
          <h1>${e}</h1>
        </hgroup>

        <app-icon
          variant="large"
          src="/assets/icons/cuckoo-cock.svg"
          alt="Cuckoo Cock Logo"
        ></app-icon>
      </div>

      <app-image variant="large" src=${a} alt=${n}></app-image>
  </section>
`;o("section-coming-soon-intro",{props:P,styles:L,template:T});var j=`
  :host {
    display: block;
  }
`,B=`
  <section-coming-soon-intro
    props='{"name":"Bamboo", "img": "/assets/images/case-study/bamboo/thumbnail.avif", "alt": "Bamboo Interface"}'
  ></section-coming-soon-intro>
`;o("section-bamboo-intro",{styles:j,template:B});
