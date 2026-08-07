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
    </header>`}}customElements.define("section-header",e);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",a);class s extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="hire-me">
    <div class="container">
        <h1>Let's Chat</h1>
        <p>I'd be happy to work with you. I'll get back to you later today.</p>

        <form
        action="https://submit-form.com/elmAjnFC7"
        data-botpoison-public-key="pk_40990b6d-13e8-439a-96f2-680095e68c36"
        class="hire-me__form"
        >
        <input
            type="hidden"
            name="_redirect"
            value="http://hanhtetaung.dev/thank-you"
        />
        <input type="hidden" name="_append" value="false" />

        <div class="hire-me__inputs">
            <input
            class="input input-name"
            type="text"
            name="name"
            placeholder="Name*"
            required
            />
            <input
            class="input input-email"
            type="email"
            name="email"
            placeholder="Email*"
            required
            />

            <textarea
            class="input input-textarea"
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

        <button type="submit" class="button--primary">
            Send &#10166;
        </button>
        <hr />
        <p class="hire-me__email">
            Or hit me up at:
            <a href="mailto:hanhtetaung.dev@gmail.com" class="button--link">
            hanhtetaung.dev@gmail.com
            </a>
        </p>
        </form>
    </div>
    </section>`}}customElements.define("section-hire-me-intro",s);
