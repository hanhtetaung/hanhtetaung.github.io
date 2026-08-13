function h(t,a){if(t===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(t);if(a===Number)return Number(t);return t}function e(t,{props:a={},attrs:n=[],styles:m="",template:l}){let d=["props",...n];class c extends HTMLElement{static observedAttributes=d;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},r=this.getAttribute("props");if(r)try{i=JSON.parse(r)}catch{i={}}let p={};for(let s of Object.keys(a))p[s]=h(i[s],a[s]);return p}_applyForwardedAttrs(){if(n.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let r of n)if(this.hasAttribute(r))i.setAttribute(r,this.getAttribute(r));else i.removeAttribute(r)}_render(){let i=this._getProps(),r=typeof l==="function"?l(i):l;this.shadowRoot.innerHTML=`<style>${m}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(t,c)}var g=`
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
    --local-color: var(--color-tertiary);
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
    /* --local-decoration: underline; */
    --local-padding: 0.2rem 0;
    --local-color: var(--color-tertiary);
    --local-border: none;
    --local-direction: column;
  }

  :host([variant="sitemap"]) {
     --local-padding: 0.2rem 0;
     --local-border: none;

     a::before {
       content: "➶";
     }
  }
`,f=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:f,styles:g,template:u});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,b=["width","height","src","alt"],y=()=>"<img data-forward />";e("app-logo",{attrs:b,styles:v,template:y});var o="769px",U="992px";var k=`
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
    gap: 5rem;
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

  @media (max-width: ${o}) {
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
`;e("section-header",{template:w,styles:k});var x=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/au-van",name:"AU Van"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"},{href:"/work/knowledge-tree",name:"Knowledge Tree"}],A=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${o}) {
        flex-direction: column;
        gap: 3rem;
        margin-block: 2rem;
   }
  }

    ol {
    padding: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  nav ol {
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 12.5ch;
    overflow: scroll;

    @media (max-width: ${o}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,$=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${x.map((t)=>`
                <li>
                    <app-link variant="sitemap" href=${t.href} >${t.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;e("footer-nav",{styles:A,template:$});var S=`
  :host {
   display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;

   @media (max-width: ${o}) {
        flex-direction: column-reverse;
        gap: 2rem;
        border: none;
        padding-top: 0;
   }
  }

  p {
    margin: 0;

    @media (max-width: ${o}) {
      border-top: 1px solid var(--color-text);
    padding-top: 1rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }

  span {
    display: none;
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    

    @media (max-width: ${o}) {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`,_=()=>`
      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>

      <nav>
        <span>Find me on:</span>
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
`;e("footer-copyright",{styles:S,template:_});var H=`
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
    margin-bottom: 2rem;
    gap: 5rem;
  }

  @media (max-width: ${o}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
    align-items: center;
    min-width: 21rem;
  }

  hr {
    color: var(--color-secondary);
  }
`,O=`
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

      <footer-copyright></footer-copyright>
  </footer>
`;e("section-footer",{styles:H,template:O});var P=`
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
`;e("section-foundation-building-interfaces-at-scale-intro",{styles:P,template:E});var z=`
  :host {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 3rem;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    font-family: var(--font-heading);
    font-weight: var(--font-regular)
  }

  img {
    height: 5rem;
    width: auto;
  }

  :host([variant="vertical"]) {
    flex-direction: column-reverse;
    gap: 0;
  }

  :host([variant="text"]) {
    img {
      display: none;
    }
  }
`,N={name:String,img:String,alt:String},T=({name:t,img:a="",alt:n=""})=>`
    <h2>${t}</h2>
    <img
        src=${a}
        alt=${n}
        height="36"
        width="76"
    />
`;e("section-title",{props:N,styles:z,template:T});var B=`
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
`,C=["width","height","src","alt"],L=()=>"<img data-forward />";e("app-image",{attrs:C,styles:B,template:L});var j=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${o}) {
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
`,D={title:String},F=({title:t})=>`
        <h3>${t}</h3>

        <article>
            <slot></slot>
        </article>
`;e("app-article-paragraph",{props:D,styles:j,template:F});var M=`
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
`,I=`
  <section >
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
`;e("section-atomic-design-principle",{styles:M,template:I});var K=`
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
`,R=`
  <section>
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
`;e("section-design-token-architecture",{styles:K,template:R});var G=`
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
`,V=`
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
`;e("section-foundation-building-interfaces-at-scale-references",{styles:G,template:V});
