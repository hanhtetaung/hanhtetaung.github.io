function h(t,i){if(t===void 0){if(i===Array)return[];if(i===Object)return{};if(i===Boolean)return!1;if(i===Number)return 0;return}if(i===Boolean)return Boolean(t);if(i===Number)return Number(t);return t}function e(t,{props:i={},attrs:a=[],styles:p="",template:s}){let m=["props",...a];class c extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let r={},n=this.getAttribute("props");if(n)try{r=JSON.parse(n)}catch{r={}}let g={};for(let d of Object.keys(i))g[d]=h(r[d],i[d]);return g}_applyForwardedAttrs(){if(a.length===0)return;let r=this.shadowRoot.querySelector("[data-forward]");if(!r)return;for(let n of a)if(this.hasAttribute(n))r.setAttribute(n,this.getAttribute(n));else r.removeAttribute(n)}_render(){let r=this._getProps(),n=typeof s==="function"?s(r):s;this.shadowRoot.innerHTML=`<style>${p}</style>${n}`,this._applyForwardedAttrs()}}customElements.define(t,c)}var f=`
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
`,v=["href","target","rel","download"],b=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:v,styles:f,template:b});var u=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,y=["width","height","src","alt"],w=()=>"<img data-forward />";e("app-logo",{attrs:y,styles:u,template:w});var o="769px",l="992px";var x=`
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
`;e("section-header",{template:k,styles:x});var $=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/capabilities/design-system",name:"Design System"},{href:"/capabilities/user-interfaces",name:"User Interfaces"},{href:"/capabilities/web-interfaces",name:"Web Interfaces"},{href:"/work/terra",name:"Terra"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/mmo",name:"MMO"},{href:"/work/au-van",name:"AU Van"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"}],S=`
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
`,z=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${$.map((t)=>`
                <li>
                    <app-link variant="sitemap" href=${t.href} >${t.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;e("footer-nav",{styles:S,template:z});var A=`
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
`;e("footer-copyright",{styles:A,template:H});var C=`
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

      <footer-copyright></footer-copyright>
  </footer>
`;e("section-footer",{styles:C,template:I});var T=`
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
`,O=["width","height","src","alt"],E=()=>"<img data-forward />";e("app-image",{attrs:O,styles:T,template:E});var L=`
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

  :host([variant="bigger"]) {
    --local-width: auto;
    --local-height: 6rem;
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


`,N=["src","alt"],P=()=>'<img data-forward width="200" height="200"/>';e("app-icon",{attrs:N,styles:L,template:P});var j=`
   section {
        margin-inline: auto;
        width: 80%;
        display: flex;
        justify-content: space-between;

        @media (max-width: ${o}) {
          flex-direction: column;
          gap: 3rem;
        }
    }

      h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  hgroup {
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }
`,_={name:String,img:String,alt:String},D=({name:t="Name",img:i="/assets/images/coming-soon.jpg",alt:a="Coming Soon"})=>`
  <section>
      <div>
        <hgroup>
          <p>Coming Soon</p>
          <h1>${t}</h1>
        </hgroup>

        <app-icon
          variant="large"
          src="/assets/icons/cuckoo-clock.svg"
          alt="Cuckoo Cock Logo"
        ></app-icon>
      </div>

      <app-image variant="large" src=${i} alt=${a}></app-image>
  </section>
`;e("section-coming-soon-intro",{props:_,styles:j,template:D});var B=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
    margin-bottom: 1rem;
  }

   span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  p {
    margin: 0;
    margin-bottom: 5rem;
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }

  ol {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    gap: 5rem;
    border: 1px dashed var(--color-text);
    width: fit-content;
    padding: 2rem;

    @media (max-width: ${o}) {
        flex-direction: column;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        margin-top: 0.5rem;
    }
  }
`,F=`
    <section>
        <hgroup>
            <span>Capabilities</span>
            <h1>Design User Interfaces</h1>
            <p>Design intuitive user interfaces and experiences.</p>
        </hgroup>

        <article>
            <h3>What I deliver</h3>
             <ol>
                <li>
                    <app-icon variant="medium" src="/assets/icons/user-interface.svg" alt=""></app-icon>
                    <p>User Flows</p>
                </li>
                <li>
                     <app-icon variant="medium" src="/assets/icons/user-interface.svg" alt=""></app-icon>
                    <p>Hi-Fi Interfaces</p>
                    
                </li>
                <li>
                     <app-icon variant="medium" src="/assets/icons/user-interface.svg" alt=""></app-icon>
                    <p>Prototypes</p>
                    
                </li>
            </ol>
        </article>
    </section>
`;e("section-user-interfaces-intro",{styles:B,template:F});var U=`
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
`,W={name:String,img:String,alt:String},M=({name:t,img:i="",alt:a=""})=>`
    <h2>${t}</h2>
    <img
        src=${i}
        alt=${a}
        height="36"
        width="76"
    />
`;e("section-title",{props:W,styles:U,template:M});var J=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }


`,G=`
  <section>
    <section-title
        props='${JSON.stringify({name:"Workflow",img:"/assets/icons/ostrich.svg",alt:"Ostrich Logo"})}'
      ></section-title>

     <p>Coming Soon</p>
</section>
`;e("section-user-interfaces-workflow",{styles:J,template:G});var K=`
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

  :host([variant="success"]) {
    /* --local-bg: #157d6c; */
    --local-bg: #a36aa5;
     --local-border: 1px solid var( --local-color);
  }
`,R={name:String},V=({name:t})=>`${t}`;e("app-badge",{props:R,styles:K,template:V});var Y=`
  :host {
    display: flex;
    gap: 2rem;
    padding-block: 3rem;
    padding-inline: 5rem;
    justify-content: space-between;
    align-items: center;
    border: 1px dashed var(--color-text);

    @media (max-width: ${l}) {
      justify-content: start;
      flex-direction: column;
      padding: 0;
      padding-inline: 2rem;
      padding-block: 2rem;
      align-items: start;
    }
  }

  :host([variant="borderless"]) {
    border: none;
    padding: 0;

    h3 {
      font-size: var(--size-body);
    }
  }

  h3, p {
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-weight: var(--font-bold);
    font-size: var(--size-small);
    text-transform: uppercase;
  }

  h3 {
    font-size: var(--size-heading);
    font-weight: var(--font-regular);
    margin-bottom: 0.5rem;
  }

  ol {
     padding: 0;
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      gap: 4rem;
      width: fit-content;
      overflow: scroll;

      @media (max-width: ${l}) {
        width: 100%;
      }
    }

    li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        font-size: var(--size-small);
    }
  }

    article {
      @media (max-width: ${l}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
`,q={title:String,subTitle:String,href:String,icon:String,alt:String,delivers:Array},Q=({title:t,subTitle:i,href:a,delivers:p,icon:s,alt:m})=>`
  <article>
    <hgroup>
      <span>${i}</span>
      <h3>${t}</h3>
    </hgroup>
    <app-link variant="plain" href=${a}>→</app-link>
  </article>

  <ol>
    ${p.map((c)=>`
        <li>
          <app-icon variant="medium" src=${s} alt=${m}></app-icon>
          <p>${c}</p>
        </li>
      `).join("")}
  </ol>
`;e("capabilities-item",{props:q,styles:Y,template:Q});var X=`
  section {
    width: 80%;
    margin-inline: auto;
  }

   h3 {
    margin: 0;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

ol {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    @media (max-width: ${l}) {
      grid-template-columns: 1fr;
      border: none;
    }
  }
`,Z=()=>`
  <section>
      <section-title
        props='${JSON.stringify({name:"Capabilities",img:"/assets/icons/peacock.svg",alt:"Peacock Logo"})}'
      ></section-title>
            
    <ol>
        <li>
            <capabilities-item props='{"title": "Design System", "subTitle": "Build", "href": "/capabilities/design-system", "icon": "/assets/icons/design-system.svg", "alt": "Design System Icon", "delivers": ["Design Tokens", "Component Library", "Guidelines"]}'>
            </capabilities-item>
        </li>
        <li>
              <capabilities-item props='{"title": "User Interfaces", "subTitle": "Design", "href": "/capabilities/user-interfaces", "icon": "/assets/icons/user-interface.svg", "alt": "User Interface Icon", "delivers": ["User Flows", "Hi-Fi Interfaces", "Prototypes"]}'>
            </capabilities-item>
        </li>
        <li>
             <capabilities-item props='{"title": "Web Interfaces", "subTitle": "Develop", "href": "/capabilities/web-interfaces", "icon": "/assets/icons/web-interface.svg", "alt": "Web Interface Icon", "delivers": ["HTML, CSS", "Web Components"]}'>
            </capabilities-item>
        </li>
    </ol>
  </section>
`;e("section-capabilities",{styles:X,template:Z});
