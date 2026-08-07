class l extends HTMLElement{connectedCallback(){this.innerHTML=`<header class="header">
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
    </header>`}}customElements.define("section-header",l);class o extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
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
    </footer>`}}customElements.define("section-footer",o);class c extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="hero">
      <div class="container">
        <hgroup class="hero__group">
          <p class="hero__intro">I'm Han Htet Aung</p>
          <h1>UX Engineer</h1>
          <p>
            Designing human-centered interfaces that power daily business
            operations
          </p>

          <div class="hero__tech">
            <p class="small--emphasis">Toolkit:</p>

            <ul class="hero__tech-list">
              <li>
                <img
                  src="/assets/icons/figma.svg"
                  alt="Figma icon"
                  class="icon"
                />
              </li>
              <li>
                <img
                  src="/assets/icons/html.svg"
                  alt="HTML icon"
                  class="icon"
                />
              </li>

              <li>
                <img src="/assets/icons/css.svg" alt="CSS icon" class="icon" />
              </li>

              <li>
                <img
                  src="/assets/icons/javascript.svg"
                  alt="JavaScript icon"
                  class="icon"
                />
              </li>
            </ul>
          </div>
        </hgroup>

        <ul class="hero__highlight">
          <li>
            <p class="small--emphasis">Specialize in</p>
            <h3>Enterprise UX</h3>
          </li>

          <li>
            <p class="small--emphasis">Simplify</p>
            <h3>Complex workflows</h3>
          </li>

          <li>
            <p class="small--emphasis">Scale</p>
            <h3>Design System</h3>
          </li>
        </ul>

        <!-- <article class="blog">
            <img
              class="icon"
              src="/assets/icons/molecule.svg"
              alt="Foundation logo"
            />

            <div class="blog__content">
              <h3>Foundation for Building Interfaces at Scale</h3>

              <p>
                The principles and foundations I follow to build consistent,
                scalable user interfaces.
              </p>
              <a
                class="button--outline"
                href="/foundation-building-interfaces-at-scale"
                >Read more &#8599;</a
              >
            </div>
          </article> -->

        <ul class="hero__product-lists">
          <li>
            <a href="/work/knowledge-tree" class="hero__product-item">
              <span class="button--link">Knowledge Tree</span>
              <img
                src="/assets/images/case-study/knowledge-tree/thumbnail.avif"
                alt="Knowledge Tree thumbnail"
                class="image"
              />
            </a>
          </li>
          <li>
            <a href="/work/mmo" class="hero__product-item">
              <span class="button--link">MMO</span>
              <img
                src="/assets/images/case-study/mmo/thumbnail.avif"
                alt="MMO thumbnail"
                class="image"
              />
            </a>
          </li>
          <li>
            <a href="/work/bamboo" class="hero__product-item">
              <span class="button--link">Bamboo</span>
              <img
                src="/assets/images/case-study/bamboo/thumbnail.avif"
                alt="Bamboo thumbnail"
                class="image"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>`}}customElements.define("section-hero",c);class r extends HTMLElement{static get observedAttributes(){return["image","alt","title","description","href","reverse"]}connectedCallback(){this.render()}attributeChangedCallback(){if(this.isConnected)this.render()}render(){let a=this.getAttribute("image")??"",i=this.getAttribute("alt")??"",s=this.getAttribute("title")??"",t=this.getAttribute("description")??"",e=this.getAttribute("href")??"#",u=this.hasAttribute("reverse"),n=[];try{n=JSON.parse(this.getAttribute("categories")??"[]")}catch{n=[]}let _=n.map((f)=>`<li class="badge">${f}</li>`).join("");this.innerHTML=`
      <article class="showcase${u?" showcase--reverse-direction":""}">
        <img src="${a}" alt="${i}" class="image" />
        <div class="showcase__content">
          <h3>${s}</h3>

          <ul class="showcase__category">
            ${_}
          </ul>

          <p>${t}</p>

          <a class="button--outline" href="${e}">View Case Study &#8599;</a>
        </div>
      </article>
    `}}customElements.define("case-study-item",r);var w=[{image:"/assets/images/case-study/knowledge-tree/thumbnail.avif",alt:"Knowledge Tree Thumbnail",title:"Knowledge Tree",categories:["Product Design","User Experience","Design System"],description:"A tool to visualize the connections between everyday goods and their fundamental sources based on my knowledge.",href:"/work/knowledge-tree",reverse:!1},{image:"assets/images/case-study/mmo/thumbnail.avif",alt:"MMO thumbnail",title:"MMO",categories:["Simplify complex workflows","Build Prototype","Design System"],description:"An internal portal that uses to run daily operations in hospital.",href:"/work/mmo",reverse:!0},{image:"/assets/images/case-study/portfolio/mockup.avif",alt:"Portfolio Mockup",title:"Portfolio",categories:["Research","Web Design","Web Development"],description:"A personal portfolio to showcase my work, process, and approach to web design and development.",href:"/work/portfolio",reverse:!1},{image:"/assets/images/case-study/skssolar/mockup.avif",alt:"SKS Mockup",title:"SKS.Solar",categories:["Research","Web Design","Web Development"],description:"A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED to showcase its history, services and completed project.",href:"/work/sks-solar",reverse:!0}];class d extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="work">
      <div class="container">
        <div class="section-title">
          <h2>Case Studies</h2>
          <img
            src="/assets/icons/sparrow.svg"
            alt="My Work Logo"
            class="icon"
            height="135"
            width="110"
          />
        </div>
        <ul class="work__showcases"></ul>
        </div>
        </section>`,this.renderShowcases()}renderShowcases(){let a=this.querySelector(".work__showcases"),i=document.createDocumentFragment();w.forEach((s)=>{let t=document.createElement("li"),e=document.createElement("case-study-item");if(e.setAttribute("image",s.image),e.setAttribute("alt",s.alt),e.setAttribute("title",s.title),e.setAttribute("description",s.description),e.setAttribute("href",s.href),e.setAttribute("categories",JSON.stringify(s.categories)),s.reverse)e.setAttribute("reverse","");t.appendChild(e),i.appendChild(t)}),a.appendChild(i)}}customElements.define("section-case-studies",d);class m extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="timeline">
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
    </section>`}}customElements.define("section-timeline",m);class h extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="why-hire-me">
      <div class="container">
        <div class="section-title">
          <img
            src="/assets/icons/owl.svg"
            alt=""
            class="icon"
            height="125"
            width="100"
          />
          <h2>Why Hire me?</h2>
        </div>

        <ul class="why-hire-me__list">
          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3><span class="heading--emphasis">1.</span> Working Man</h3>
                <p>
                  I'm consistent on one thing: always giving my best. I take
                  pride in doing things properly and take full ownership of
                  everything I do. When I commit to something, I follow through.
                </p>
              </div>

              <img
                class="icon--lg"
                src="/assets/icons/working-man.svg"
                alt="Working Man Icon"
                width="48"
                height="48"
              />
            </article>
          </li>

          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3>
                  <span class="heading--emphasis">2.</span> Detail-oriented
                  Person
                </h3>
                <p>
                  I pay close attention to every detail, because the little
                  things matter. I believe the difference between good work and
                  great work lives in the details.
                </p>
              </div>
              <img
                class="icon--lg"
                src="/assets/icons/man-in-details.svg"
                alt="Detail-oriented Person Icon"
                width="48"
                height="48"
              />
            </article>
          </li>

          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3>
                  <span class="heading--emphasis">3.</span> Positive Thinker
                </h3>
                <p class="why-hire-me__description">
                  A positive mindset helps me create better work and stronger
                  collaborations. I focus on solutions rather than problems.
                  Good energy builds great work.
                </p>
              </div>
              <img
                class="icon--lg"
                src="/assets/icons/positive-man.svg"
                alt="Positive Thinker Icon"
                width="48"
                height="48"
              />
            </article>
          </li>
        </ul>
      </div>
    </section>`}}customElements.define("section-why-hire-me",h);class p extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="cta">
      <div class="container">
        <div class="section-title">
          <h2>Call me, Singapore</h2>
        </div>

        <article class="cta__article">
          <p class="cta__description">
            I'm looking for a UX Designer role in Singapore where I can simplify
            complex workflows and design intuitive experiences for enterprise
            products.
          </p>

          <p class="cta__description">
            If you're looking for someone who is hardworking, detail-oriented,
            and positive-minded, then I’m the one for you.
          </p>

          <a class="button--primary" href="/hire-me">
            Let's chat
            <span>&#8629;</span>
          </a>
        </article>
        <img
          class="icon--lg"
          src="/assets/icons/merlion.svg"
          alt="Merlion illustration"
        />
      </div>
    </section>`}}customElements.define("section-cta",p);class g extends HTMLElement{connectedCallback(){this.innerHTML=`
      <div class="cloud-divider">
        <svg
          viewBox="0 0 1200 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,0
              L1200,0
              L1200,40
              Q1160,75 1130,58
              Q1090,85 1050,62
              Q1010,75 970,55
              Q930,80 890,50
              Q850,78 810,58
              Q770,85 730,52
              Q690,75 650,55
              Q610,80 570,50
              Q530,78 490,58
              Q450,85 410,52
              Q370,75 330,50
              Q290,80 250,55
              Q210,90 170,60
              Q130,80 100,45
              Q50,70 0,40
              Z
            "
            fill="var(--color-bg-secondary)"
          />
        </svg>
      </div>
    `}}customElements.define("line-divider-lower",g);class v extends HTMLElement{connectedCallback(){this.innerHTML=`
    <div class="cloud-divider">
      <svg
        viewBox="0 0 1200 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="
              M0,80
              L0,40
              Q50,10 100,35
              Q130,0 170,20
              Q210,-10 250,25
              Q290,0 330,30
              Q370,5 410,28
              Q450,-5 490,22
              Q530,2 570,30
              Q610,0 650,25
              Q690,5 730,28
              Q770,-5 810,22
              Q850,2 890,30
              Q930,0 970,25
              Q1010,5 1050,28
              Q1090,-5 1130,22
              Q1160,5 1200,30
              L1200,80
              Z
              "
          fill="var(--color-bg-secondary)"
        />
      </svg>
    </div>`}}customElements.define("line-divider-upper",v);
