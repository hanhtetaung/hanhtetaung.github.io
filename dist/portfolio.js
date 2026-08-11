function b(s,i){if(s===void 0){if(i===Array)return[];if(i===Object)return{};if(i===Boolean)return!1;if(i===Number)return 0;return}if(i===Boolean)return Boolean(s);if(i===Number)return Number(s);return s}function e(s,{props:i={},attrs:l=[],styles:u="",template:n}){let f=["props",...l];class c extends HTMLElement{static observedAttributes=f;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let a={},t=this.getAttribute("props");if(t)try{a=JSON.parse(t)}catch{a={}}let d={};for(let r of Object.keys(i))d[r]=b(a[r],i[r]);return d}_applyForwardedAttrs(){if(l.length===0)return;let a=this.shadowRoot.querySelector("[data-forward]");if(!a)return;for(let t of l)if(this.hasAttribute(t))a.setAttribute(t,this.getAttribute(t));else a.removeAttribute(t)}_render(){let a=this._getProps(),t=typeof n==="function"?n(a):n;this.shadowRoot.innerHTML=`<style>${u}</style>${t}`,this._applyForwardedAttrs()}}customElements.define(s,c)}var y=`
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
`,w=["href","target","rel","download"],k=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:w,styles:y,template:k});var _=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,x=["width","height","src","alt"],T=()=>"<img data-forward />";e("app-logo",{attrs:x,styles:_,template:T});var o="769px",j="992px";var H=`
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

  @media (max-width: ${o}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,L=`
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
`;e("section-header",{template:L,styles:H});var E=`
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
`,C=()=>`
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
`;e("footer-nav",{styles:E,template:C});var A=`
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

      <p class="footer__copy">
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>
  </footer>
`;e("section-footer",{styles:A,template:P});class p extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="../assets/images/case-study/portfolio/mockup.avif"
                alt="Final Product Screenshot"
                width="1692"
                height="886"
              />
            </div>
            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>Portfolio</h1>
              </div>

              <div class="article__body">
                <p>
                  A personal portfolio website focused on creating a modern,
                  responsive, and minimal experience that showcases projects,
                  skills, and professional identity with clarity and simplicity.
                </p>

                <div>
                  <span class="small--emphasis">Role:</span>
                  <p>Web Designer & Developer</p>
                </div>

                <div>
                  <span class="small--emphasis">Scope: </span>
                  <ul class="article__list">
                    <li>
                      <p>Revamp Website</p>
                    </li>
                    <li>
                      <p>User Reserach</p>
                    </li>
                  </ul>
                </div>

                <a
                  class="button--outline"
                  href="https://hanhtetaung.dev/"
                  target="_blank"
                  >View Live Website</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-portfolio-intro",p);class h extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <div class="section-title">
            <h2>Background</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                This project was created as a personal portfolio website to
                showcase selected projects and experience in a modern,
                responsive, and boutique-style presentation. The goal was to
                create a clean and polished experience with clear structure,
                minimal visuals, and a strong professional presence.
              </p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-portfolio-background",h);class m extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <div class="section-title">
            <h2>Challenge</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                One of the main challenges of the project was designing a visual
                direction that felt modern, minimal, and boutique while still
                maintaining clarity and professionalism. The redesign focused on
                creating a strong visual identity through typography, spacing,
                layout, and overall presentation to build a more polished and
                trustworthy user experience.
              </p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-portfolio-challenge",m);class g extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
        <div class="container">
          <div class="section-title">
            <h2>Process</h2>
          </div>
        </div>

        <ul class="process-list">
          <li class="process-item">
            <span class="heading--emphasis">1</span>
            <h3>Research</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">2</span>
            <h3>Wireframe</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">3</span>
            <h3>Prototype</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">4</span>
            <h3>Develop</h3>
          </li>

          <li class="process-item process-item--last-child">
            <span class="heading--emphasis">5</span>
            <h3>Deliver</h3>
          </li>
        </ul>

        <div class="container">
          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Research</h3>
              </div>

              <div class="article__body">
                <p>
                  Research ideas and visual references to define the overall
                  direction of the website. This stage focused on exploring
                  modern portfolio layouts, typography, spacing, and
                  boutique-style aesthetics to establish a clear visual
                  foundation.
                </p>

                <img
                  src="../assets/images/case-study/portfolio/inspiration.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Wireframe</h3>
              </div>

              <div class="article__body">
                <p>
                  Plan the structure and layout of the website through
                  low-fidelity wireframes. This stage focused on content
                  hierarchy, storytelling flow, and user navigation before
                  moving into visual design.
                </p>

                <img
                  src="../assets/images/case-study/portfolio/wireframe.avif"
                  alt="Wireframe Screenshot"
                  width="1398"
                  height="1366"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Prototype</h3>
              </div>

              <div class="article__body">
                <p>
                  Build the design system and craft the polished visual
                  interface. This stage focused on transforming the wireframes
                  into final responsive designs with complete visual styling,
                  reusable components, refined layouts, and overall user
                  experience.
                </p>

                <figure>
                  <figcaption class="small--emphasis">
                    Design Foundation
                  </figcaption>
                  <img
                    src="../assets/images/case-study/portfolio/design-foundation.avif"
                    alt="Design Foundation Screenshot"
                    width="1474"
                    height="864"
                  />
                </figure>

                <figure>
                  <figcaption class="small--emphasis">Final Design</figcaption>
                  <img
                    src="../assets/images/case-study/portfolio/final-design.avif"
                    alt="Final Design"
                    width="1402"
                    height="1378"
                  />
                </figure>
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Develop & Deliver</h3>
              </div>

              <div class="article__body">
                <p>
                  Translate the approved design into a responsive website while
                  maintaining visual consistency across all screen sizes. The
                  project was managed with GitHub and deployed automatically
                  through GitHub Pages and GitHub Actions.
                </p>

                <div>
                  <p>Hosted on:</p>
                  <a
                    href="https://github.com/hanhtetaung/hanhtetaung.github.io"
                    target="_blank"
                    class="button--link"
                    >hanhtetaung.github.io</a
                  >
                </div>

                <div>
                  <p>Tech Stack</p>
                  <ul class="article__list">
                    <li>
                      <p>HTML5</p>
                    </li>
                    <li><p>CSS3</p></li>
                    <li><p>SCSS</p></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>`}}customElements.define("section-portfolio-process",g);class v extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
        <div class="container">
          <div class="section-title">
            <h2>Result</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                The project resulted in a modern, responsive, and boutique-style
                portfolio website with a stronger visual identity and improved
                user experience. The final website also achieved outstanding
                Google Lighthouse performance with optimized accessibility,
                responsiveness, and loading performance.
              </p>
              <a
                href="https://hanhtetaung.dev/"
                target="_blank"
                class="button--outline"
                >View Live Website &#8599;</a
              >

              <div class="grid-2-col">
                <img
                  src="../assets/images/case-study/portfolio/mockup.avif"
                  alt="Mockup Photo"
                  width="1692"
                  height="886"
                />
                <img
                  src="../assets/images/case-study/portfolio/lighthouse.avif"
                  alt="Lighthouse Photo"
                  width="960"
                  height="1028"
                />
              </div>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-portfolio-result",v);
