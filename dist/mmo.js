function w(s,a){if(s===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return""}if(a===Boolean)return Boolean(s);if(a===Number)return Number(s);return s}function e(s,{props:a={},attrs:r=[],styles:y="",template:n}){let k=["props",...r];class c extends HTMLElement{static observedAttributes=k;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},t=this.getAttribute("props");if(t)try{i=JSON.parse(t)}catch{i={}}let d={};for(let o of Object.keys(a))d[o]=w(i[o],a[o]);return d}_applyForwardedAttrs(){if(r.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let t of r)if(this.hasAttribute(t))i.setAttribute(t,this.getAttribute(t));else i.removeAttribute(t)}_render(){let i=this._getProps(),t=typeof n==="function"?n(i):n;this.shadowRoot.innerHTML=`<style>${y}</style>${t}`,this._applyForwardedAttrs()}}customElements.define(s,c)}var _=`
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
`,x=["href","target","rel","download"],H=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:x,styles:_,template:H});var E=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,T=["width","height","src","alt"],M=()=>"<img data-forward />";e("app-logo",{attrs:T,styles:E,template:M});var l="769px",W="992px";var L=`
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

  @media (max-width: ${l}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,S=`
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
`;e("section-header",{template:S,styles:L});var C=`
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
`;e("footer-nav",{styles:C,template:A});var R=`
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
`,B=`
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
`;e("section-footer",{styles:R,template:B});class p extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="/assets/images/case-study/mmo/thumbnail.avif"
                alt="MMO thumbnail"
                class="image"
                width="1692"
                height="886"
              />
            </div>

            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>MMO</h1>
              </div>

              <div class="article__body">
                <p>
                  An internal portal that uses to run daily operations in
                  hospital.
                </p>

                <div>
                  <span class="small--emphasis">Role:</span>
                  <p>UX Designer</p>
                </div>

                <div>
                  <span class="small--emphasis">Scope: </span>
                  <ul class="article__list">
                    <li>
                      <p>Gather requirements</p>
                    </li>
                    <li>
                      <p>Simplify complex workflows</p>
                    </li>
                    <li>
                      <p>Build Prototype</p>
                    </li>
                    <li>
                      <p>Design System</p>
                    </li>
                    <li>
                      <p>Developer Handoff</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-intro",p);class m extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>About the Business</h2>
            </div>

            <div class="article__body">
              <p>
                MMO hospital is a private hospital. With over 50 staff including
                doctors, nurse, pharmacist, it provides outpatient and inpatient
                care, emergency services, pharmacy services, and medicine
                inventory management.
              </p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-about",m);class h extends HTMLElement{connectedCallback(){this.innerHTML=` <section class="section">
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Voices from the field</h2>
            </div>

            <ul class="article__list">
              <li>
                <p>
                  “It takes days to prepare monthly sales and inventory
                  reports.” -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
              <li>
                <p>
                  “Patient registration takes too many steps.” -
                  <span class="small--emphasis"> Front desk staff </span>
                </p>
              </li>
              <li>
                <p>
                  "I need an activity history for every transaction." -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
              <li>
                <p>
                  “I hate searching for medicines every time.” -
                  <span class="small--emphasis"> Pharmacist </span>
                </p>
              </li>
              <li>
                <p>
                  “It's difficult to trace who adjusted stock.” -
                  <span class="small--emphasis"> Warehouse staff </span>
                </p>
              </li>
              <li>
                <p>
                  “I want different permissions for different roles.” -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-voices-from-field",h);class v extends HTMLElement{connectedCallback(){this.innerHTML=` <section class="section">
        <div class="container">
          <h2>Designing workflow</h2>

          <article class="article">
            <div class="article__header">
              <h3>Select similar key insights</h3>
            </div>

            <div class="article__body">
              <ul class="article__list">
                <li>
                  <p>
                    “We sell medicines and medical supplies to patients every
                    day.” -
                    <span class="small--emphasis"> Business owner </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Staff need to check stock before completing a sale." -
                    <span class="small--emphasis"> Pharmacist </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Patients expect a fast checkout with minimal waiting." -
                    <span class="small--emphasis"> Front desk Staff </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Every transaction must be recorded for billing and
                    auditing." -
                    <span class="small--emphasis"> Finance manager </span>
                  </p>
                </li>
                <li>
                  <p>
                    "We need to track who sold each item and when." -
                    <span class="small--emphasis"> Business owner </span>
                  </p>
                </li>
              </ul>
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Sell Medical items</h3>
            </div>

            <div class="article__body">
              <p>
                Start → Scan item barcode → Review total → Receive payment →
                Return Changes → Complete
              </p>
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Edge case</h3>
            </div>

            <ul class="article__list">
              <li>
                <p>What if the cashier doesn’t have inficient cash?</p>
              </li>
              <li>
                <p>What if the printer is not working?</p>
              </li>
              <li>
                <p>What if the barcode scanner is not working?</p>
              </li>
            </ul>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-designing-workflow",v);class f extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <div class="section-title">
            <h2>Building Interfaces for selling medical items workflow</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                To complete the pirmary workflow, four interfaces are needed at
                first.
              </p>
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>1st interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Start sale, Review current staff. Review printer status,
                  barcode status. Clicking start sale create new unique id and
                  redirect to next screen with this id.
                </p>

                <img
                  src="/assets/images/case-study/mmo/1st-stage.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>2nd interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Scan barcode item, enter manual barcode item, review total,
                  items scanned, review total, enter cash received, confirm
                  payment. Confirm payment go to 3rd interface.
                </p>

                <img
                  src="/assets/images/case-study/mmo/2nd-stage.avif"
                  alt="Wireframe Screenshot"
                  width="1398"
                  height="1366"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>3rd interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Review changes, review the receipt printed, Complete sale →
                  print receipt. it go to final one.
                </p>

                <img
                  src="/assets/images/case-study/mmo/3rd-stage.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>final one</h3>
              </div>

              <div class="article__body">
                <p>Show complete sale, Go back to home or Next Sale.</p>
                <img
                  src="/assets/images/case-study/mmo/final-stage.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`}}customElements.define("section-mmo-building-interfaces",f);class g extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>100+ workflows in the system</h2>
            </div>

            <ul class="article__list">
              <li>
                <p>Register new employee</p>
              </li>
              <li>
                <p>Generate Inventory Report</p>
              </li>
              <li>
                <p>Request items from warehouse</p>
              </li>
            </ul>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-multiple-workflows",g);class u extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>One Design System, 100+ Workflows</h2>
            </div>

            <div class="article__body">
              <p>
                A design system keeps interfaces consistent, reusable, and
                easier to scale as the product grows to 100+ workflows. For
                example, the same button, input, table, and form patterns are
                reused across patient registration, inventory, and reporting
                instead of being redesigned for each workflow.
              </p>

              <p>
                The foundations behind my design approach for scalable
                interfaces.
              </p>

              <a
                href="/foundation-building-interfaces-at-scale"
                class="button--link"
                >Read the article</a
              >
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-one-design-system",u);class b extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Keep Listening the voices</h2>
            </div>

            <div class="article__body">
              <p>The system continues to grow as users' needs change.</p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-mmo-conclusion",b);
