class s extends HTMLElement{connectedCallback(){this.innerHTML=`<header class="header">
      <div class="container">
        <a href="/">
          <img
            src="/assets/images/logo.avif"
            alt="Han Htet Aung"
            class="logo"
            width="200"
            height="200"
          />
        </a>

        <div class="header__navigation">
          <nav class="nav nav--horizontal">
            <ul>
              <li>
                <a href="/" class="link-drawing"
                  >Home
                  <svg>
                    <use href="assets/sprite.svg#oval-line"></use>
                  </svg>
                </a>
              </li>

              <li>
                <a href="/about" class="link-drawing"
                  >About
                  <svg>
                    <use href="assets/sprite.svg#oval-line"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <a class="button--primary" href="/hire-me">
            Let's chat
            <span>&#8629;</span>
          </a>
        </div>
      </div>
    </header>`}}customElements.define("section-header",s);class e extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__profile">
            <img
              class="logo"
              src="/assets/images/logo.avif"
              alt="Profile Icon"
            />
            <p>
              Thank You <br />
              for Visiting
            </p>
          </div>

          <div class="footer__navigation">
            <div class="foooter__sitemap">
              <span class="body">Sitemap</span>
              <nav class="nav nav--vertical">
                <ul>
                  <li>
                    <a href="/" class="button--link">Home</a>
                  </li>
                  <li>
                    <a href="/about" class="button--link">About</a>
                  </li>

                  <li>
                    <a href="/credits" class="button--link">Credits</a>
                  </li>
                  <li>
                    <a href="/hire-me" class="button--link">Hire me</a>
                  </li>
                  <li>
                    <a href="/thank-you" class="button--link">Thank you</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="footer__social">
              <span class="body">Get in touch:</span>
              <nav class="nav nav--horizontal">
                <ul>
                  <li>
                    <a href="mailto:hanhtetaung.dev@gmail.com">
                      <img
                        src="/assets/icons/email.svg"
                        alt="Email Icon"
                        class="icon--sm"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/hanhtetaung/"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/assets/icons/github.svg"
                        alt="Github Icon"
                        class="icon--sm"
                    /></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/han-htet-aung/"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        src="/assets/icons/linkedin.svg"
                        alt="Linkedin Icon"
                        class="icon--sm"
                    /></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p class="footer__copy">
          © Han Htet Aung 2026 |
          <a class="button--link" href="/credits">Credits</a>
        </p>
      </div>
    </footer>`}}customElements.define("section-footer",e);class a extends HTMLElement{connectedCallback(){this.innerHTML=`  <section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="../assets/images/case-study/skssolar/mockup.avif"
                alt="Final Product Screenshot"
                width="1692"
                height="886"
              />
            </div>
            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>SKS Solar</h1>
              </div>

              <div class="article__body">
                <p>
                  SKS Solar is a solar energy company providing solar products,
                  services, and solutions for homes and businesses across
                  Myanmar.
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
                  </ul>
                </div>

                <a
                  class="button--outline"
                  href="https://skssolarmymyanmar.com/"
                  target="_blank"
                  >View Live Website</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-sks-solar-intro",a);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="case-study__background">
        <div class="container">
          <div class="section-title">
            <h2>Background</h2>
          </div>

          <p>
            This project was created for SKS Solar to redesign and redevelop the
            company’s outdated website into a more professional and modern
            experience. The goal was to create a clean, responsive, and
            trustworthy presentation that showcases the company’s solar
            products, services, and completed projects with simple navigation,
            clear structure, and minimal visuals.
          </p>
        </div>
      </section>`}}customElements.define("section-sks-solar-background",i);class t extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <div class="section-title">
            <h2>Challenge</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                One of the main challenges of the project was creating a visual
                direction that felt modern, clean, and professional while
                maintaining clarity and usability. The redesign focused on
                improving typography, spacing, layout, and overall presentation
                to deliver a more polished and trustworthy user experience.
              </p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-sks-solar-challenge",t);class l extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="case-study__process">
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
                  modern layouts, typography, spacing, and clean visual
                  aesthetics to establish a clear and professional visual
                  foundation.
                </p>

                <img
                  src="../assets/images/case-study/skssolar/inspiration.avif"
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
                  src="../assets/images/case-study/skssolar/wireframe.avif"
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
                    src="../assets/images/case-study/skssolar/design-foundation.avif"
                    alt="Design Foundation Screenshot"
                    width="1474"
                    height="864"
                  />
                </figure>

                <figure>
                  <figcaption class="small--emphasis">Final Design</figcaption>
                  <img
                    src="../assets/images/case-study/skssolar/final-design.avif"
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
                  <p>Tech Stack</p>
                  <ul class="article__list">
                    <li>
                      <p>HTML</p>
                    </li>
                    <li><p>CSS</p></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>`}}customElements.define("section-sks-solar-process",l);class n extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
        <div class="container">
          <div class="section-title">
            <h2>Result</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                The project resulted in a modern, responsive, and professional
                SKS Solar website with a stronger visual identity and improved
                user experience. The final website also achieved outstanding
                Google Lighthouse performance with optimized accessibility,
                responsiveness, and loading performance.
              </p>
              <a
                href="https://skssolarmyMyanmar.com/"
                target="_blank"
                class="button--outline"
                >View Live Website &#8599;</a
              >

              <div class="grid-2-col">
                <img
                  src="../assets/images/case-study/skssolar/mockup.avif"
                  alt="Mockup Photo"
                  width="1692"
                  height="886"
                />
                <img
                  src="../assets/images/case-study/skssolar/lighthouse.avif"
                  alt="Lighthouse Photo"
                  width="960"
                  height="1028"
                />
              </div>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-sks-solar-result",n);
