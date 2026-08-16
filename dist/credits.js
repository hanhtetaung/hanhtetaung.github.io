function h(r,e){if(r===void 0){if(e===Array)return[];if(e===Object)return{};if(e===Boolean)return!1;if(e===Number)return 0;return}if(e===Boolean)return Boolean(r);if(e===Number)return Number(r);return r}function o(r,{props:e={},attrs:n=[],styles:l="",template:s}){let m=["props",...n];class p extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let t={},i=this.getAttribute("props");if(i)try{t=JSON.parse(i)}catch{t={}}let d={};for(let c of Object.keys(e))d[c]=h(t[c],e[c]);return d}_applyForwardedAttrs(){if(n.length===0)return;let t=this.shadowRoot.querySelector("[data-forward]");if(!t)return;for(let i of n)if(this.hasAttribute(i))t.setAttribute(i,this.getAttribute(i));else t.removeAttribute(i)}_render(){let t=this._getProps(),i=typeof s==="function"?s(t):s;this.shadowRoot.innerHTML=`<style>${l}</style>${i}`,this._applyForwardedAttrs()}}customElements.define(r,p)}var g=`
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
`,f=["href","target","rel","download"],b=`
  <a data-forward><slot></slot></a>
`;o("app-link",{attrs:f,styles:g,template:b});var v=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,u=["width","height","src","alt"],y=()=>"<img data-forward />";o("app-logo",{attrs:u,styles:v,template:y});var a="769px",V="992px";var w=`
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

        <app-link variant="primary" href="/hire-me">
          Let's chat &#8629;
        </app-link>
      </div>
  </header>
`;o("section-header",{template:k,styles:w});var x=[{href:"/",name:"Home"},{href:"/about",name:"About"},{href:"/credits",name:"Credits"},{href:"/hire-me",name:"Hire Me"},{href:"/thank-you",name:"Thank You"},{href:"/work/mmo",name:"MMO"},{href:"/work/bamboo",name:"Bamboo"},{href:"/work/terra",name:"Terra"},{href:"/work/au-van",name:"AU Van"},{href:"/work/portfolio",name:"Portfolio"},{href:"/work/sks-solar",name:"SKS Solar"},{href:"/writings/foundation-building-interfaces-at-scale",name:"Foundation"}],$=`
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

    @media (max-width: ${a}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`,A=()=>`
    <nav>
        <span>Sitemap</span>

        <ol>
            ${x.map((r)=>`
                <li>
                    <app-link variant="sitemap" href=${r.href} >${r.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;o("footer-nav",{styles:$,template:A});var H=`
  :host {
   display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;

   @media (max-width: ${a}) {
        flex-direction: column-reverse;
        gap: 2rem;
        border: none;
        padding-top: 0;
   }
  }

  p {
    margin: 0;

    @media (max-width: ${a}) {
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
    

    @media (max-width: ${a}) {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`,S=()=>`
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
`;o("footer-copyright",{styles:H,template:S});var _=`
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

  @media (max-width: ${a}) {
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
`,E=`
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
`;o("section-footer",{styles:_,template:E});var O=`
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
`;o("section-credits-intro",{styles:O,template:T});var C=`
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


`,N=["src","alt"],P=()=>'<img data-forward width="200" height="200"/>';o("app-icon",{attrs:N,styles:C,template:P});var B=`
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
`,L={icon:String,alt:String,url:String,name:String},j=({icon:r,alt:e,url:n,name:l})=>`
    <app-icon variant="creator" src="${r}" alt="${e}" ></app-icon>
    ${n?`<app-link variant="underline" href="${n}" target="_blank" rel="noreferrer">By ${l}</app-link>`:`<p>By ${l}</p>`}
`;o("creator-item",{props:L,styles:B,template:j});var z=[{icon:"/assets/images/logo.avif",alt:"Logo",name:"Pimsupa Rukchonlatee"},{icon:"/assets/icons/man-in-details.svg",alt:"Programmer Icon",url:"https://thenounproject.com/icon/programmer-5124229/",name:"VectorsLab"},{icon:"/assets/icons/merlion.svg",alt:"Merlion Icon",url:"https://thenounproject.com/icon/merlion-6990371/",name:"Isaac haq"},{icon:"/assets/icons/positive-man.svg",alt:"Face Icon",url:"https://thenounproject.com/icon/face-5688226/",name:"moaon"},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Computer Icon",url:"https://thenounproject.com/icon/computer-4111354/",name:"Stepan Belyakov"},{icon:"/assets/icons/birds-singing.svg",alt:"Birds Icon",url:"https://thenounproject.com/icon/birds-170955/",name:"Lee Mette"},{icon:"/assets/icons/running.svg",alt:"Running Icon",url:"https://thenounproject.com/icon/running-7164037/",name:"Princess In The Spotlight"},{icon:"/assets/icons/seafood.svg",alt:"Seafood Icon",url:"https://thenounproject.com/icon/seafood-6474814/",name:"Darwin Mulya"},{icon:"/assets/icons/penguin.svg",alt:"Penguin Icon",url:"https://thenounproject.com/icon/penguin-6418789/",name:"Lucas Rathgeb"},{icon:"/assets/icons/molecule.svg",alt:"Molecule Icon",url:"https://thenounproject.com/icon/molecule-1003938/",name:"Vectors Market"},{icon:"/assets/icons/student.svg",alt:"Student Icon",url:"https://thenounproject.com/icon/graduate-6714013/",name:"Chaiconator"},{icon:"/assets/icons/bird-flying.svg",alt:"Bird Icon",url:"https://thenounproject.com/icon/bird-7842090/",name:"Princess In The Spotlight"},{icon:"/assets/icons/travelling.svg",alt:"Travel Icon",url:"https://thenounproject.com/icon/travel-5976779/",name:"Iconsden@gmail.com"},{icon:"/assets/icons/bird-watching.svg",alt:"Bird Singing Icon",url:"https://thenounproject.com/icon/bird-8218551/",name:"Piyapong Khemawattana"},{icon:"/assets/icons/owl.svg",alt:"Owl Icon",url:"https://thenounproject.com/icon/owl-4212053/",name:"CAMB"},{icon:"/assets/icons/working-man.svg",alt:"Man Icon",url:"https://thenounproject.com/icon/man-working-4099412/",name:"Ameya SK"},{icon:"/assets/icons/sparrow.svg",alt:"Sparrow Icon",url:"https://thenounproject.com/icon/straight-copper-7408245/",name:"Sumin Lee"},{icon:"/assets/icons/bird-with-flower.svg",alt:"Bird Icon",url:"https://thenounproject.com/icon/bird-1705096/",name:"Olga"},{icon:"/assets/icons/water.svg",alt:"Water Icon",url:"https://thenounproject.com/icon/water-1371137/",name:"SBTS"},{icon:"/assets/icons/sand.svg",alt:"Sand Icon",url:"https://thenounproject.com/icon/sand-6425352/",name:"Creative Mahira"},{icon:"/assets/icons/crude_oil.svg",alt:"Crude Oil Icon",url:"https://thenounproject.com/icon/crude-oil-8424464/",name:"Suwarjo"},{icon:"/assets/icons/plant.svg",alt:"Plant Icon",url:"https://thenounproject.com/icon/plant-5514346/",name:"Przemyslawk"},{icon:"/assets/icons/clay.svg",alt:"Mud Icon",url:"https://thenounproject.com/icon/mud-2349786/",name:"Deuxamis_moon"},{icon:"/assets/icons/stone.svg",alt:"Stone Icon",url:"https://thenounproject.com/icon/stone-8242048/",name:"Ivar Jenner"},{icon:"/assets/icons/animal.svg",alt:"Animal Icon",url:"https://thenounproject.com/icon/animal-5115337/",name:"Visual Glow"},{icon:"/assets/icons/empty-state.svg",alt:"Empty State Icon",url:"https://thenounproject.com/icon/select-4375928/",name:"The Icon Z"},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",url:"https://thenounproject.com/icon/programmer-3916075/",name:"Phạm Thanh Lộc"},{icon:"/assets/icons/cuckoo-clock.svg",alt:"Clock Icon",url:"https://thenounproject.com/icon/cuckoo-clock-1470212/",name:"Free Fair & Healthy"},{icon:"/assets/icons/technology.svg",alt:"Technology Icon",url:"https://thenounproject.com/icon/technology-7864424/",name:"Ferdian Mauladi Riziq"},{icon:"/assets/icons/engineering.svg",alt:"Engineering Icon",url:"https://thenounproject.com/icon/engineering-8024039/",name:"Omah Icon"},{icon:"/assets/icons/kingfisher.svg",alt:"Kingfisher Icon",url:"https://thenounproject.com/icon/kingfisher-bird-6274353/",name:"Delwar Hossain"},{icon:"/assets/icons/peacock.svg",alt:"Peacock Icon",url:"https://thenounproject.com/icon/bird-6684144/",name:"Carlos von Dessauer"},{icon:"/assets/icons/parrot.svg",alt:"Parrot Icon",url:"https://thenounproject.com/icon/parrot-8272477/",name:"Eskak"},{icon:"/assets/icons/one-finger.svg",alt:"Finger One Icon",url:"https://thenounproject.com/icon/only-one-hand-gesture-8076267/",name:"iconfield"},{icon:"/assets/icons/two-finger.svg",alt:"Finger Two Icon",url:"https://thenounproject.com/icon/two-hand-gesture-8076273/",name:"iconfield"},{icon:"/assets/icons/three-finger.svg",alt:"Finger Three Icon",url:"https://thenounproject.com/icon/three-hand-gesture-8076250/",name:"iconfield"},{icon:"/assets/icons/loop.svg",alt:"Loop Icon",url:"https://thenounproject.com/icon/loop-6016994/",name:"Ehtisham Abid"},{icon:"/assets/icons/ostrich.svg",alt:"Ostrich Icon",url:"https://thenounproject.com/icon/ostrich-8304474/",name:"Vectors Market"}],M=`
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

    @media (max-width: ${a}) {
      display: flex;
      flex-direction: column;
    }
  }
`,F=()=>`
  <section>
      <ul>
        ${z.map((r)=>`
              <li>
                <creator-item
                  props='${JSON.stringify({icon:r.icon,alt:r.alt,name:r.name,url:r.url??""})}'
                ></creator-item>
              </li>
            `).join("")}
      </ul>
  </section>
`;o("section-creators-list",{styles:M,template:F});
