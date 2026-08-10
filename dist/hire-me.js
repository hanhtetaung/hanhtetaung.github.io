function f(i,e){if(i===void 0){if(e===Array)return[];if(e===Object)return{};if(e===Boolean)return!1;if(e===Number)return 0;return""}if(e===Boolean)return Boolean(i);if(e===Number)return Number(i);return i}function a(i,{props:e={},attrs:n=[],styles:d="",template:l}){let m=["props",...n];class p extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let o={},t=this.getAttribute("props");if(t)try{o=JSON.parse(t)}catch{o={}}let c={};for(let s of Object.keys(e))c[s]=f(o[s],e[s]);return c}_applyForwardedAttrs(){if(n.length===0)return;let o=this.shadowRoot.querySelector("[data-forward]");if(!o)return;for(let t of n)if(this.hasAttribute(t))o.setAttribute(t,this.getAttribute(t));else o.removeAttribute(t)}_render(){let o=this._getProps(),t=typeof l==="function"?l(o):l;this.shadowRoot.innerHTML=`<style>${d}</style>${t}`,this._applyForwardedAttrs()}}customElements.define(i,p)}var h=`
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
`,g=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;a("app-link",{attrs:g,styles:h,template:u});var b=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,v=["width","height","src","alt"],y=()=>"<img data-forward />";a("app-logo",{attrs:v,styles:b,template:y});var r="769px",T="992px";var k=`
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
    gap: 2rem;
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
`,x=`
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
`;a("section-header",{template:x,styles:k});var w=`
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
`;a("footer-nav",{styles:w,template:A});var _=`
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

      <p class="footer__copy">
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>
  </footer>
`;a("section-footer",{styles:_,template:H});var E=`
  :host {
    --local-bg: var(--color-primary);
    --local-color: var(--color-bg-primary);
    --local-border: 1px solid var(--color-secondary);
    --local-padding: 1rem 2rem;

    display: block;
    padding: 0;
    
  }

  button {
    display: inline-flex;
    gap: 0.5rem;
    font-size: var(--size-body);
    font-family: var(--font-body);
    justify-content: center;
    background: var(--local-bg);
    color: var(--local-color);
    border: var(--local-border);
    padding: var(--local-padding);
  }
`,N=["type"],O=`
  <button
    data-forward
    onclick="const form = this.getRootNode().host.closest('form'); if (this.type === 'submit' && form) { form.requestSubmit ? form.requestSubmit() : form.submit(); }"
  >
    <slot></slot>
  </button>
`;a("app-button",{attrs:N,styles:E,template:O});var C=`
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

  .grid {
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

    @media (max-width: ${r}) {
     display: flex;
     flex-wrap: wrap;   
    }
  }

  textarea {
    grid-area: three;
  }
`,z=`
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

        <div class="grid">
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
        </div>

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
`;a("section-hire-me-intro",{styles:C,template:z});
