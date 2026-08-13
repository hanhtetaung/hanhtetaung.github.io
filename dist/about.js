function d(e,a){if(e===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(e);if(a===Number)return Number(e);return e}function t(e,{props:a={},attrs:l=[],styles:m="",template:n}){let c=["props",...l];class s extends HTMLElement{static observedAttributes=c;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let r={},i=this.getAttribute("props");if(i)try{r=JSON.parse(i)}catch{r={}}let g={};for(let p of Object.keys(a))g[p]=d(r[p],a[p]);return g}_applyForwardedAttrs(){if(l.length===0)return;let r=this.shadowRoot.querySelector("[data-forward]");if(!r)return;for(let i of l)if(this.hasAttribute(i))r.setAttribute(i,this.getAttribute(i));else r.removeAttribute(i)}_render(){let r=this._getProps(),i=typeof n==="function"?n(r):n;this.shadowRoot.innerHTML=`<style>${m}</style>${i}`,this._applyForwardedAttrs()}}customElements.define(e,s)}var h=`
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
    --local-color: var(--color-tertiary);
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
    /* --local-decoration: underline; */
    --local-padding: 0.2rem 0;
    --local-color: var(--color-tertiary);
    --local-border: none;
    --local-direction: column;
  }

  :host([variant="sitemap"]) {
     --local-padding: 0.2rem 0;
     --local-border: none;

     a::before {
       content: "➶";
     }
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
`,w=["width","height","src","alt"],b=()=>"<img data-forward />";t("app-logo",{attrs:w,styles:u,template:b});var o="769px",ot="992px";var y=`
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
    gap: 5rem;
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

  @media (max-width: ${o}) {
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

        <app-link variant="primary" href="/hire-me">
          Let's chat &#8629;
        </app-link>
      </div>
  </header>
`;t("section-header",{template:k,styles:y});var x=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/au-van",name:"AU Van"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"},{href:"/work/knowledge-tree",name:"Knowledge Tree"}],$=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${o}) {
        flex-direction: column;
        gap: 3rem;
        margin-block: 2rem;
   }
  }

    ol {
    padding: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  nav ol {
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 12.5ch;
    overflow: scroll;

    @media (max-width: ${o}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,S=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${x.map((e)=>`
                <li>
                    <app-link variant="sitemap" href=${e.href} >${e.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;t("footer-nav",{styles:$,template:S});var A=`
  :host {
   display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;

   @media (max-width: ${o}) {
        flex-direction: column-reverse;
        gap: 2rem;
        border: none;
        padding-top: 0;
   }
  }

  p {
    margin: 0;

    @media (max-width: ${o}) {
      border-top: 1px solid var(--color-text);
    padding-top: 1rem;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }

  span {
    display: none;
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    

    @media (max-width: ${o}) {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`,H=()=>`
      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>

      <nav>
        <span>Find me on:</span>
        <ul>
              <li>
                  <app-link href="mailto:hanhtetaung.dev@gmail.com" variant="image">
                  <img
                      src="/assets/icons/email.svg"
                      alt="Email Icon"
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
                  />
                  </app-link>
              </li>
          </ul>
</nav>
`;t("footer-copyright",{styles:A,template:H});var O=`
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
    margin-bottom: 2rem;
    gap: 5rem;
  }

  @media (max-width: ${o}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
    align-items: center;
    min-width: 21rem;
  }

  hr {
    color: var(--color-secondary);
  }
`,z=`
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

      <footer-copyright></footer-copyright>
  </footer>
`;t("section-footer",{styles:O,template:z});var I=`
  :host {
    --local-width: 5rem;
    --local-heigth: auto;

    display: inline-block;
    width: fit-content;
  }

  img {
    max-width: var(--local-width);
    height: var(--local-heigth);
    width: 100%;
  }

  :host([variant="normal"]) {
    --local-width: 12rem;
    --local-heigth: auto;
  }

  :host([variant="medium"]) {
    --local-width: 40rem;
  }

  :host([variant="large"]) {
    --local-width: 50rem;
  }

   :host([variant="full"]) {
    --local-width: 100%;
  }
`,L=["width","height","src","alt"],N=()=>"<img data-forward />";t("app-image",{attrs:L,styles:I,template:N});var P=`
  section {
    width: 80%;
    margin-inline: auto;
     display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${o}) {
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

     @media (max-width: ${o}) {
      display: block; 
    }
  }
`,T=`
  <section>
      <h1>About</h1>
      <div>
        <app-image
          variant="large"
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
`;t("section-about-intro",{styles:P,template:T});var E=`
  :host {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 3rem;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    font-family: var(--font-heading);
    font-weight: var(--font-regular)
  }

  img {
    height: 5rem;
    width: auto;
  }

  :host([variant="vertical"]) {
    flex-direction: column-reverse;
    gap: 0;
  }

  :host([variant="text"]) {
    img {
      display: none;
    }
  }
`,W={name:String,img:String,alt:String},C=({name:e,img:a="",alt:l=""})=>`
    <h2>${e}</h2>
    <img
        src=${a}
        alt=${l}
        height="36"
        width="76"
    />
`;t("section-title",{props:W,styles:E,template:C});var B=[{href:"https://raindrop.io/",src:"/assets/tech-collection/raindrop-io.svg",alt:"Raindrop-io logo"},{href:"https://www.spendee.com/",src:"/assets/tech-collection/spendee.svg",alt:"Spendee logo"},{href:"https://citymapper.com/",src:"/assets/tech-collection/citymapper.svg",alt:"Citymapper logo"},{href:"https://www.figma.com/",src:"/assets/tech-collection/figma.svg",alt:"Figma logo"},{href:"https://www.strava.com/",src:"/assets/tech-collection/strava.svg",alt:"Strava logo"},{href:"https://www.notion.com/",src:"/assets/tech-collection/notion.svg",alt:"Notion logo"},{href:"https://wise.com/",src:"/assets/tech-collection/wise.svg",alt:"Wise logo"},{href:"https://dayoneapp.com/",src:"/assets/tech-collection/day-one.svg",alt:"Day One logo"},{href:"https://telegram.org/",src:"/assets/tech-collection/telegram.svg",alt:"Telegram logo"},{href:"https://www.redbus.com/",src:"/assets/tech-collection/redbus.svg",alt:"Red Bus logo"},{href:"https://www.iqair.com/",src:"/assets/tech-collection/iqair.svg",alt:"IqAir logo"},{href:"https://www.shazam.com/",src:"/assets/tech-collection/shazam.svg",alt:"Shazam logo"},{href:"https://www.skyscanner.net/",src:"/assets/tech-collection/skyscanner.svg",alt:"Skyscanner logo"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",src:"/assets/tech-collection/html5.svg",alt:"HTML5 logo"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",src:"/assets/tech-collection/css3.svg",alt:"CSS3 logo"},{href:"https://bun.com/",src:"/assets/tech-collection/bun.svg",alt:"Bun logo"},{href:"https://www.upwork.com/",src:"/assets/tech-collection/upwork.svg",alt:"Upwork logo"},{href:"https://google.com/maps",src:"/assets/tech-collection/google-map.svg",alt:"Google Map logo"},{href:"https://www.airbnb.com/",src:"/assets/tech-collection/airbnb.svg",alt:"Airbnb logo"},{href:"https://ticktick.com/",src:"/assets/tech-collection/ticktick.svg",alt:"Ticktick logo"},{href:"https://unsplash.com/",src:"/assets/tech-collection/unsplash.svg",alt:"Unsplash logo"},{href:"https://oklch.com/",src:"/assets/tech-collection/oklch.svg",alt:"Oklch logo"},{href:"https://vert.sh/",src:"/assets/tech-collection/vert.svg",alt:"Vert logo"},{href:"https://thenounproject.com/",src:"/assets/tech-collection/the-noun-project.svg",alt:"The Noun Project logo"}],M=`
  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    position: relative;
    list-style-type: none;
    padding: 0;
    max-height: 35rem;
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
        ${B.map((e)=>`
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
`;t("section-tech-collection",{styles:M,template:_});var q=`
  :host {
    --local-width: 3rem;
    --local-height: auto;

    display: block;
  }

  img {
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([variant="medium"]) {
     --local-width: auto;
    --local-height: 5rem;
  }

  :host([variant="large"]) {
    --local-width: auto;
    --local-height: 10rem;
  }

  :host([variant="creator"]) {
    img {
      min-width: 5rem;
      max-width: 10rem;
      height: 10rem;
      width: auto;
    }
  }


`,F=["src","alt"],R=()=>'<img data-forward width="200" height="200"/>';t("app-icon",{attrs:F,styles:q,template:R});var U=[{src:"/assets/icons/bird-watching.svg",alt:"Watching Bird",text:"I love birds"},{src:"/assets/icons/seafood.svg",alt:"Seafood",text:"I’m allergic to seafood"},{src:"/assets/icons/travelling.svg",alt:"Travelling",text:"I enjoy travelling"},{src:"/assets/icons/running.svg",alt:"Running",text:"I like running"}],j=`
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
`,D=()=>`
  <section>
       <section-title
        props='${JSON.stringify({name:"Random Facts",img:"/assets/icons/birds-singing.svg",alt:"Birds-singing Logo"})}'
      ></section-title>

      <ul>
        ${U.map((e)=>`
              <li>
                <figure>
                  <app-icon variant="large" src="${e.src}" alt="${e.alt}"></app-icon>
                  <figcaption>${e.text}</figcaption>
                </figure>
              </li>
            `).join("")}
      </ul>
  </section>
`;t("section-random-facts",{styles:j,template:D});var J="2000-11-03",Y=70,G=`
  section {
    width: 80%;
    margin-inline: auto;
  }

  article {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "corner ages"
      "weeks  grid";
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  ul {
    grid-area: grid;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-rows: repeat(52, 1rem);
    grid-auto-columns: 1rem;
    grid-auto-flow: column;
    gap: 0.25rem;
    overflow: scroll;
  }

  span {
    display: block;
  }

  span.ages {
    grid-area: ages;
  }

  span.weeks-axis {
    grid-area: weeks;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: right;
  }

  li {
    width: 0.6rem;
    height: 0.6rem;
    border: 1px solid var(--color-text);
    border-radius: 0.2rem;
  }

    li.lived {
        background: var(--color-secondary);
        border-color: var(--color-secondary);
    }
`;function K(e,a){let l=new Date(e),m=604800000,n=Math.floor(a*365.25*24*60*60*1000/604800000),c=Math.floor((Date.now()-l)/604800000),s="";for(let r=0;r<n;r++)s+=r<c?'<li class="lived"></li>':"<li></li>";return s}var V=()=>`
  <section>
    <section-title
      props='${JSON.stringify({name:"Life in Weeks",img:"/assets/icons/parrot.svg",alt:"Birds-singing Logo"})}'
    ></section-title>

    <article>
      <span class="ages">Ages ⇨</span>
      <span class="weeks-axis">⇦ Weeks of the year</span>
      <ul>${K(J,Y)}</ul>
    </article>

    <p>Based on this post: <app-link variant="underline" href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">Your Life in Weeks</app-link></p>
  </section>
`;t("section-life-in-weeks",{styles:G,template:V});var X=`
  section {
    width: 80%;
    margin-inline: auto;
    text-align: center;
  }

  blockquote {
    font-size: var(--size-title);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);

    @media (max-width: ${o}) {
      font-size: var(--size-body);
    }
  }
`,Q=`
  <section>
      <blockquote>
        " What I hear, I forget.<br />
        What I see, I remember.<br />
        What I do, I understand." <br />
        — Confucius
      </blockquote>
  </section>
`;t("section-quote",{styles:X,template:Q});
