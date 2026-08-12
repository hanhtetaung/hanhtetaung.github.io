function g(e,t){if(e===void 0){if(t===Array)return[];if(t===Object)return{};if(t===Boolean)return!1;if(t===Number)return 0;return}if(t===Boolean)return Boolean(e);if(t===Number)return Number(e);return e}function o(e,{props:t={},attrs:i=[],styles:s="",template:c}){let h=["props",...i];class p extends HTMLElement{static observedAttributes=h;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let a={},r=this.getAttribute("props");if(r)try{a=JSON.parse(r)}catch{a={}}let m={};for(let l of Object.keys(t))m[l]=g(a[l],t[l]);return m}_applyForwardedAttrs(){if(i.length===0)return;let a=this.shadowRoot.querySelector("[data-forward]");if(!a)return;for(let r of i)if(this.hasAttribute(r))a.setAttribute(r,this.getAttribute(r));else a.removeAttribute(r)}_render(){let a=this._getProps(),r=typeof c==="function"?c(a):c;this.shadowRoot.innerHTML=`<style>${s}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(e,p)}var d=`
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
       content: "➶";
     }
  }
`,u=["href","target","rel","download"],f=`
  <a data-forward><slot></slot></a>
`;o("app-link",{attrs:u,styles:d,template:f});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,b=["width","height","src","alt"],w=()=>"<img data-forward />";o("app-logo",{attrs:b,styles:v,template:w});var n="769px",z="992px";var y=`
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

  @media (max-width: ${n}) {
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
`;o("section-header",{template:k,styles:y});var x=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/au-van",name:"AU Van"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"},{href:"/work/knowledge-tree",name:"Knowledge Tree"}],j=`
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${n}) {
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

    @media (max-width: ${n}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,L=()=>`
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
`;o("footer-nav",{styles:j,template:L});var A=`
  :host {
   display: flex;
    justify-content: space-between;

   @media (max-width: ${n}) {
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
`,S=()=>`
    
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
`;o("footer-copyright",{styles:A,template:S});var P=`
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

  @media (max-width: ${n}) {
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
`,$=`
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
`;o("section-footer",{styles:P,template:$});var H=`
    section {
        margin-inline: auto;
        width: 80%;
    }

     h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`,T=`
  <section>
      <h1>Credits</h1>
      <p>Thanks to the creators behind the icons.</p>
  </section>
`;o("section-credits-intro",{styles:H,template:T});var I=`
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


`,O=["src","alt"],M=()=>'<img data-forward width="200" height="200"/>';o("app-icon",{attrs:O,styles:I,template:M});var C=`
  :host {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    max-width: 50rem;
    padding-block: 2rem;
    border-bottom: 1px dashed var(--color-text);
  }

  p {
    margin: 0;
    text-decoration: none;
  }
`,R={icon:String,alt:String,url:String,name:String},_=({icon:e,alt:t,url:i,name:s})=>`
    <app-icon variant="creator" src="${e}" alt="${t}" ></app-icon>
    ${i?`<app-link variant="underline" href="${i}" target="_blank" rel="noreferrer">By ${s}</app-link>`:`<p>By ${s}</p>`}
`;o("creator-item",{props:R,styles:C,template:_});var B=[{icon:"/assets/images/logo.avif",alt:"Approach Logo",name:"Pimsupa Rukchonlatee"},{icon:"/assets/icons/man-in-details.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/programmer-5124229/",name:"VectorsLab"},{icon:"/assets/icons/merlion.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/merlion-6990371/",name:"Isaac haq"},{icon:"/assets/icons/positive-man.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/face-5688226/",name:"moaon"},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/computer-4111354/",name:"Stepan Belyakov"},{icon:"/assets/icons/birds-singing.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/birds-170955/",name:"Lee Mette"},{icon:"/assets/icons/running.svg",alt:"Running Logo",url:"https://thenounproject.com/icon/running-7164037/",name:"Princess In The Spotlight"},{icon:"/assets/icons/seafood.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/seafood-6474814/",name:"Darwin Mulya"},{icon:"/assets/icons/penguin.svg",alt:"Penguin Icon",url:"https://thenounproject.com/icon/penguin-6418789/",name:"Lucas Rathgeb"},{icon:"/assets/icons/molecule.svg",alt:"Molecule Icon",url:"https://thenounproject.com/icon/molecule-1003938/",name:"Vectors Market"},{icon:"/assets/icons/student.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/graduate-6714013/",name:"Chaiconator"},{icon:"/assets/icons/bird-flying.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/bird-7842090/",name:"Princess In The Spotlight"},{icon:"/assets/icons/travelling.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/travel-5976779/",name:"Iconsden@gmail.com"},{icon:"/assets/icons/bird-watching.svg",alt:"Bird Singing Icon",url:"https://thenounproject.com/icon/bird-8218551/",name:"Piyapong Khemawattana"},{icon:"/assets/icons/owl.svg",alt:"Owl Icon",url:"https://thenounproject.com/icon/owl-4212053/",name:"CAMB"},{icon:"/assets/icons/working-man.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/man-working-4099412/",name:"Ameya SK"},{icon:"/assets/icons/sparrow.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/straight-copper-7408245/",name:"Sumin Lee"},{icon:"/assets/icons/bird-with-flower.svg",alt:"Approach Logo",url:"https://thenounproject.com/icon/bird-1705096/",name:"Olga"},{icon:"/assets/icons/water.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/water-1371137/",name:"SBTS"},{icon:"/assets/icons/sand.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/sand-6425352/",name:"Creative Mahira"},{icon:"/assets/icons/crude_oil.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/crude-oil-8424464/",name:"Suwarjo"},{icon:"/assets/icons/plant.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/plant-5514346/",name:"Przemyslawk"},{icon:"/assets/icons/clay.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/mud-2349786/",name:"Deuxamis_moon"},{icon:"/assets/icons/stone.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/stone-8242048/",name:"Ivar Jenner"},{icon:"/assets/icons/animal.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/animal-5115337/",name:"Visual Glow"},{icon:"/assets/icons/empty-state.svg",alt:"Result Logo",url:"https://thenounproject.com/icon/select-4375928/",name:"The Icon Z"},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Logo",url:"https://thenounproject.com/icon/programmer-3916075/",name:"Phạm Thanh Lộc"},{icon:"/assets/icons/cuckoo-cock.svg",alt:"Coming Soon Logo",url:"https://thenounproject.com/icon/cuckoo-clock-1470212/",name:"Free Fair & Healthy"},{icon:"/assets/icons/technology.svg",alt:"Technology Logo",url:"https://thenounproject.com/icon/technology-7864424/",name:"Ferdian Mauladi Riziq"},{icon:"/assets/icons/engineering.svg",alt:"Technology Logo",url:"https://thenounproject.com/icon/engineering-8024039/",name:"Omah Icon"},{icon:"/assets/icons/kingfisher.svg",alt:"Kingfisher Logo",url:"https://thenounproject.com/icon/kingfisher-bird-6274353/",name:"Delwar Hossain"},{icon:"/assets/icons/design-system.svg",alt:"Design System Logo",url:"https://thenounproject.com/icon/sourcing-6125071/",name:"icon 5"},{icon:"/assets/icons/user-interface.svg",alt:"User Interface Logo",url:"https://thenounproject.com/icon/website-149263/",name:"Dawid Sobolewski"},{icon:"/assets/icons/web-interface.svg",alt:"Web Interface Logo",url:"https://thenounproject.com/icon/web-5653117/",name:"Danang endar"},{icon:"/assets/icons/peacock.svg",alt:"Peacock Logo",url:"https://thenounproject.com/icon/bird-6684144/",name:"Carlos von Dessauer"}],E=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    overflow: scroll;

    @media (max-width: ${n}) {
      display: flex;
      flex-direction: column;
    }
  }
`,N=()=>`
  <section>
      <ul>
        ${B.map((e)=>`
              <li>
                <creator-item
                  props='${JSON.stringify({icon:e.icon,alt:e.alt,name:e.name,url:e.url??""})}'
                ></creator-item>
              </li>
            `).join("")}
      </ul>
  </section>
`;o("section-creators-list",{styles:E,template:N});
