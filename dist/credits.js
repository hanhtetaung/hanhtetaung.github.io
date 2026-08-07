class a extends HTMLElement{connectedCallback(){this.innerHTML=`<header class="header">
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
    </header>`}}customElements.define("section-header",a);class i extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",i);class c extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="credits">
    <div class="container">
      <h1>Credits</h1>
      <p>Thanks to the creators behind the icons.</p>
    </div>
  </section>`}}customElements.define("section-credits-intro",c);class l extends HTMLElement{connectedCallback(){this.render()}render(){let n=this.getAttribute("icon")??"/assets/icons/default.svg",s=this.getAttribute("alt")??"Icon",t=this.getAttribute("url"),o=this.getAttribute("name")??"Unknown",e=t?`<a href="${t}" target="_blank" class="button--link">By ${o}</a>`:`<p>By ${o}</p>`;this.innerHTML=`
      <div class="credits__content">
        <img class="icon--md" src="${n}" alt="${s}" />
        ${e}
      </div>
    `}}customElements.define("creator-item",l);var h=[{icon:"/assets/images/logo.avif",alt:"Approach Logo",name:"Pimsupa Rukchonlatee"},{icon:"/assets/icons/man-in-details.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/programmer-5124229/",name:"VectorsLab"},{icon:"/assets/icons/merlion.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/merlion-6990371/",name:"Isaac haq"},{icon:"/assets/icons/positive-man.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/face-5688226/",name:"moaon"},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/computer-4111354/",name:"Stepan Belyakov"},{icon:"/assets/icons/birds-singing.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/birds-170955/",name:"Lee Mette"},{icon:"/assets/icons/running.svg",alt:"Running Logo",url:"https://thenounproject.com/icon/running-7164037/",name:"Princess In The Spotlight"},{icon:"/assets/icons/seafood.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/seafood-6474814/",name:"Darwin Mulya"},{icon:"/assets/icons/penguin.svg",alt:"Penguin Icon",url:"https://thenounproject.com/icon/penguin-6418789/",name:"Lucas Rathgeb"},{icon:"/assets/icons/molecule.svg",alt:"Molecule Icon",url:"https://thenounproject.com/icon/molecule-1003938/",name:"Vectors Market"},{icon:"/assets/icons/student.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/graduate-6714013/",name:"Chaiconator"},{icon:"/assets/icons/bird-flying.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/bird-7842090/",name:"Princess In The Spotlight"},{icon:"/assets/icons/travelling.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/travel-5976779/",name:"Iconsden@gmail.com"},{icon:"/assets/icons/bird-watching.svg",alt:"Bird Singing Icon",url:"https://thenounproject.com/icon/bird-8218551/",name:"Piyapong Khemawattana"},{icon:"/assets/icons/owl.svg",alt:"Owl Icon",url:"https://thenounproject.com/icon/owl-4212053/",name:"CAMB"},{icon:"/assets/icons/working-man.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/man-working-4099412/",name:"Ameya SK"},{icon:"/assets/icons/sparrow.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/straight-copper-7408245/",name:"Sumin Lee"},{icon:"/assets/icons/bird-with-flower.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/bird-1705096/",name:"Olga"},{icon:"/assets/icons/water.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/water-1371137/",name:"SBTS"},{icon:"/assets/icons/sand.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/sand-6425352/",name:"Creative Mahira"},{icon:"/assets/icons/crude_oil.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/crude-oil-8424464/",name:"Suwarjo"},{icon:"/assets/icons/plant.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/plant-5514346/",name:"Przemyslawk"},{icon:"/assets/icons/clay.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/mud-2349786/",name:"Deuxamis_moon"},{icon:"/assets/icons/stone.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/stone-8242048/",name:"Ivar Jenner"},{icon:"/assets/icons/animal.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/animal-5115337/",name:"Visual Glow"},{icon:"/assets/icons/empty-state.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/select-4375928/",name:"The Icon Z"},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Logo",url:"https://thenounproject.com/icon/programmer-3916075/",name:"Phạm Thanh Lộc"},{icon:"/assets/icons/cuckoo-cock.svg",alt:"Coming Soon Logo",url:"https://thenounproject.com/icon/cuckoo-clock-1470212/",name:"Phạm Thanh Lộc"}];class r extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="credits">
      <div class="container">
        <ul class="credits__list"></ul>
      </div>
    </section>`,this.renderCredits()}renderCredits(){let n=this.querySelector(".credits__list"),s=document.createDocumentFragment();h.forEach((t)=>{let o=document.createElement("li"),e=document.createElement("creator-item");if(e.setAttribute("icon",t.icon),e.setAttribute("alt",t.alt),e.setAttribute("name",t.name),t.url)e.setAttribute("url",t.url);o.appendChild(e),s.appendChild(o)}),n.appendChild(s)}}customElements.define("section-creators-list",r);
