function d(t,a){if(t===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(t);if(a===Number)return Number(t);return t}function e(t,{props:a={},attrs:n=[],styles:s="",template:l}){let h=["props",...n];class p extends HTMLElement{static observedAttributes=h;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},r=this.getAttribute("props");if(r)try{i=JSON.parse(r)}catch{i={}}let m={};for(let c of Object.keys(a))m[c]=d(i[c],a[c]);return m}_applyForwardedAttrs(){if(n.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let r of n)if(this.hasAttribute(r))i.setAttribute(r,this.getAttribute(r));else i.removeAttribute(r)}_render(){let i=this._getProps(),r=typeof l==="function"?l(i):l;this.shadowRoot.innerHTML=`<style>${s}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(t,p)}var g=`
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

  :host([variant="sitemap"]) {
     --local-padding: 0.2rem 0;
     --local-border: none;

     a::before {
       content: "✈";
     }
  }
`,f=["href","target","rel","download"],v=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:f,styles:g,template:v});var u=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,w=["width","height","src","alt"],b=()=>"<img data-forward />";e("app-logo",{attrs:w,styles:u,template:b});var o="769px",ae="992px";var y=`
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
`;e("section-header",{template:k,styles:y});var x=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/au-van",name:"AU Van"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"},{href:"/work/knowledge-tree",name:"Knowledge Tree"}],S=`
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
    margin-top: 0.5rem
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
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
`,$=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${x.map((t)=>`
                <li>
                    <app-link variant="sitemap" href=${t.href} >${t.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;e("footer-nav",{styles:S,template:$});var I=`
  :host {
   display: flex;
    justify-content: space-between;

   @media (max-width: ${o}) {
        flex-direction: column;
        gap: 3rem;
   }
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }
`,A=()=>`
    
      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>

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
`;e("footer-copyright",{styles:I,template:A});var H=`
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

  @media (max-width: ${o}) {
    article {
      display: block;
    }
  }

  div {
    display: flex;
    gap: 3rem;
  }

  hr {
    color: var(--color-secondary);
  }
`,O=`
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

      <hr>

      <footer-copyright></footer-copyright>
  </footer>
`;e("section-footer",{styles:H,template:O});var T=`
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
`,z=["width","height","src","alt"],P=()=>"<img data-forward />";e("app-image",{attrs:z,styles:T,template:P});var N=`
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
`,C=`
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
`;e("section-about-intro",{styles:N,template:C});var E=`
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
`,B={name:String,img:String,alt:String},L=({name:t,img:a="",alt:n=""})=>`
    <h2>${t}</h2>
    <img
        src=${a}
        alt=${n}
        height="36"
        width="76"
    />
`;e("section-title",{props:B,styles:E,template:L});var M=[{href:"https://raindrop.io/",src:"/assets/tech-collection/raindrop-io.svg",alt:"Raindrop-io logo"},{href:"https://www.spendee.com/",src:"/assets/tech-collection/spendee.svg",alt:"Spendee logo"},{href:"https://citymapper.com/",src:"/assets/tech-collection/citymapper.svg",alt:"Citymapper logo"},{href:"https://www.figma.com/",src:"/assets/tech-collection/figma.svg",alt:"Figma logo"},{href:"https://www.strava.com/",src:"/assets/tech-collection/strava.svg",alt:"Strava logo"},{href:"https://www.notion.com/",src:"/assets/tech-collection/notion.svg",alt:"Notion logo"},{href:"https://wise.com/",src:"/assets/tech-collection/wise.svg",alt:"Wise logo"},{href:"https://dayoneapp.com/",src:"/assets/tech-collection/day-one.svg",alt:"Day One logo"},{href:"https://telegram.org/",src:"/assets/tech-collection/telegram.svg",alt:"Telegram logo"},{href:"https://www.redbus.com/",src:"/assets/tech-collection/redbus.svg",alt:"Red Bus logo"},{href:"https://www.iqair.com/",src:"/assets/tech-collection/iqair.svg",alt:"IqAir logo"},{href:"https://www.shazam.com/",src:"/assets/tech-collection/shazam.svg",alt:"Shazam logo"},{href:"https://www.skyscanner.net/",src:"/assets/tech-collection/skyscanner.svg",alt:"Skyscanner logo"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTML5",src:"/assets/tech-collection/html5.svg",alt:"HTML5 logo"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",src:"/assets/tech-collection/css3.svg",alt:"CSS3 logo"},{href:"https://bun.com/",src:"/assets/tech-collection/bun.svg",alt:"Bun logo"},{href:"https://www.upwork.com/",src:"/assets/tech-collection/upwork.svg",alt:"Upwork logo"},{href:"https://google.com/maps",src:"/assets/tech-collection/google-map.svg",alt:"Google Map logo"},{href:"https://www.airbnb.com/",src:"/assets/tech-collection/airbnb.svg",alt:"Airbnb logo"},{href:"https://ticktick.com/",src:"/assets/tech-collection/ticktick.svg",alt:"Ticktick logo"},{href:"https://unsplash.com/",src:"/assets/tech-collection/unsplash.svg",alt:"Unsplash logo"},{href:"https://oklch.com/",src:"/assets/tech-collection/oklch.svg",alt:"Oklch logo"},{href:"https://vert.sh/",src:"/assets/tech-collection/vert.svg",alt:"Vert logo"},{href:"https://thenounproject.com/",src:"/assets/tech-collection/the-noun-project.svg",alt:"The Noun Project logo"}],D=`
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
`,U=()=>`
  <section>
    <section-title
        props='${JSON.stringify({name:"Tech Collection",img:"/assets/icons/penguin.svg",alt:"Penguin Logo"})}'
      ></section-title>

      <ul>
        ${M.map((t)=>`
              <li>
                <app-link href="${t.href}" target="_blank" variant="image">
                  <img
                    src="${t.src}"
                    alt="${t.alt}"
                    width="102"
                    height="73"
                  />
                </app-link>
              </li>
            `).join("")}
      </ul>
  </section>
`;e("section-tech-collection",{styles:D,template:U});var _=`
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


`,q=["src","alt"],F=()=>'<img data-forward width="200" height="200"/>';e("app-icon",{attrs:q,styles:_,template:F});var j=[{src:"/assets/icons/bird-watching.svg",alt:"Watching Bird",text:"I love birds"},{src:"/assets/icons/seafood.svg",alt:"Seafood",text:"I’m allergic to seafood"},{src:"/assets/icons/travelling.svg",alt:"Travelling",text:"I enjoy travelling"},{src:"/assets/icons/running.svg",alt:"Running",text:"I like running"}],W=`
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
`,R=()=>`
  <section>
       <section-title
        props='${JSON.stringify({name:"Random Facts",img:"/assets/icons/birds-singing.svg",alt:"Birds-singing Logo"})}'
      ></section-title>

      <ul>
        ${j.map((t)=>`
              <li>
                <figure>
                  <app-icon variant="large" src="${t.src}" alt="${t.alt}"></app-icon>
                  <figcaption>${t.text}</figcaption>
                </figure>
              </li>
            `).join("")}
      </ul>
  </section>
`;e("section-random-facts",{styles:W,template:R});var J=`
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
`,K={name:String},V=({name:t})=>`${t}`;e("app-badge",{props:K,styles:J,template:V});var G=[{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2021-2022",title:"Software Developer",description:"I landed my first software development role building a hospital management system to manage inventory, POS, and OPD appointments. The system is still running today."},{icon:"/assets/icons/student.svg",alt:"Student Icon",range:"2022-2025",title:"Student",description:"I completed my Bachelor of Science in Computer Science at Assumption University, Thailand. My favorite subject was Computer Architecture."},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2025-2026",title:"Software Developer",description:"After graduating, I worked remotely for 6 months as a software developer at an event organizing company in Singapore."},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Web Design & Develop",range:"Present",title:"UX Designer",description:"Today, I've found my passion in UX design. Self-taught through research and hands-on practice, I design intuitive experiences by simplifying complex workflows."}],X=`
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

  article {
    padding-bottom: 5rem;
    max-width: 100ch;
  }

  .badge {
    margin-bottom: 0.5rem;
  }

  app-icon {
    margin-right: 2rem;
  }

  @media (max-width: ${o}) {
    app-icon {
      display: none;
    }
  }

  p {
    max-width: 50ch;
  }
`,Y=()=>`
  <section>
      <section-title
        props='${JSON.stringify({name:"Experience Overview",img:"/assets/icons/bird-flying.svg",alt:"Bird Flying Logo"})}'
      ></section-title>

      <ul>
        ${G.map(({icon:t,alt:a,range:n,title:s,description:l})=>`
              <li>
                <app-icon src="${t}" alt="${a}"></app-icon>

                <div class="connector">
                  <span class="dot"></span>
                  <span class="line"></span>
                </div>

                <article>
                  <app-badge
                    props='${JSON.stringify({name:n})}'
                    ${n==="Present"?"":'variant="outline"'}
                  ></app-badge>

                  <h3>${s}</h3>
                  <p>${l}</p>
                </article>
              </li>
            `).join("")}
      </ul>
  </section>
`;e("section-timeline",{styles:X,template:Y});var Q=`
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
`,Z=`
  <section>
      <blockquote>
        " What I hear, I forget.<br />
        What I see, I remember.<br />
        What I do I understand" <br />
        — Confucius
      </blockquote>
  </section>
`;e("section-quote",{styles:Q,template:Z});
