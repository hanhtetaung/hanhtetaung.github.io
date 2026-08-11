function h(i,t){if(i===void 0){if(t===Array)return[];if(t===Object)return{};if(t===Boolean)return!1;if(t===Number)return 0;return}if(t===Boolean)return Boolean(i);if(t===Number)return Number(i);return i}function e(i,{props:t={},attrs:o=[],styles:s="",template:r}){let p=["props",...o];class c extends HTMLElement{static observedAttributes=p;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let n={},l=this.getAttribute("props");if(l)try{n=JSON.parse(l)}catch{n={}}let m={};for(let d of Object.keys(t))m[d]=h(n[d],t[d]);return m}_applyForwardedAttrs(){if(o.length===0)return;let n=this.shadowRoot.querySelector("[data-forward]");if(!n)return;for(let l of o)if(this.hasAttribute(l))n.setAttribute(l,this.getAttribute(l));else n.removeAttribute(l)}_render(){let n=this._getProps(),l=typeof r==="function"?r(n):r;this.shadowRoot.innerHTML=`<style>${s}</style>${l}`,this._applyForwardedAttrs()}}customElements.define(i,c)}var f=`
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
`,v=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:v,styles:f,template:u});var y=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,w=["width","height","src","alt"],b=()=>"<img data-forward />";e("app-logo",{attrs:w,styles:y,template:b});var a="769px",g="992px";var k=`
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
`,x=`
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
`;e("section-header",{template:x,styles:k});var S=`
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
`,$=()=>`
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
`;e("footer-nav",{styles:S,template:$});var I=`
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
`,A=`
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
`;e("section-footer",{styles:I,template:A});var Q=`
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


`,O=["src","alt"],T=()=>'<img data-forward width="200" height="200"/>';e("app-icon",{attrs:O,styles:Q,template:T});var D=[{src:"/assets/icons/figma.svg",alt:"Figma Icon"},{src:"/assets/icons/html.svg",alt:"HTML Icon"},{src:"/assets/icons/css.svg",alt:"CSS Icon"},{src:"/assets/icons/javascript.svg",alt:"JavaScript Icon"}],P=[{name:"Knowledge Tree",href:"/work/knowledge-tree",src:"/assets/images/case-study/knowledge-tree/thumbnail.avif",alt:"Knowledge Tree Thumbnail"},{name:"MMO",href:"/work/mmo",src:"/assets/images/case-study/mmo/thumbnail.avif",alt:"MMO Thumbnail"},{name:"Bamboo",href:"/work/bamboo",src:"/assets/images/case-study/bamboo/thumbnail.avif",alt:"Bamboo Thumbnail"}],z=[{title:"Specialize In",header:"Enterprise UX"},{title:"Simplify",header:"Complex workflows"},{title:"Scale",header:"Design System"}],L=`
  section {
    width: 80%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem;
    grid-template-areas:
      "one two"
      "three three";


    @media (max-width: ${a}) {
        display: flex;
        flex-direction: column;
    }
  }


  ol {
    grid-area: three;
  }

  .highlights {
    grid-area: two;
    max-width: 30ch;
    margin-left: auto;

    @media (max-width: ${a}) {
      margin: auto;
    }
  }

  h1, h3, p {
    margin: 0;
  }

  h1 {
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  h3 {
    font-size: var(--size-heading);
    font-family: var(--font-body);
  }

  ul, ol {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  .toolkits {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
  }

  hgroup {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article  {
    ul {
      flex-direction: row;
    }
  }

  ul {
    flex-direction: column;
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
  
  ol {
    display: flex;
    gap: 2rem;

    overflow-y: scroll;
  }

  img {
    max-height: 12rem;
    width: auto;
  }
`,M=`
  <section>
      <article>
        <hgroup>
          <p>I'm Han Htet Aung</p>
          <h1>UX Engineer</h1>
          <p>
            Designing human-centered interfaces that power daily business
            operations
          </p>
        </hgroup>
  
        <span>Toolkit:</span>
        <ul class="toolkits">
          ${D.map((i)=>`
              <li>
                <app-icon
                  src=${i.src}
                  alt=${i.alt}
                ></app-icon>
              </li>
            `).join("")}
        </ul>
      </article>

      <ul class="highlights">
         ${z.map((i)=>`
                <li>
                  <span>${i.title}</span>
                  <h3>${i.header}</h3>
                </li>
              `).join("")}
      </ul>

      <ol>
        ${P.map((i)=>`
          <li>
            <app-link variant="image" href=${i.href}>
              <span>${i.name}</span>
              <img
                src=${i.src}
                alt=${i.alt}
              />
            </app-link>
          </li>
          `).join("")}
      </ol>
  </section>
`;e("section-hero",{styles:L,template:M});var E=`
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
`,N={name:String},C=({name:i})=>`${i}`;e("app-badge",{props:N,styles:E,template:C});var H=`
  :host {
    --local-border: 1px solid currentColor;
    --local-decoration: none;

    display: flex;
    gap: 5rem;
    align-items: center;
    padding-block: 5rem;
    padding-inline: 5rem; 
    box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.35);

  }

  :host([reverse]) {
    flex-direction: row-reverse;
  }

  img {
    flex: 1;
    max-width: 50rem;
    width: 100%;
    height: auto;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    align-self: flex-start;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: var(--local-border);
    text-decoration: var(--local-decoration);
    color: inherit;
    border-radius: 4px;
  }

  @media (max-width: ${g}) {
    :host {
      display: block;
    }
  }
`,_={image:String,alt:String,title:String,description:String,href:String,categories:Array},j=({image:i,alt:t,title:o,description:s,href:r,categories:p})=>`
    <img src="${i}" alt="${t}" />
    <div>
      <h3>${o}</h3>
      <ul>
        ${p.map((c)=>`
              <li><app-badge props='${JSON.stringify({name:c})}' variant="primary"></app-badge></li>
            `).join("")}
      </ul>
      <p>${s}</p>
      <app-link variant="secondary" href="${r}">
        View Case Study &#8599;
      </app-link>
    </div>
`;e("case-study-item",{props:_,styles:H,template:j});var B=`
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
`,W={name:String,img:String,alt:String},J=({name:i,img:t,alt:o})=>`
    <h2>${i}</h2>
    <img
        src=${t}
        alt=${o}
        height="36"
        width="76"
    />
`;e("section-title",{props:W,styles:B,template:J});var K=[{image:"/assets/images/case-study/knowledge-tree/thumbnail.avif",alt:"Knowledge Tree Thumbnail",title:"Knowledge Tree",categories:["Product Design","User Experience","Design System"],description:"A tool to visualize the connections between everyday goods and their fundamental sources based on my knowledge.",href:"/work/knowledge-tree",reverse:!1},{image:"assets/images/case-study/mmo/thumbnail.avif",alt:"MMO thumbnail",title:"MMO",categories:["Simplify complex workflows","Build Prototype","Design System"],description:"An internal portal that uses to run daily operations in hospital.",href:"/work/mmo",reverse:!0},{image:"/assets/images/case-study/portfolio/mockup.avif",alt:"Portfolio Mockup",title:"Portfolio",categories:["Research","Web Design","Web Development"],description:"A personal portfolio to showcase my work, process, and approach to web design and development.",href:"/work/portfolio",reverse:!1},{image:"/assets/images/case-study/skssolar/mockup.avif",alt:"SKS Mockup",title:"SKS.Solar",categories:["Research","Web Design","Web Development"],description:"A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED to showcase its history, services and completed project.",href:"/work/sks-solar",reverse:!0}],R=`
  :host {
    background: var(--color-bg-secondary)
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }
`,U=()=>`
  <section>
      <section-title
        props='${JSON.stringify({name:"Case Studies",img:"/assets/icons/sparrow.svg",alt:"Sparrow Logo"})}'
      ></section-title>
            
      <ul>
        ${K.map((i)=>`
              <li>
                <case-study-item
                  props='${JSON.stringify(i)}'
                  ${i.reverse?"reverse":""}
                ></case-study-item>
              </li>
            `).join("")}
      </ul>
  </section>
`;e("section-case-studies",{styles:R,template:U});var X=[{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2021-2022",title:"Software Developer",description:"I landed my first software development role building a hospital management system to manage inventory, POS, and OPD appointments. The system is still running today."},{icon:"/assets/icons/student.svg",alt:"Student Icon",range:"2022-2025",title:"Student",description:"I completed my Bachelor of Science in Computer Science at Assumption University, Thailand. My favorite subject was Computer Architecture."},{icon:"/assets/icons/software-developer.svg",alt:"Software Developer Icon",range:"2025-2026",title:"Software Developer",description:"After graduating, I worked remotely for 6 months as a software developer at an event organizing company in Singapore."},{icon:"/assets/icons/full-time-freelancer.svg",alt:"Web Design & Develop",range:"Present",title:"UX Designer",description:"Today, I've found my passion in UX design. Self-taught through research and hands-on practice, I design intuitive experiences by simplifying complex workflows."}],F=`
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
`,G=()=>`
  <section>
    <div class="container">
      <section-title
        props='${JSON.stringify({name:"Experience Overview",img:"/assets/icons/bird-flying.svg",alt:"Bird Flying Logo"})}'
      ></section-title>

      <ul>
        ${X.map(({icon:i,alt:t,range:o,title:s,description:r})=>`
              <li>
                <app-icon src="${i}" alt="${t}"></app-icon>

                <div class="connector">
                  <span class="dot"></span>
                  <span class="line"></span>
                </div>

                <div class="content">
                  <app-badge
                    props='${JSON.stringify({name:o})}'
                    ${o==="Present"?"":'variant="outline"'}
                  ></app-badge>

                  <h3>${s}</h3>
                  <p>${r}</p>
                </div>
              </li>
            `).join("")}
      </ul>
    </div>
  </section>
`;e("section-timeline",{styles:F,template:G});var V=`
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
`,Y=["width","height","src","alt"],Z=()=>"<img data-forward />";e("app-image",{attrs:Y,styles:V,template:Z});var q=[{title:"Working Man",description:"I'm consistent on one thing: always giving my best. I take pride in doing things properly and take full ownership of everything I do. When I commit to something, I follow through.",icon:"/assets/icons/working-man.svg",alt:"Working Man Icon"},{title:"Detail-oriented Person",description:"I pay close attention to every detail, because the little things matter. I believe the difference between good work and great work lives in the details.",icon:"/assets/icons/man-in-details.svg",alt:"Detail-oriented Person Icon"},{title:"Positive Thinker",description:"A positive mindset helps me create better work and stronger collaborations. I focus on solutions rather than problems. Good energy builds great work.",icon:"/assets/icons/positive-man.svg",alt:"Positive Thinker Icon"}],ee=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: var(--size-heading);
    font-family: var(--font-body);
  }

  .header {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    gap: 0;
  }

  .header img {
    width: 8rem;
    max-width: 12rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12rem;
  }

  li {
    display: flex;
    gap: 5rem;
  }

  article {
    max-width: 50ch;
  }

   span {
    color: var(--color-secondary);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  .icon {
    width: 4.5rem;
    height: auto;
  }

  @media (max-width: 769px) {
    li {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`,ie=()=>`
  <section>
       <section-title
        variant="vertical"
        props='${JSON.stringify({name:"Why hire me?",img:"/assets/icons/owl.svg",alt:"Owl Logo"})}'
      ></section-title>

      <ul>
        ${q.map(({title:i,description:t,icon:o,alt:s},r)=>`
              <li>
                <article>
                  <h3><span>${r+1}.</span> ${i}</h3>
                  <p>${t}</p>
                </article>

                <app-icon variant="large" src="${o}" alt="${s}"></app-icon>
              </li>
            `).join("")}
      </ul>
  </section>
`;e("section-why-hire-me",{styles:ee,template:ie});var te=`
  :host {
    display: block;
    position: relative;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 60ch;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 10%;
    height: 30rem;
    width: auto;
    max-width: 30rem;
  }

  app-link {
    margin-top: 2rem;
  }

  @media (max-width: 992px) {
    .image {
      display: none;
    }
  }
`,oe=`
  <section>
    <div class="container">
       <section-title
       variant="text"
        props='${JSON.stringify({name:"Call me, Singapore",img:"/assets/icons/owl.svg",alt:"Owl Logo"})}'
      ></section-title>



      <article>
        <p>
          I'm looking for a UX Designer role in Singapore where I can simplify
          complex workflows and design intuitive experiences for enterprise
          products.
        </p>

        <p>
          If you're looking for someone who is hardworking, detail-oriented,
          and positive-minded, then I’m the one for you.
        </p>

        <app-link variant="primary" href="/hire-me">
          Let's chat
          <span>&#8629;</span>
        </a>
      </article>

      <img
        class="image"
        src="/assets/icons/merlion.svg"
        alt="Merlion illustration"
      />
    </div>
  </section>
`;e("section-cta",{styles:te,template:oe});var ae=`
  :host {
    display: block;
    width: 100%;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,re=`
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
`;e("line-divider-lower",{styles:ae,template:re});var ne=`
  :host {
    display: block;
    width: 100%;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,le=`
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
  </div>
`;e("line-divider-upper",{styles:ne,template:le});
