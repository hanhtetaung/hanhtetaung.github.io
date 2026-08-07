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
    </header>`}}customElements.define("section-header",s);class t extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",t);class a extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="credits">
    <div class="container">
      <h1>Credits</h1>
      <p>Thanks to the creators behind the icons.</p>
    </div>
  </section>`}}customElements.define("section-credits-intro",a);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="credits">
      <div class="container">
        <ul class="credits__list">
          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/images/logo.avif"
                alt="Approach Logo"
              />
              <p>By Pimsupa Rukchonlatee</p>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/man-in-details.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/programmer-5124229/"
                target="_blank"
                class="button--link"
              >
                By VectorsLab
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/merlion.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/merlion-6990371/"
                target="_blank"
                class="button--link"
              >
                By Isaac haq
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/positive-man.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/face-5688226/"
                target="_blank"
                class="button--link"
              >
                By moaon
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/full-time-freelancer.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/computer-4111354/"
                target="_blank"
                class="button--link"
              >
                By Stepan Belyakov
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/birds-singing.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/birds-170955/"
                target="_blank"
                class="button--link"
              >
                By Lee Mette
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/running.svg"
                alt="Running Logo"
              />
              <a
                href="https://thenounproject.com/icon/running-7164037/"
                target="_blank"
                class="button--link"
              >
                By Princess In The Spotlight
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/seafood.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/seafood-6474814/"
                target="_blank"
                class="button--link"
              >
                By Darwin Mulya
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/penguin.svg"
                alt="Penguin Icon"
              />
              <a
                href="https://thenounproject.com/icon/penguin-6418789/"
                target="_blank"
                class="button--link"
              >
                By Lucas Rathgeb
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/molecule.svg"
                alt="Molecule Icon"
              />
              <a
                href="https://thenounproject.com/icon/molecule-1003938/"
                target="_blank"
                class="button--link"
              >
                By Vectors Market
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/student.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/graduate-6714013/"
                target="_blank"
                class="button--link"
              >
                By Chaiconator
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/bird-flying.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/bird-7842090/"
                target="_blank"
                class="button--link"
              >
                By Princess In The Spotlight
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/travelling.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/travel-5976779/"
                target="_blank"
                class="button--link"
              >
                By Iconsden@gmail.com
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/bird-watching.svg"
                alt="Bird Singing Icon"
              />
              <a
                href="https://thenounproject.com/icon/bird-8218551/"
                target="_blank"
                class="button--link"
              >
                By Piyapong Khemawattana
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img class="icon--md" src="/assets/icons/owl.svg" alt="Owl Icon" />
              <a
                href="https://thenounproject.com/icon/owl-4212053/"
                target="_blank"
                class="button--link"
              >
                By CAMB
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/working-man.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/man-working-4099412/"
                target="_blank"
                class="button--link"
              >
                By Ameya SK
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/sparrow.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/straight-copper-7408245/"
                target="_blank"
                class="button--link"
              >
                By Sumin Lee
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/bird-with-flower.svg"
                alt="Approach Logo"
              />
              <a
                href="https://thenounproject.com/icon/bird-1705096/"
                target="_blank"
                class="button--link"
              >
                By Olga
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/water.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/water-1371137/"
                target="_blank"
                class="button--link"
              >
                By SBTS
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/sand.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/sand-6425352/"
                target="_blank"
                class="button--link"
              >
                By Creative Mahira
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/crude_oil.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/crude-oil-8424464/"
                target="_blank"
                class="button--link"
              >
                By Suwarjo
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/plant.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/plant-5514346/"
                target="_blank"
                class="button--link"
              >
                By Przemyslawk
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/clay.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/mud-2349786/"
                target="_blank"
                class="button--link"
              >
                By Deuxamis_moon
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/stone.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/stone-8242048/"
                target="_blank"
                class="button--link"
              >
                By Ivar Jenner
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/animal.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/animal-5115337/"
                target="_blank"
                class="button--link"
              >
                By Visual Glow
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/empty-state.svg"
                alt="Result Logo"
              />
              <a
                href="https://thenounproject.com/icon/select-4375928/"
                target="_blank"
                class="button--link"
              >
                By The Icon Z
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/software-developer.svg"
                alt="Software Developer Logo"
              />
              <a
                href="https://thenounproject.com/icon/programmer-3916075/"
                target="_blank"
                class="button--link"
              >
                By Phạm Thanh Lộc
              </a>
            </div>
          </li>

          <li>
            <div class="credits__content">
              <img
                class="icon--md"
                src="/assets/icons/cuckoo-cock.svg"
                alt="Coming Soon Logo"
              />
              <a
                href="https://thenounproject.com/icon/cuckoo-clock-1470212/"
                target="_blank"
                class="button--link"
              >
                By Phạm Thanh Lộc
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>`}}customElements.define("section-creators-list",i);
