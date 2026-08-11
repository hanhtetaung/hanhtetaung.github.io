function h(i,t){if(i===void 0){if(t===Array)return[];if(t===Object)return{};if(t===Boolean)return!1;if(t===Number)return 0;return}if(t===Boolean)return Boolean(i);if(t===Number)return Number(i);return i}function e(i,{props:t={},attrs:r=[],styles:d="",template:l}){let m=["props",...r];class c extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let o={},n=this.getAttribute("props");if(n)try{o=JSON.parse(n)}catch{o={}}let p={};for(let s of Object.keys(t))p[s]=h(o[s],t[s]);return p}_applyForwardedAttrs(){if(r.length===0)return;let o=this.shadowRoot.querySelector("[data-forward]");if(!o)return;for(let n of r)if(this.hasAttribute(n))o.setAttribute(n,this.getAttribute(n));else o.removeAttribute(n)}_render(){let o=this._getProps(),n=typeof l==="function"?l(o):l;this.shadowRoot.innerHTML=`<style>${d}</style>${n}`,this._applyForwardedAttrs()}}customElements.define(i,c)}var f=`
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
`;e("app-link",{attrs:g,styles:f,template:u});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,y=["width","height","src","alt"],b=()=>"<img data-forward />";e("app-logo",{attrs:y,styles:v,template:b});var a="769px",ee="992px";var w=`
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

  @media (max-width: ${a}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,k=`
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
`;e("section-header",{template:k,styles:w});var x=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${a}) {
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
`,S=()=>`
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
`;e("footer-nav",{styles:x,template:S});var A=`
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

  @media (max-width: ${a}) {
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
`;e("section-footer",{styles:A,template:H});var z=`
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
`,O=["width","height","src","alt"],P=()=>"<img data-forward />";e("app-image",{attrs:O,styles:z,template:P});var E=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: ${a}) {
      flex-direction: column;
    }
  }


    span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
  }
`,_=`
  <section>
    <app-image
    variant="large"
    src="/assets/images/case-study/mmo/thumbnail.avif"
    alt="MMO thumbnail"
    width="1692"
    height="886"
    ></app-image>
    
    <article>
      <span>Case Study</span>
      <h1>MMO</h1>

      <p>
        An internal portal that uses to run daily operations in
        hospital.
      </p>

        <span>Role:</span>
        <p>UX Designer</p>

        <span>Scope: </span>
        <ul>
          <li>Gather requirements</li>
          <li>Simplify complex workflows</li>
          <li>Build Prototype</li>
          <li>Design System</li>
          <li>Developer Handoff</li>
        </ul>
      </article>
  </section>
`;e("section-mmo-intro",{styles:E,template:_});var B=`
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
`,$={name:String,img:String,alt:String},C=({name:i,img:t="",alt:r=""})=>`
    <h2>${i}</h2>
    <img
        src=${t}
        alt=${r}
        height="36"
        width="76"
    />
`;e("section-title",{props:$,styles:B,template:C});var N=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }
`,R=`
  <section>
    <section-title
        variant="text"
        props='{"name": "About the Business"}'
      ></section-title>

      <article>
          <p>
            MMO hospital is a private hospital. With over 50 staff including
            doctors, nurse, pharmacist, it provides outpatient and inpatient
            care, emergency services, pharmacy services, and medicine
            inventory management.
          </p>
      </article>
  </section>
`;e("section-mmo-about",{styles:N,template:R});var W=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
`,I=`
  <section>

  <section-title
        variant="text"
        props='{"name": "Voices from the field"}'
      ></section-title>

        <ul>
          <li>
            “It takes days to prepare monthly sales and inventory
            reports.” -
            <span> Business owner </span>
          </li>
          <li>
            “Patient registration takes too many steps.” -
            <span> Front desk staff </span>
          </li>
          <li>
            "I need an activity history for every transaction." -
            <span> Business owner </span>
          </li>
          <li>
            “I hate searching for medicines every time.” -
            <span> Pharmacist </span>
          </li>
          <li>
            “It's difficult to trace who adjusted stock.” -
            <span> Warehouse staff </span>
          </li>
          <li>
            “I want different permissions for different roles.” -
            <span> Business owner </span>
          </li>
        </ul>
  </section>
`;e("section-mmo-voices-from-field",{styles:W,template:I});var M=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h3, p {
    margin: 0;
  }

  h3 {
    margin-bottom: 1rem;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

   ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
     display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article {
    margin-bottom: 5rem;
  }
`,T=`
  <section>
    <section-title
        variant="text"
        props='{"name": "Designing Workflow"}'
      ></section-title>



      <article>
          <h3>Select similar key insights</h3>
          <ul>
            <li>
              “We sell medicines and medical supplies to patients every
              day.” -
              <span> Business owner </span>
            </li>
            <li>
              "Staff need to check stock before completing a sale." -
              <span> Pharmacist </span>
            </li>
            <li>
              "Patients expect a fast checkout with minimal waiting." -
              <span> Front desk Staff </span>
            </li>
            <li>
              "Every transaction must be recorded for billing and
              auditing." -
              <span> Finance manager </span>
            </li>
            <li>
              "We need to track who sold each item and when." -
              <span> Business owner </span>
            </li>
          </ul>
      </article>

      <article>
          <h3>Sell Medical items</h3>

          <p>
            Start → Scan item barcode → Review total → Receive payment →
            Return Changes → Complete
          </p>
      </article>

      <article>
        <div>
          <h3>Edge case</h3>
        </div>

        <ul>
          <li>What if the cashier doesn’t have inficient cash?</li>
          <li>What if the printer is not working?</li>
          <li>What if the barcode scanner is not working?</li>
        </ul>
      </article>
  </section>
`;e("section-mmo-designing-workflow",{styles:M,template:T});var L=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${a}) {
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
`,j={title:String},D=({title:i})=>`
        <h3>${i}</h3>

        <article>
            <slot></slot>
        </article>
`;e("app-article-paragraph",{props:j,styles:L,template:D});var F=`
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
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }
`,G=`
  <section>
    <section-title
      variant="text"
      props='{"name": "Building Interfaces for selling medical items workflow"}'
    ></section-title>

    <p>
      To complete the primary workflow, four interfaces are needed at first.
    </p>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "1st interface" }'>
          <p>
            Start sale, review current staff, review printer status, and
            barcode status. Clicking start sale creates a new unique ID and
            redirects to the next screen with this ID.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/1st-stage.avif"
            alt="First interface preview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "2nd interface" }'>
          <p>
            Scan a barcode item, enter a manual barcode item, review total,
            review items scanned, enter cash received, and confirm payment.
            Confirming payment leads to the 3rd interface.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/2nd-stage.avif"
            alt="Second interface preview"
            width="1398"
            height="1366"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "3rd interface" }'>
          <p>
            Review changes, review the receipt printed, and complete the sale
            by printing the receipt. It then moves to the final step.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/3rd-stage.avif"
            alt="Third interface preview"
            width="1474"
            height="864"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Final one" }'>
          <p>Show the completed sale and provide options to go back home or start the next sale.</p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/final-stage.avif"
            alt="Final interface preview"
            width="1474"
            height="864"
          ></app-image>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;e("section-mmo-building-interfaces",{styles:F,template:G});var q=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;

    display: flex;
    flex-direction: column;
  }
`,V=`
  <section>

  <section-title
        variant="text"
        props='{"name": "100+ workflows in the system"}'
      ></section-title>

        <ul>
          <li>Register new employee</li>
          <li>Generate Inventory Report</li>
          <li>Request items from warehouse</li>
        </ul>
  </section>
`;e("section-mmo-multiple-workflows",{styles:q,template:V});var K=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }
`,J=`
  <section>
    <section-title
        variant="text"
        props='{"name": "One Design System, 100+ Workflows"}'
      ></section-title>

      <article>
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

          <app-link variant="underline" href="/foundation-building-interfaces-at-scale">Read the article</app-link>
      </article>
  </section>
`;e("section-mmo-one-design-system",{styles:K,template:J});var U=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
  }
`,X=`
  <section>
    <section-title
      variant="text"
      props='{"name": "Keep Listening to the Voices"}'
    ></section-title>

    <p>The system continues to grow as users' needs change.</p>
  </section>
`;e("section-mmo-conclusion",{styles:U,template:X});
