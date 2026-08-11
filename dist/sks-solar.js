function h(a,t){if(a===void 0){if(t===Array)return[];if(t===Object)return{};if(t===Boolean)return!1;if(t===Number)return 0;return}if(t===Boolean)return Boolean(a);if(t===Number)return Number(a);return a}function e(a,{props:t={},attrs:n=[],styles:d="",template:l}){let m=["props",...n];class p extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let o={},r=this.getAttribute("props");if(r)try{o=JSON.parse(r)}catch{o={}}let c={};for(let s of Object.keys(t))c[s]=h(o[s],t[s]);return c}_applyForwardedAttrs(){if(n.length===0)return;let o=this.shadowRoot.querySelector("[data-forward]");if(!o)return;for(let r of n)if(this.hasAttribute(r))o.setAttribute(r,this.getAttribute(r));else o.removeAttribute(r)}_render(){let o=this._getProps(),r=typeof l==="function"?l(o):l;this.shadowRoot.innerHTML=`<style>${d}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(a,p)}var g=`
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
`;e("app-link",{attrs:f,styles:g,template:u});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,y=["width","height","src","alt"],b=()=>"<img data-forward />";e("app-logo",{attrs:y,styles:v,template:b});var i="769px",J="992px";var w=`
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

  @media (max-width: ${i}) {
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

   @media (max-width: ${i}) {
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
`;e("footer-nav",{styles:x,template:S});var _=`
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

  @media (max-width: ${i}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`,A=`
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
`;e("section-footer",{styles:_,template:A});var H=`
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
`,P=["width","height","src","alt"],T=()=>"<img data-forward />";e("app-image",{attrs:P,styles:H,template:T});var z=`
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

  article {
    max-width: 40ch;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
`,E=`
  <section>
    <app-image
      variant="medium"
      src="/assets/images/case-study/skssolar/mockup.avif"
      alt="Final Product Screenshot"
      width="1692"
      height="886"
    ></app-image>

    <article>
      <span>Case Study</span>
      <h1>SKS Solar</h1>

      <p>
        SKS Solar is a solar energy company providing solar products,
        services, and solutions for homes and businesses across Myanmar.
      </p>

      <span>Role: </span>
      <p>Web Designer & Developer</p>

      <span>Scope:</span>
      <p>Revamp Website</p>

      <app-link variant="secondary" href="https://skssolarmymyanmar.com/" target="_blank">
        View Live Website
      </app-link>
    </article>
  </section>
`;e("section-sks-solar-intro",{styles:z,template:E});var L=`
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
`,O={name:String,img:String,alt:String},$=({name:a,img:t="",alt:n=""})=>`
    <h2>${a}</h2>
    <img
        src=${t}
        alt=${n}
        height="36"
        width="76"
    />
`;e("section-title",{props:O,styles:L,template:$});var N=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }
`,j=`
  <section>
    <section-title variant="text" props='{"name": "Background"}'></section-title>

    <p>
      This project was created for SKS Solar to redesign and redevelop the
      company’s outdated website into a more professional and modern
      experience. The goal was to create a clean, responsive, and
      trustworthy presentation that showcases the company’s solar
      products, services, and completed projects with simple navigation,
      clear structure, and minimal visuals.
    </p>
  </section>
`;e("section-sks-solar-background",{styles:N,template:j});var C=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }
`,B=`
  <section>
    <section-title variant="text" props='{"name": "Challenge"}'></section-title>

    <p>
      One of the main challenges of the project was creating a visual
      direction that felt modern, clean, and professional while
      maintaining clarity and usability. The redesign focused on
      improving typography, spacing, layout, and overall presentation
      to deliver a more polished and trustworthy user experience.
    </p>
  </section>
`;e("section-sks-solar-challenge",{styles:C,template:B});var K=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${i}) {
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
`,R={title:String},W=({title:a})=>`
        <h3>${a}</h3>

        <article>
            <slot></slot>
        </article>
`;e("app-article-paragraph",{props:R,styles:K,template:W});var M=`
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

  ol {
    list-style: disc;
  }
`,D=`
  <section>
    <section-title variant="text" props='{"name": "Process"}'></section-title>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "Research" }'>
          <p>
            Research ideas and visual references to define the overall
            direction of the website. This stage focused on exploring modern
            layouts, typography, spacing, and clean visual aesthetics to
            establish a clear and professional visual foundation.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/inspiration.avif"
            alt="Inspiration Collection"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Wireframe" }'>
          <p>
            Plan the structure and layout of the website through low-fidelity
            wireframes. This stage focused on content hierarchy, storytelling
            flow, and user navigation before moving into visual design.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/wireframe.avif"
            alt="Wireframe Screenshot"
            width="1398"
            height="1366"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Prototype" }'>
          <p>
            Build the design system and craft the polished visual interface.
            This stage focused on transforming the wireframes into final
            responsive designs with complete visual styling, reusable
            components, refined layouts, and overall user experience.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/design-foundation.avif"
            alt="Design Foundation Screenshot"
            width="1474"
            height="864"
          ></app-image>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/final-design.avif"
            alt="Final Design"
            width="1402"
            height="1378"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Develop & Deliver" }'>
          <p>
            Translate the approved design into a responsive website while
            maintaining visual consistency across all screen sizes. The
            project was managed with GitHub and deployed automatically through
            GitHub Pages and GitHub Actions.
          </p>

          <p><b>Tech Stack</b></p>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
          </ol>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;e("section-sks-solar-process",{styles:M,template:D});var F=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    gap: 3rem;

    @media (max-width: ${i}) {
      flex-direction: column;
    }
  }
`,G=`
  <section>
    <section-title variant="text" props='{"name": "Result"}'></section-title>

    <p>
      The project resulted in a modern, responsive, and professional SKS
      Solar website with a stronger visual identity and improved user
      experience. The final website also achieved outstanding Google
      Lighthouse performance with optimized accessibility, responsiveness,
      and loading performance.
    </p>

    <app-link variant="secondary" href="https://skssolarmymyanmar.com/" target="_blank">
      View Live Website
    </app-link>

    <ul>
      <li>
        <app-image
          variant="medium"
          src="/assets/images/case-study/skssolar/lighthouse.avif"
          alt="Lighthouse Photo"
          width="960"
          height="1028"
        ></app-image>
      </li>

       <li>
        <app-image
          variant="medium"
          src="/assets/images/case-study/skssolar/mockup.avif"
          alt="Mockup Photo"
          width="1692"
          height="886"
        ></app-image>
      </li>
    </ul>
  </section>
`;e("section-sks-solar-result",{styles:F,template:G});
