function f(a,r){if(a===void 0){if(r===Array)return[];if(r===Object)return{};if(r===Boolean)return!1;if(r===Number)return 0;return}if(r===Boolean)return Boolean(a);if(r===Number)return Number(a);return a}function e(a,{props:r={},attrs:n=[],styles:c="",template:l}){let d=["props",...n];class p extends HTMLElement{static observedAttributes=d;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let t={},i=this.getAttribute("props");if(i)try{t=JSON.parse(i)}catch{t={}}let m={};for(let s of Object.keys(r))m[s]=f(t[s],r[s]);return m}_applyForwardedAttrs(){if(n.length===0)return;let t=this.shadowRoot.querySelector("[data-forward]");if(!t)return;for(let i of n)if(this.hasAttribute(i))t.setAttribute(i,this.getAttribute(i));else t.removeAttribute(i)}_render(){let t=this._getProps(),i=typeof l==="function"?l(t):l;this.shadowRoot.innerHTML=`<style>${c}</style>${i}`,this._applyForwardedAttrs()}}customElements.define(a,p)}var h=`
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
`,g=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:g,styles:h,template:u});var b=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,v=["width","height","src","alt"],y=()=>"<img data-forward />";e("app-logo",{attrs:v,styles:b,template:y});var o="769px",L="992px";var k=`
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

    @media (max-width: ${o}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,H=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${x.map((a)=>`
                <li>
                    <app-link variant="sitemap" href=${a.href} >${a.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;e("footer-nav",{styles:A,template:H});var O=`
  :host {
   display: flex;
    justify-content: space-between;

   @media (max-width: ${o}) {
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
`,S=()=>`
    
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
`;e("footer-copyright",{styles:O,template:S});var _=`
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

  @media (max-width: ${o}) {
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
`,E=`
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
`;e("section-footer",{styles:_,template:E});var N=`
  :host {
    --local-bg: var(--color-primary);
    --local-color: var(--color-bg-primary);
    --local-border: 1px solid var(--color-text);
    --local-padding: 1rem 2rem;

    display: block;
    padding: 0;
    width: fit-content;
    
  }

  button {
    display: block;
    gap: 0.5rem;
    font-size: var(--size-body);
    font-family: var(--font-body);
    justify-content: center;
    background: var(--local-bg);
    color: var(--local-color);
    border: var(--local-border);
    /* border: none; */
    padding: var(--local-padding);
  }
`,C=["type"],P=`
  <button
    data-forward
    onclick="const form = this.getRootNode().host.closest('form'); if (this.type === 'submit' && form) { form.requestSubmit ? form.requestSubmit() : form.submit(); }"
  >
    <slot></slot>
  </button>
`;e("app-button",{attrs:C,styles:N,template:P});var T=`
    section {
        margin-inline: auto;
        width: 80%;
    }

     h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
  }

  input, textarea {
    border: none;
    padding: 1rem 1.5rem;
    font-size: var(--size-header);
    font-family: var(--font-body);
  }

  ul {
    padding: 0;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: grid;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    grid-template-areas: 
    "one two"
    "three three"
     "three three";

    @media (max-width: ${o}) {
     display: flex;
     flex-wrap: wrap;   
    }
  }

  textarea {
    grid-area: three;
  }
`,$=`
  <section>
      <h1>Let's Chat</h1>
      <p>I'd be happy to work with you. I'll get back to you later today.</p>

      <form
        action="https://submit-form.com/elmAjnFC7"
        data-botpoison-public-key="pk_40990b6d-13e8-439a-96f2-680095e68c36"
      >
        <input
          type="hidden"
          name="_redirect"
          value="http://hanhtetaung.dev/thank-you"
        />
        <input type="hidden" name="_append" value="false" />

        <ul>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
  
            <textarea
              name="message"
              placeholder="Message*"
              required=""
            ></textarea>
        </ul>

        <div
          class="cf-turnstile"
          data-sitekey="0x4AAAAAADTCi7AhwZfhOau6"
          data-size="flexible"
        ></div>

        <app-button type="submit">
          Send &#10166;
        </app-button>

        
        <hr />

        <p>
          Or hit me up at:
          <app-link variant="underline" href="mailto:hanhtetaung.dev@gmail.com">
            hanhtetaung.dev@gmail.com
          </app-link>
        </p>
      </form>
  </section>
`;e("section-hire-me-intro",{styles:T,template:$});
