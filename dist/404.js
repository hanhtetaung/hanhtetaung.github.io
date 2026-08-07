class s extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",s);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<header class="header">
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
    </header>`}}customElements.define("section-header",a);class e extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="page-not-found">
        <div class="container">
          <hgroup>
            <h1>404</h1>
            <p>Sorry. Page not found.</p>
          </hgroup>
          <img
            src="/assets/icons/bird-with-flower.svg"
            class="icon--lg"
            alt="Coming Soon"
          />
        </div>
      </section>`}}customElements.define("section-404-intro",e);
