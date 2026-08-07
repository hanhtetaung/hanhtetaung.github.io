class e extends HTMLElement{connectedCallback(){this.innerHTML=`<header class="header">
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
    </header>`}}customElements.define("section-header",e);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",i);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h1 class="title">Foundation for Building Interfaces at Scale</h1>
            </div>
            <div class="article__body">
              <p>
                Build systems, not interfaces. A design system is the single
                source of truth for consistent, scalable interfaces.
              </p>

              <p><b>On this page</b></p>

              <ul>
                <li>
                  <a href="#atomic-design-principle" class="button--link"
                    >Atomic design principle
                  </a>
                </li>
                <li>
                  <a href="#design-token-architecture" class="button--link"
                    >Design token architecture</a
                  >
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-foundation-building-interfaces-at-scale-intro",a);class s extends HTMLElement{connectedCallback(){this.innerHTML=`<section id="atomic-design-principle">
        <div class="container">
          <article class="article">
            <h2>Atomic Design Principle</h2>

            <div class="article__body">
              <p>
                Follow Atomic Design principles to create scalable, reusable,
                and maintainable interface building blocks.
              </p>

              <img
                src="/assets/images/foundation-building-software/atomic-design.avif"
                alt=""
              />
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Page</h3>
              </div>
              <div class="article__body">
                <p>
                  A complete interface that composed of multiple organisms.
                  Let’s break down the Strava Activities interface into
                  organisms → molecules → atoms → subatomic particles. <br />For
                  example, the Strava Activities page contains four organisms.
                </p>

                <img
                  src="/assets/images/foundation-building-software/page.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Organism</h3>
              </div>
              <div class="article__body">
                <p>
                  A distinct section of an interface composed of molecules,
                  atoms, subatomic particles or even other organisms. The
                  following diagram shows an organism made up of three
                  molecules, one atom and one other organism.
                </p>

                <img
                  src="/assets/images/foundation-building-software/organisms.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Molecule</h3>
              </div>
              <div class="article__body">
                <p>
                  A simple interface element composed of atoms or subatomic
                  particles as well as other molecules. The example below shows
                  how six atoms combine to form a molecule.
                </p>

                <img
                  src="/assets/images/foundation-building-software/molecule.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Atom</h3>
              </div>
              <div class="article__body">
                <p>
                  A foundational building block of an interface composed of
                  subatomic particles.The illustration below shows an atom
                  composed of three subatomic particles.
                </p>

                <img
                  src="/assets/images/foundation-building-software/atom.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Subatomic particle</h3>
              </div>
              <div class="article__body">
                <p>Smallest unit of the system, represents design token.</p>

                <img
                  src="/assets/images/foundation-building-software/subatomic-particles.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`}}customElements.define("section-atomic-design-principle",s);class t extends HTMLElement{connectedCallback(){this.innerHTML=`<section id="design-token-architecture">
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Design Token Architecture</h2>
            </div>

            <div class="article__body">
              <p>A two-tier architecture is enough: Primitive and Semantic.</p>

              <img
                src="/assets/images/foundation-building-software/token-architecture.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Single Source of Truth</h3>
            </div>
            <div class="article__body">
              <p>
                Use semantic tokens to define all interface building blocks. The
                figma uses slash as separators with all letters lowercase, but
                can be converted to a preferred platform convention like dashes
                or camelCase.
              </p>

              <img
                src="/assets/images/foundation-building-software/single-source-of-truth.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Theming</h3>
            </div>
            <div class="article__body">
              <p>
                A token can point to different value related to mode and when
                the mode changes, the reference values are updated
                automatically.
              </p>

              <img
                src="/assets/images/foundation-building-software/theming.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Token Structure</h3>
            </div>
            <div class="article__body">
              <p>Tokens are named in two parts:</p>

              <ol>
                <li>Base</li>
                <li>Modifier (optional)</li>
              </ol>
              <img
                src="/assets/images/foundation-building-software/token-structure.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Design Token Anatomy</h3>
            </div>
            <div class="article__body">
              <p>
                The diagram below shows how primitive, and semantic tokens
                combine base, and modifier.
              </p>

              <img
                src="/assets/images/foundation-building-software/design-token-anatomy.avif"
                alt="Design Token Anatomy"
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Applying Design Tokens</h3>
            </div>
            <div class="article__body">
              <p>
                Here's an example of how semantic tokens are used throughout a
                strava activities page.
              </p>

              <img
                src="/assets/images/foundation-building-software/applying-token.avif"
                alt="Applying Token photo"
              />
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-design-token-architecture",t);class l extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="reference">
        <div class="container">
          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://atomicdesign.bradfrost.com/chapter-2/"
                target="_blank"
                class="button--link"
                >Atomic Design Principle
              </a>
            </li>
            <li>
              <a
                href="https://playbook.ebay.com/foundations"
                target="_blank"
                class="button--link"
                >ebay Playbook</a
              >
            </li>
            <li>
              <a
                href="https://www.designsystem.tech.gov.sg/foundations/"
                class="button--link"
                target="_blank"
              >
                SGDS Design
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/"
                target="_blank"
                class="button--link"
              >
                Strava
              </a>
            </li>
          </ul>
        </div>
      </section>`}}customElements.define("section-foundation-building-interfaces-at-scale-references",l);
