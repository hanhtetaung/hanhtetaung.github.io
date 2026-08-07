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
    </header>`}}customElements.define("section-header",e);class s extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",s);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-mmo-intro",i);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-mmo-about",a);class t extends HTMLElement{connectedCallback(){this.innerHTML=` <section class="section">
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
      </section>`}}customElements.define("section-voices-from-field",t);class l extends HTMLElement{connectedCallback(){this.innerHTML=` <section class="section">
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
      </section>`}}customElements.define("section-designing-workflow",l);class n extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-mmo-building-interfaces",n);class c extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-mmo-multiple-workflows",c);class r extends HTMLElement{connectedCallback(){this.innerHTML=`<section>
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
      </section>`}}customElements.define("section-mmo-one-design-system",r);class o extends HTMLElement{connectedCallback(){this.innerHTML=` <section>
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
      </section>`}}customElements.define("section-mmo-conclusion",o);
