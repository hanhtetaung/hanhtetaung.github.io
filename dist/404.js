function h(a,r){if(a===void 0){if(r===Array)return[];if(r===Object)return{};if(r===Boolean)return!1;if(r===Number)return 0;return}if(r===Boolean)return Boolean(a);if(r===Number)return Number(a);return a}function o(a,{props:r={},attrs:n=[],styles:p="",template:l}){let d=["props",...n];class c extends HTMLElement{static observedAttributes=d;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let t={},i=this.getAttribute("props");if(i)try{t=JSON.parse(i)}catch{t={}}let m={};for(let s of Object.keys(r))m[s]=h(t[s],r[s]);return m}_applyForwardedAttrs(){if(n.length===0)return;let t=this.shadowRoot.querySelector("[data-forward]");if(!t)return;for(let i of n)if(this.hasAttribute(i))t.setAttribute(i,this.getAttribute(i));else t.removeAttribute(i)}_render(){let t=this._getProps(),i=typeof l==="function"?l(t):l;this.shadowRoot.innerHTML=`<style>${p}</style>${i}`,this._applyForwardedAttrs()}}customElements.define(a,c)}var f=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,g=["width","height","src","alt"],u=()=>"<img data-forward />";o("app-logo",{attrs:g,styles:f,template:u});var b=`
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

  :host([variant="sitemap"]) {
     --local-padding: 0.2rem 0;
     --local-border: none;

     a::before {
       content: "✈";
     }
  }
`,v=["href","target","rel","download"],w=`
  <a data-forward><slot></slot></a>
`;o("app-link",{attrs:v,styles:b,template:w});var e="769px",B="992px";var y=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/au-van",name:"AU Van"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"},{href:"/work/knowledge-tree",name:"Knowledge Tree"}],k=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${e}) {
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
    margin-top: 0.5rem
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  nav ol {
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 12.5ch;
    overflow: scroll;

    @media (max-width: ${e}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,x=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${y.map((a)=>`
                <li>
                    <app-link variant="sitemap" href=${a.href} >${a.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;o("footer-nav",{styles:k,template:x});var A=`
  :host {
   display: flex;
    justify-content: space-between;

   @media (max-width: ${e}) {
        flex-direction: column;
        gap: 3rem;
   }
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }
`,H=()=>`
    
      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>

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
`;o("footer-copyright",{styles:A,template:H});var S=`
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

  @media (max-width: ${e}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
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

      <hr>

      <footer-copyright></footer-copyright>
  </footer>
`;o("section-footer",{styles:S,template:O});var P=`
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

  @media (max-width: ${e}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,E=`
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
`;o("section-header",{template:E,styles:P});var _=`
  :host {
    --local-width: 3rem;
    --local-height: auto;

    display: block;
  }

  img {
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([variant="medium"]) {
     --local-width: auto;
    --local-height: 5rem;
  }

  :host([variant="large"]) {
    --local-width: auto;
    --local-height: 10rem;
  }

  :host([variant="creator"]) {
    img {
      min-width: 5rem;
      max-width: 10rem;
      height: 10rem;
      width: auto;
    }
  }


`,$=["src","alt"],N=()=>'<img data-forward width="200" height="200"/>';o("app-icon",{attrs:$,styles:_,template:N});var T=`
    section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        gap: 3rem;

        @media (max-width: ${e}) {
          display: block;
        }
    }

     h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`,C=`
  <section>
      <hgroup>
        <h1>404</h1>
        <p>Sorry. Page not found.</p>
      </hgroup>

      <app-icon
        variant="large"
        src="/assets/icons/bird-with-flower.svg"
        alt="Coming Soon"
      ></app-icon>
  </section>
`;o("section-404-intro",{styles:T,template:C});
