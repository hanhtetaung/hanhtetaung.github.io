function h(a,i){if(a===void 0){if(i===Array)return[];if(i===Object)return{};if(i===Boolean)return!1;if(i===Number)return 0;return}if(i===Boolean)return Boolean(a);if(i===Number)return Number(a);return a}function t(a,{props:i={},attrs:n=[],styles:d="",template:l}){let m=["props",...n];class c extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let e={},o=this.getAttribute("props");if(o)try{e=JSON.parse(o)}catch{e={}}let p={};for(let s of Object.keys(i))p[s]=h(e[s],i[s]);return p}_applyForwardedAttrs(){if(n.length===0)return;let e=this.shadowRoot.querySelector("[data-forward]");if(!e)return;for(let o of n)if(this.hasAttribute(o))e.setAttribute(o,this.getAttribute(o));else e.removeAttribute(o)}_render(){let e=this._getProps(),o=typeof l==="function"?l(e):l;this.shadowRoot.innerHTML=`<style>${d}</style>${o}`,this._applyForwardedAttrs()}}customElements.define(a,c)}var g=`
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
`;t("app-link",{attrs:f,styles:g,template:u});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,b=["width","height","src","alt"],k=()=>"<img data-forward />";t("app-logo",{attrs:b,styles:v,template:k});var r="769px",K="992px";var y=`
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

        <app-link variant="primary" href="/hire-me">
          Let's chat &#8629;
        </app-link>
      </div>
  </header>
`;t("section-header",{template:w,styles:y});var x=`
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
                />
                </app-link>
            </li>
        </ul>
    </nav>
`;t("footer-nav",{styles:x,template:A});var _=`
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
`,H=`
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

      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>
  </footer>
`;t("section-footer",{styles:_,template:H});var S=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h1 {
    margin: 0;
    font-size: var(--size-title);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-block: 1.5rem;
  }

  ul {
    margin: 0;
    padding-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`,E=`
  <section>
    <h1>Foundation for Building Interfaces at Scale</h1>

    <p>
      Build systems, not interfaces. A design system is the single source of
      truth for consistent, scalable interfaces.
    </p>

    <p><b>On this page</b></p>

    <ul>
      <li>
        <app-link href="#atomic-design-principle" variant="underline">
          Atomic design principle
        </app-link>
      </li>
      <li>
        <app-link href="#design-token-architecture" variant="underline">
          Design token architecture
        </app-link>
      </li>
    </ul>
  </section>
`;t("section-foundation-building-interfaces-at-scale-intro",{styles:S,template:E});var O=`
  :host {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 3rem;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    font-family: var(--font-heading);
    font-weight: var(--font-regular)
  }

  :host([variant="vertical"]) {
    flex-direction: column-reverse;
    gap: 0;

    img {
      height: 5rem;
      width: auto;
    }
  }

  :host([variant="text"]) {
    img {
      display: none;
    }
  }
`,P={name:String,img:String,alt:String},$=({name:a,img:i="",alt:n=""})=>`
    <h2>${a}</h2>
    <img
        src=${i}
        alt=${n}
        height="36"
        width="76"
    />
`;t("section-title",{props:P,styles:O,template:$});var N=`
  :host {
    --local-width: 5rem;
    --local-heigth: auto;

    display: inline-block;
    width: fit-content;
  }

  img {
    max-width: var(--local-width);
    height: var(--local-heigth);
    width: 100%;
  }

  :host([variant="normal"]) {
    --local-width: 12rem;
    --local-heigth: auto;
  }

  :host([variant="medium"]) {
    --local-width: 40rem;
  }

  :host([variant="large"]) {
    --local-width: 50rem;
  }

   :host([variant="full"]) {
    --local-width: 100%;
  }
`,z=["width","height","src","alt"],C=()=>"<img data-forward />";t("app-image",{attrs:z,styles:N,template:C});var L=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${r}) {
        display: block;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-heading);
    width: fit-content;
    height: fit-content;
  }

  :host([variant="block"]) {
    display: block;
  }
`,T={title:String},B=({title:a})=>`
        <h3>${a}</h3>

        <article>
            <slot></slot>
        </article>
`;t("app-article-paragraph",{props:T,styles:L,template:B});var D=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }
`,j=`
  <section id="atomic-design-principle">
    <section-title variant="text" props='{"name": "Atomic Design Principle"}'></section-title>

    <p>
      Follow Atomic Design principles to create scalable, reusable, and
      maintainable interface building blocks.
    </p>

    <app-image
      variant="full"
      src="/assets/images/foundation-building-software/atomic-design.avif"
      alt="Atomic design overview"
      width="1398"
      height="1236"
    ></app-image>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "Page" }'>
          <p>
            A complete interface that is composed of multiple organisms. Let’s break down the Strava Activities interface into organisms → molecules → atoms → subatomic particles. For example, the Strava Activities page contains four organisms.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/page.avif"
            alt="Page overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Organism" }'>
          <p>
            A distinct section of an interface composed of molecules, atoms, subatomic particles, or even other organisms. The following diagram shows an organism made up of three molecules, one atom, and one other organism.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/organisms.avif"
            alt="Organism overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Molecule" }'>
          <p>
            A simple interface element composed of atoms or subatomic particles as well as other molecules. The example below shows how six atoms combine to form a molecule.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/molecule.avif"
            alt="Molecule overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Atom" }'>
          <p>
            A foundational building block of an interface composed of subatomic particles. The illustration below shows an atom composed of three subatomic particles.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/atom.avif"
            alt="Atom overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Subatomic particle" }'>
          <p>Smallest unit of the system, represents a design token.</p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/subatomic-particles.avif"
            alt="Subatomic particles overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;t("section-atomic-design-principle",{styles:D,template:j});var I=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    padding-top: 5rem;
  }

  ol {
    list-style: disc;
    padding: 0;
    padding-left: 1.5rem;
  }
`,F=`
  <section id="design-token-architecture">
    <section-title variant="text" props='{"name": "Design Token Architecture"}'></section-title>

    <p>A two-tier architecture is enough: Primitive and Semantic.</p>

    <app-image
      variant="full"
      src="/assets/images/foundation-building-software/token-architecture.avif"
      alt="Token architecture overview"
      width="1398"
      height="1236"
    ></app-image>

    <ul>
      <li>
        <app-article-paragraph variant="block" props='{ "title": "Single Source of Truth" }'>
          <p>
            Use semantic tokens to define all interface building blocks. The
            Figma file uses slashes as separators with all letters lowercase,
            but it can be converted to a preferred platform convention like
            dashes or camelCase.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/single-source-of-truth.avif"
            alt="Single source of truth overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Theming" }'>
          <p>
            A token can point to different values related to a mode, and when
            the mode changes, the reference values are updated automatically.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/theming.avif"
            alt="Theming overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Token Structure" }'>
          <p>Tokens are named in two parts:</p>
          <ol>
            <li>Base</li>
            <li>Modifier (optional)</li>
          </ol>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/token-structure.avif"
            alt="Token structure overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Design Token Anatomy" }'>
          <p>
            The diagram below shows how primitive and semantic tokens combine
            base and modifier.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/design-token-anatomy.avif"
            alt="Design token anatomy overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Applying Design Tokens" }'>
          <p>
            Here is an example of how semantic tokens are used throughout a
            Strava activities page.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/applying-token.avif"
            alt="Applying token overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>
</ul>
  </section>
`;t("section-design-token-architecture",{styles:I,template:F});var G=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`,R=`
  <section>
    <section-title variant="text" props='{"name": "References"}'></section-title>

    <ul>
      <li>
        <app-link href="https://atomicdesign.bradfrost.com/chapter-2/" target="_blank" variant="underline">
          Atomic Design Principle
        </app-link>
      </li>
      <li>
        <app-link href="https://playbook.ebay.com/foundations" target="_blank" variant="underline">
          ebay Playbook
        </app-link>
      </li>
      <li>
        <app-link href="https://www.designsystem.tech.gov.sg/foundations/" target="_blank" variant="underline">
          SGDS Design
        </app-link>
      </li>
      <li>
        <app-link href="https://www.strava.com/" target="_blank" variant="underline">
          Strava
        </app-link>
      </li>
    </ul>
  </section>
`;t("section-foundation-building-interfaces-at-scale-references",{styles:G,template:R});
