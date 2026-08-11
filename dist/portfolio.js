function h(a,i){if(a===void 0){if(i===Array)return[];if(i===Object)return{};if(i===Boolean)return!1;if(i===Number)return 0;return}if(i===Boolean)return Boolean(a);if(i===Number)return Number(a);return a}function e(a,{props:i={},attrs:n=[],styles:d="",template:l}){let m=["props",...n];class p extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let o={},r=this.getAttribute("props");if(r)try{o=JSON.parse(r)}catch{o={}}let c={};for(let s of Object.keys(i))c[s]=h(o[s],i[s]);return c}_applyForwardedAttrs(){if(n.length===0)return;let o=this.shadowRoot.querySelector("[data-forward]");if(!o)return;for(let r of n)if(this.hasAttribute(r))o.setAttribute(r,this.getAttribute(r));else o.removeAttribute(r)}_render(){let o=this._getProps(),r=typeof l==="function"?l(o):l;this.shadowRoot.innerHTML=`<style>${d}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(a,p)}var g=`
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
`,y=["width","height","src","alt"],b=()=>"<img data-forward />";e("app-logo",{attrs:y,styles:v,template:b});var t="769px",K="992px";var w=`
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

        <app-link variant="primary" href="/hire-me">
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
`;e("footer-nav",{styles:x,template:A});var H=`
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
`,P=`
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
`;e("section-footer",{styles:H,template:P});var _=`
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
`,E=["width","height","src","alt"],O=()=>"<img data-forward />";e("app-image",{attrs:E,styles:_,template:O});var S=`
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

    @media (max-width: ${t}) {
      flex-direction: column;
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
`,T=`
  <section>
      <app-image
        variant="medium"
        src="/assets/images/case-study/portfolio/mockup.avif"
        alt="Final Product Screenshot"
        width="1692"
        height="886"
      ></app-image>

      <article>
        <span>Case Study</span>
        <h1>Portfolio</h1>

        <p>
          A personal portfolio website focused on creating a modern,
          responsive, and minimal experience that showcases projects,
          skills, and professional identity with clarity and simplicity.
        </p>

        <span>Role: </span>
        <p>Web Designer & Developer</p>

          <span>Scope:</span>
          <p>Idea → Website</p>

        <app-link variant="secondary" href="https://hanhtetaung.dev/" target="_blank">
          View Live Website
        </app-link>
      </article>
  </section>
`;e("section-portfolio-intro",{styles:S,template:T});var $=`
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
`,z={name:String,img:String,alt:String},L=({name:a,img:i="",alt:n=""})=>`
    <h2>${a}</h2>
    <img
        src=${i}
        alt=${n}
        height="36"
        width="76"
    />
`;e("section-title",{props:z,styles:$,template:L});var N=`
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
      This project was created as a personal portfolio website to showcase
      selected projects and experience in a modern, responsive, and
      boutique-style presentation. The goal was to create a clean and
      polished experience with clear structure, minimal visuals, and a
      strong professional presence.
    </p>
  </section>
`;e("section-portfolio-background",{styles:N,template:j});var C=`
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
      One of the main challenges of the project was designing a visual
      direction that felt modern, minimal, and boutique while still
      maintaining clarity and professionalism. The redesign focused on
      creating a strong visual identity through typography, spacing,
      layout, and overall presentation to build a more polished and
      trustworthy user experience.
    </p>
  </section>
`;e("section-portfolio-challenge",{styles:C,template:B});var W=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${t}) {
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
`,q={title:String},I=({title:a})=>`
        <h3>${a}</h3>

        <article>
            <slot></slot>
        </article>
`;e("app-article-paragraph",{props:q,styles:W,template:I});var R=`
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
        <app-article-paragraph props='{ "title": "Research"}'>
          <p>
            Research ideas and visual references to define the overall direction
            of the website. This stage focused on exploring modern portfolio
            layouts, typography, spacing, and boutique-style aesthetics to
            establish a clear visual foundation.
          </p>
          
          <app-image
            variant="medium"
            src="/assets/images/case-study/portfolio/inspiration.avif"
            alt="Inspiration Collection"
            width="1398"
            height="1236"
          ></app-image>
      </app-article-paragraph>
      </li>


      <li>
        <app-article-paragraph props='{ "title": "Wireframe"}'>
          <p>
            Plan the structure and layout of the website through low-fidelity
            wireframes. This stage focused on content hierarchy, storytelling
            flow, and user navigation before moving into visual design.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/portfolio/wireframe.avif"
            alt="Wireframe Screenshot"
            width="1398"
            height="1366"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Prototype"}'>
          <p>
            Build the design system and craft the polished visual interface.
            This stage focused on transforming the wireframes into final
            responsive designs with complete visual styling, reusable
            components, refined layouts, and overall user experience.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/portfolio/design-foundation.avif"
            alt="Design Foundation Screenshot"
            width="1474"
            height="864"
          ></app-image>
          <app-image
            variant="medium"
            src="/assets/images/case-study/portfolio/final-design.avif"
            alt="Final Design"
            width="1402"
            height="1378"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Develop & Deliver"}'>
          <p>
            Translate the approved design into a responsive website while
            maintaining visual consistency across all screen sizes. The project
            was managed with GitHub and deployed automatically through GitHub
            Pages and GitHub Actions.
          </p>

          <p><b>Hosted on:</b>
            <app-link variant="underline" href="https://github.com/hanhtetaung/hanhtetaung.github.io" target="_blank" variant="button">
              hanhtetaung.github.io
            </app-link>
          </p>

          <p><b>Tech Stack</b></p>
          <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
          </ol>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;e("section-portfolio-process",{styles:R,template:D});var F=`
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

    @media (max-width: ${t}) {
      flex-direction: column;
    }
  }
`,G=`
  <section>
    <section-title variant="text" props='{"name": "Result"}'></section-title>

    <p>
      The project resulted in a modern, responsive, and boutique-style
      portfolio website with a stronger visual identity and improved user
      experience. The final website also achieved outstanding Google
      Lighthouse performance with optimized accessibility, responsiveness,
      and loading performance.
    </p>

    <app-link variant="secondary" href="https://hanhtetaung.dev/" target="_blank">
      View Live Website
    </app-link>

    <ul>
      <li>
        <app-image
          variant="medium"
          src="/assets/images/case-study/portfolio/lighthouse.avif"
          alt="Lighthouse Photo"
          width="960"
          height="1028"
        ></app-image>
      </li>

       <li>
        <app-image
          variant="medium"
          src="/assets/images/case-study/portfolio/mockup.avif"
          alt="Mockup Photo"
          width="1692"
          height="886"
        ></app-image>
      </li>
    </ul>
  </section>
`;e("section-portfolio-result",{styles:F,template:G});
