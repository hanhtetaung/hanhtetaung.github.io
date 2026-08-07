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
    </header>`}}customElements.define("section-header",e);class t extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",t);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="about">
        <div class="container">
          <h1>About</h1>
          <article class="article">
            <img
              class="logo"
              src="assets/images/about-profile.avif"
              alt="profile"
              height="162"
              width="169"
            />

            <div class="article__body">
              <p>
                I'm Han Htet Aung, an UX Engineer who loves creating unique
                experiences on the web.
              </p>

              <p>I see patterns in chaos.</p>
            </div>
          </article>
        </div>
      </section>`}}customElements.define("section-about-intro",i);class s extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="tech-collection">
        <div class="container">
          <div class="section-title">
            <h2>Tech Collection</h2>
            <img
              class="icon"
              src="/assets/icons/penguin.svg"
              alt="Random Fact Logo"
              height="103"
              width="82"
            />
          </div>

          <ul class="tech-collection__list">
            <li class="tech-collection__item">
              <a href="https://raindrop.io/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/raindrop-io.svg"
                  alt="Raindrop-io logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.spendee.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/spendee.svg"
                  alt="Spendee logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>
            <li class="tech-collection__item">
              <a href="https://citymapper.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/citymapper.svg"
                  alt="Citymapper logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.figma.com/" target="_blank">
                <img
                  class="tech-collection__icon--lg"
                  src="/assets/tech-collection/figma.svg"
                  alt="Figma logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.strava.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/strava.svg"
                  alt="Strava logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.notion.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/notion.svg"
                  alt="Notion logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://wise.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/wise.svg"
                  alt="Wise logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>
            <li class="tech-collection__item">
              <a href="https://dayoneapp.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/day-one.svg"
                  alt="Day One logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://telegram.org/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/telegram.svg"
                  alt="Telegram logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.redbus.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/redbus.svg"
                  alt="Red Bus logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.iqair.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/iqair.svg"
                  alt="IqAir logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.shazam.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/shazam.svg"
                  alt="Shazam logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>
            <li class="tech-collection__item">
              <a href="https://www.skyscanner.net/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/skyscanner.svg"
                  alt="Skyscanner logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
              >
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/html5.svg"
                  alt="HTML5 logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
              >
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/css3.svg"
                  alt="CSS3 logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://sass-lang.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/sass.svg"
                  alt="Sass logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

              <li class="tech-collection__item">
              <a href="https://bun.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/bun.svg"
                  alt="Bun logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.upwork.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/upwork.svg"
                  alt="Upwork logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://google.com/maps" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/google-map.svg"
                  alt="Google Map logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://www.airbnb.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/airbnb.svg"
                  alt="Airbnb logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://ticktick.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/ticktick.svg"
                  alt="Ticktick logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://unsplash.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/unsplash.svg"
                  alt="Unsplash logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://oklch.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/oklch.svg"
                  alt="Oklch logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>

            <li class="tech-collection__item">
              <a href="https://vert.sh/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/vert.svg"
                  alt="Vert logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>
            <li class="tech-collection__item">
              <a href="https://thenounproject.com/" target="_blank">
                <img
                  class="tech-collection__icon"
                  src="/assets/tech-collection/the-noun-project.svg"
                  alt="The Noun Project logo"
                  width="102"
                  height="73"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>`}}customElements.define("section-tech-collection",s);class l extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="random-facts">
        <div class="container">
          <div class="section-title">
            <h2>Random Facts</h2>
            <img
              class="icon"
              src="/assets/icons/birds-singing.svg"
              alt="Random Fact Logo"
              height="24"
              width="24"
            />
          </div>

          <ul class="random-facts__list">
            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/bird-watching.svg"
                  alt="Watching Bird"
                />
                <figcaption class="body">I love birds</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/seafood.svg"
                  alt="Seafood"
                />
                <figcaption class="body">I’m allergic to seafood</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/travelling.svg"
                  alt="Travelling"
                />
                <figcaption class="body">I enjoy travelling</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/running.svg"
                  alt="Running"
                />
                <figcaption class="body">I like running</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>`}}customElements.define("section-random-facts",l);class c extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="timeline">
      <div class="container">
        <div class="section-title">
          <h2>Experience Overview</h2>
          <img
            src="/assets/icons/bird-flying.svg"
            alt="Timeline Logo"
            class="icon"
            height="36"
            width="76"
          />
        </div>

        <ul class="timeline__list">
          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/software-developer.svg"
              alt="Software Developer Icon"
              width="48"
              height="48"
            />

            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>

            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2021">2021</time>
                &ndash;
                <time datetime="2022">2022</time>
              </div>

              <h3>Software Developer</h3>
              <p class="timeline__description">
                I landed my first software development role building a hospital
                management system to manage inventory, POS, and OPD
                appointments. The system is still running today.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon timeline__icon-student"
              src="/assets/icons/student.svg"
              alt="Student Icon"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2022">2022</time>
                &ndash;
                <time datetime="2025">2025</time>
              </div>
              <h3>Student</h3>
              <p class="timeline__description">
                I completed my Bachelor of Science in Computer Science at
                Assumption University, Thailand. My favorite subject was
                <q>Computer Architecture</q>.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/software-developer.svg"
              alt="Software Developer Icon"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2022">2025</time>
                &ndash;
                <time datetime="2025">2026</time>
              </div>
              <h3>Software Developer</h3>
              <p class="timeline__description">
                After graduating, I worked remotely for 6 months as a software
                developer at an event organizing company in Singapore.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/full-time-freelancer.svg"
              alt="Web Design & Develop"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge">
                <time datetime="2026"> Present: </time>
              </div>
              <h3>UX Designer</h3>
              <p class="timeline__description">
                Today, I've found my passion in UX design. Self-taught through
                research and hands-on practice, I design intuitive experiences
                by simplifying complex workflows.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>`}}customElements.define("section-timeline",c);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="quote">
        <div class="container">
          <blockquote class="title">
            " What I hear, I forget.<br />
            What I see, I remember.<br />
            What I do I understand" <br />
            — Confucius
          </blockquote>
        </div>
      </section>`}}customElements.define("section-quote",a);document.addEventListener("DOMContentLoaded",()=>{let o=document.querySelector(".tech-collection__item"),n=Math.round(parseFloat(getComputedStyle(o).width))/2;new Masonry(".tech-collection__list",{itemSelector:".tech-collection__item",columnWidth:n,horizontalOrder:!0})});
