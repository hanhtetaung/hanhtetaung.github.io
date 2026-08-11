function m(e,o){if(e===void 0){if(o===Array)return[];if(o===Object)return{};if(o===Boolean)return!1;if(o===Number)return 0;return}if(o===Boolean)return Boolean(e);if(o===Number)return Number(e);return e}function t(e,{props:o={},attrs:n=[],styles:s="",template:l}){let d=["props",...n];class p extends HTMLElement{static observedAttributes=d;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},r=this.getAttribute("props");if(r)try{i=JSON.parse(r)}catch{i={}}let g={};for(let c of Object.keys(o))g[c]=m(i[c],o[c]);return g}_applyForwardedAttrs(){if(n.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let r of n)if(this.hasAttribute(r))i.setAttribute(r,this.getAttribute(r));else i.removeAttribute(r)}_render(){let i=this._getProps(),r=typeof l==="function"?l(i):l;this.shadowRoot.innerHTML=`<style>${s}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(e,p)}var h=`
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
`,f=["href","target","rel","download"],v=`
  <a data-forward><slot></slot></a>
`;t("app-link",{attrs:f,styles:h,template:v});var u=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,b=["width","height","src","alt"],w=()=>"<img data-forward />";t("app-logo",{attrs:b,styles:u,template:w});var a="769px",tt="992px";var y=`
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

  @media (max-width: ${a}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`,k=`
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
`;t("section-header",{template:k,styles:y});var x=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${a}) {
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
`,S=()=>`
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
`;t("footer-nav",{styles:x,template:S});var $=`
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

  @media (max-width: ${a}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }
`,I=`
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
`;t("section-footer",{styles:$,template:I});var A=`
  :host {
    --local-width: 5rem;
    --local-heigth: auto;

    display: block;
  }

  img {
    max-width: var(--local-width);
    height: var(--local-heigth);
  }

  :host([variant="normal"]) {
    --local-width: 12rem;
    --local-heigth: auto;
  }

  :host([variant="large"]) {
    --local-width: 50rem;
  }
`,z=["width","height","src","alt"],H=()=>"<img data-forward />";t("app-image",{attrs:z,styles:A,template:H});var O=`
  section {
    width: 80%;
    margin-inline: auto;
     display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${a}) {
      display: block; 
        text-align: center;
    }
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  div {
    display: flex;
    align-items: center;
    gap: 3rem;

     @media (max-width: ${a}) {
      display: block; 
    }
  }
`,N=`
  <section>
      <h1>About</h1>
      <div>
        <app-image
          variant="normal"
          src="assets/images/about-profile.avif"
          alt="profile"
        ></app-image>

        <article>
          <p>
            I'm Han Htet Aung, an UX Engineer who loves creating unique
            experiences on the web.
          </p>

          <p>I see patterns in chaos.</p>
        </article>
      </div>
  </section>
`;t("section-about-intro",{styles:O,template:N});var T=`
  :host {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 3rem;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    font-family: var(--font-heading);
    font-weight: var(--font-regular)
  }

  :host([variant="vertical"]) {
    flex-direction: column-reverse;
    gap: 0;

    img {
      height: 5rem;
      width: auto;
    }
  }

  :host([variant="text"]) {
    img {
      display: none;
    }
  }
`,P={name:String,img:String,alt:String},C=({name:e,img:o,alt:n})=>`
    <h2>${e}</h2>
    <img
        src=${o}
        alt=${n}
        height="36"
        width="76"
    />
`;t("section-title",{props:P,styles:T,template:C});var E=[{href:"https://raindrop.io/",src:"/assets/tech-collection/raindrop-io.svg",alt:"Raindrop-io logo"},{href:"https://www.spendee.com/",src:"/assets/tech-collection/spendee.svg",alt:"Spendee logo"},{href:"https://citymapper.com/",src:"/assets/tech-collection/citymapper.svg",alt:"Citymapper logo"},{href:"https://www.figma.com/",src:"/assets/tech-collection/figma.svg",alt:"Figma logo"},{href:"https://www.strava.com/",src:"/assets/tech-collection/strava.svg",alt:"Strava logo"},{href:"https://www.notion.com/",src:"/assets/tech-collection/notion.svg",alt:"Notion logo"},{href:"https://wise.com/",src:"/assets/tech-collection/wise.svg",alt:"Wise logo"},{href:"https://dayoneapp.com/",src:"/assets/tech-collection/day-one.svg",alt:"Day One logo"},{href:"https://telegram.org/",src:"/assets/tech-collection/telegram.svg",alt:"Telegram logo"},{href:"https://www.redbus.com/",src:"/assets/tech-collection/redbus.svg",alt:"Red Bus logo"},{href:"https://www.iqair.com/",src:"/assets/tech-collection/iqair.svg",alt:"IqAir logo"},{href:"https://www.shazam.com/",src:"/assets/tech-collection/shazam.svg",alt:"Shazam logo"},{href:"https://www.skyscanner.net/",src:"/assets/tech-collection/skyscanner.svg",alt:"Skyscanner logo"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",src:"/assets/tech-collection/html5.svg",alt:"HTML5 logo"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",src:"/assets/tech-collection/css3.svg",alt:"CSS3 logo"},{href:"https://sass-lang.com/",src:"/assets/tech-collection/sass.svg",alt:"Sass logo"},{href:"https://bun.com/",src:"/assets/tech-collection/bun.svg",alt:"Bun logo"},{href:"https://www.upwork.com/",src:"/assets/tech-collection/upwork.svg",alt:"Upwork logo"},{href:"https://google.com/maps",src:"/assets/tech-collection/google-map.svg",alt:"Google Map logo"},{href:"https://www.airbnb.com/",src:"/assets/tech-collection/airbnb.svg",alt:"Airbnb logo"},{href:"https://ticktick.com/",src:"/assets/tech-collection/ticktick.svg",alt:"Ticktick logo"},{href:"https://unsplash.com/",src:"/assets/tech-collection/unsplash.svg",alt:"Unsplash logo"},{href:"https://oklch.com/",src:"/assets/tech-collection/oklch.svg",alt:"Oklch logo"},{href:"https://vert.sh/",src:"/assets/tech-collection/vert.svg",alt:"Vert logo"},{href:"https://thenounproject.com/",src:"/assets/tech-collection/the-noun-project.svg",alt:"The Noun Project logo"}],L=`
  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
     position: relative;
    list-style-type: none;
    padding: 0;
    max-height: 100rem;
    overflow-x: scroll;
    display: flex;
    flex-wrap: wrap;
  }
`,_=()=>`
  <section>
    <section-title
        props='${JSON.stringify({name:"Tech Collection",img:"/assets/icons/penguin.svg",alt:"Penguin Logo"})}'
      ></section-title>

      <ul>
        ${E.map((e)=>`
              <li>
                <app-link href="${e.href}" target="_blank" variant="image">
                  <img
                    src="${e.src}"
                    alt="${e.alt}"
                    width="102"
                    height="73"
                  />
                </app-link>
              </li>
            `).join("")}
      </ul>
  </section>
`;t("section-tech-collection",{styles:L,template:_});var B=`
  :host {
    --local-width: 3rem;
    --local-height: auto;

    display: block;
  }

  img {
    width: var(--local-width);
      height: var(--local-height);
  }

  :host([variant="large"]) {
    --local-width: auto;
    --local-height: 10rem;
  }

  :host([variant="creator"]) {
    --local-height: auto;
    --local-width: 4rem;
  }


`,D=["src","alt"],q=()=>'<img data-forward width="200" height="200"/>';t("app-icon",{attrs:D,styles:B,template:q});var U=[{src:"/assets/icons/bird-watching.svg",alt:"Watching Bird",text:"I love birds"},{src:"/assets/icons/seafood.svg",alt:"Seafood",text:"I’m allergic to seafood"},{src:"/assets/icons/travelling.svg",alt:"Travelling",text:"I enjoy travelling"},{src:"/assets/icons/running.svg",alt:"Running",text:"I like running"}],W=`
  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
  }

  figure {
    margin: 0;
    text-align: center;
  }
`,M=()=>`
  <section>
       <section-title
        props='${JSON.stringify({name:"Why hire me?",img:"/assets/icons/birds-singing.svg",alt:"Birds-singing Logo"})}'
      ></section-title>

      <ul>
        ${U.map((e)=>`
              <li>
                <figure>
                  <app-icon variant="large" src="${e.src}" alt="${e.alt}"></app-icon>
                  <figcaption class="body">${e.text}</figcaption>
                </figure>
              </li>
            `).join("")}
      </ul>
  </section>
`;t("section-random-facts",{styles:W,template:M});var j=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

    display: inline-block;
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
    width: fit-content;
    white-space: nowrap;
    border-radius: 3rem;
    border: var(--local-border);
    font-size: var(--size-small);
    background: var(--local-bg);
    color: var(--local-color);
  }

  :host([variant="outline"]) {
    --local-bg: var(--color-transparent);
    --local-color: var(--color-secondary);
    --local-border: 1px solid var(--color-secondary);
  }
`,F={name:String},J=({name:e})=>`${e}`;t("app-badge",{props:F,styles:j,template:J});var R=[{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2021-2022",title:"Software Developer",description:"I landed my first software development role building a hospital management system to manage inventory, POS, and OPD appointments. The system is still running today."},{icon:"/assets/icons/student.svg",alt:"Student Icon",range:"2022-2025",title:"Student",description:"I completed my Bachelor of Science in Computer Science at Assumption University, Thailand. My favorite subject was Computer Architecture."},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2025-2026",title:"Software Developer",description:"After graduating, I worked remotely for 6 months as a software developer at an event organizing company in Singapore."},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Web Design & Develop",range:"Present",title:"UX Designer",description:"Today, I've found my passion in UX design. Self-taught through research and hands-on practice, I design intuitive experiences by simplifying complex workflows."}],G=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h3, p {
    margin: 0;
  }

  h3 {
     font-size: var(--size-heading);
    font-weight: var(--font-bold);
    font-family: var(--font-body);
    margin-block: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column-reverse;
  }

  li {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 0 1rem;
    align-items: center;
    align-self: stretch;
  }

  .connector {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }

  .icon {
    width: 10rem;
    max-height: 5rem;
    height: auto;
  }

  .dot {
    width: 0.75rem;
    position: absolute;
    top: 1rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--color-secondary);
  }

  .line {
    width: 2px;
    flex: 1;
    background: var(--color-secondary);
    min-height: 2rem;
  }

  .content {
    padding-bottom: 5rem;
    max-width: 100ch;
  }

  .badge {
    margin-bottom: 0.5rem;
  }

  app-icon {
    margin-right: 2rem;
  }

  @media (max-width: ${a}) {
    app-icon {
      display: none;
    }
  }

  p {
    max-width: 50ch;
  }
`,X=()=>`
  <section>
    <div class="container">
      <section-title
        props='${JSON.stringify({name:"Experience Overview",img:"/assets/icons/bird-flying.svg",alt:"Bird Flying Logo"})}'
      ></section-title>

      <ul>
        ${R.map(({icon:e,alt:o,range:n,title:s,description:l})=>`
              <li>
                <app-icon src="${e}" alt="${o}"></app-icon>

                <div class="connector">
                  <span class="dot"></span>
                  <span class="line"></span>
                </div>

                <div class="content">
                  <app-badge
                    props='${JSON.stringify({name:n})}'
                    ${n==="Present"?"":'variant="outline"'}
                  ></app-badge>

                  <h3>${s}</h3>
                  <p>${l}</p>
                </div>
              </li>
            `).join("")}
      </ul>
    </div>
  </section>
`;t("section-timeline",{styles:G,template:X});var V=`
  section {
    width: 80%;
    margin-inline: auto;
    text-align: center;
  }

  blockquote {
    font-size: var(--size-title);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);

    @media (max-width: ${a}) {
      font-size: var(--size-body);
    }
  }
`,K=`
  <section>
      <blockquote>
        " What I hear, I forget.<br />
        What I see, I remember.<br />
        What I do I understand" <br />
        — Confucius
      </blockquote>
  </section>
`;t("section-quote",{styles:V,template:K});
