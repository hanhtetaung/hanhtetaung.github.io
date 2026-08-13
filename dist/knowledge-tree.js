function h(o,a){if(o===void 0){if(a===Array)return[];if(a===Object)return{};if(a===Boolean)return!1;if(a===Number)return 0;return}if(a===Boolean)return Boolean(o);if(a===Number)return Number(o);return o}function e(o,{props:a={},attrs:n=[],styles:p="",template:l}){let m=["props",...n];class c extends HTMLElement{static observedAttributes=m;constructor(){super();this.attachShadow({mode:"open"})}connectedCallback(){this._render()}attributeChangedCallback(){if(this.isConnected)this._render()}_getProps(){let i={},r=this.getAttribute("props");if(r)try{i=JSON.parse(r)}catch{i={}}let d={};for(let s of Object.keys(a))d[s]=h(i[s],a[s]);return d}_applyForwardedAttrs(){if(n.length===0)return;let i=this.shadowRoot.querySelector("[data-forward]");if(!i)return;for(let r of n)if(this.hasAttribute(r))i.setAttribute(r,this.getAttribute(r));else i.removeAttribute(r)}_render(){let i=this._getProps(),r=typeof l==="function"?l(i):l;this.shadowRoot.innerHTML=`<style>${p}</style>${r}`,this._applyForwardedAttrs()}}customElements.define(o,c)}var g=`
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
`,f=["href","target","rel","download"],u=`
  <a data-forward><slot></slot></a>
`;e("app-link",{attrs:f,styles:g,template:u});var b=`
  :host {
    display: block;
  }

  img {
    max-height: 7rem;
    width: auto;
  }
`,v=["width","height","src","alt"],w=()=>"<img data-forward />";e("app-logo",{attrs:v,styles:b,template:w});var t="769px",U="992px";var y=`
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

  @media (max-width: ${t}) {
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

   @media (max-width: ${t}) {
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

    @media (max-width: ${t}) {
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
            ${x.map((o)=>`
                <li>
                    <app-link variant="sitemap" href=${o.href} >${o.name}</app-link>
                </li>
            `).join("")}
        </ol>
    </nav>
`;e("footer-nav",{styles:S,template:$});var A=`
  :host {
   display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;

   @media (max-width: ${t}) {
        flex-direction: column-reverse;
        gap: 2rem;
        border: none;
        padding-top: 0;
   }
  }

  p {
    margin: 0;

    @media (max-width: ${t}) {
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
    

    @media (max-width: ${t}) {
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
`;e("footer-copyright",{styles:A,template:H});var T=`
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

  @media (max-width: ${t}) {
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
`;e("section-footer",{styles:T,template:z});var P=`
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
`,C=["width","height","src","alt"],E=()=>"<img data-forward />";e("app-image",{attrs:C,styles:P,template:E});var O=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 3rem;

    @media (max-width: ${t}) {
      flex-direction: column;
    }
  }

  h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 2rem;
  }

  article {
    max-width: 40ch;
  }

    span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
`,_=`
  <section>
    <app-image
      variant="large"
      src="/assets/images/case-study/knowledge-tree/thumbnail.avif"
      alt="Final Product Screenshot"
      width="1692"
      height="886"
    ></app-image>

    <article>
      <span>Case Study</span>
      <h1>Knowledge Tree</h1>

      <p>
        A tool to visualize the connections between everyday goods and
        their fundamental sources based on my knowledge.
      </p>

      <span>Scope:</span>
      <p>Idea → Product</p>

      <app-link
        variant="secondary"
        href="/knowledge-tree"
        target="_blank"
        >View Live Website</app-link>
    </article>
  </section>
`;e("section-knowledge-tree-intro",{styles:O,template:_});var N=`
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
`,L={name:String,img:String,alt:String},j=({name:o,img:a="",alt:n=""})=>`
    <h2>${o}</h2>
    <img
        src=${a}
        alt=${n}
        height="36"
        width="76"
    />
`;e("section-title",{props:L,styles:N,template:j});var F=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin-block: 2rem;
  }
`,M=`
  <section>
    <section-title
        variant="text"
        props='{"name": "Overview"}'
      ></section-title>

      <article>
        <p>
          The knowledge tree is built around two primary node types:
          <b>Sources</b> and <b>Goods</b>.
        </p>

        <p>
          Sources are the fundamental sources that all goods come from.
          The current version includes <b> seven foundational sources</b>.
        </p>

        <p>Goods are daily products.</p>
        
        <ul>
          <li>Can contain sources or other goods.
          </li>
          <li>Can be used to make other goods.</li>
        </ul>
      </article>
  </section>
`;e("section-knowledge-tree-overview",{styles:F,template:M});var B=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin: 0;
  }

  ul {
    margin: 0;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
    margin-bottom: 1rem;
  }

  article {
    margin-bottom: 3rem;
  }

  code {
    display: block;
    margin-bottom: 2rem;
  }
`,G=`
  <section>
    <section-title
        variant="text"
        props='{"name": "Design Foundation"}'
      ></section-title>

          <app-image
            variant="large"
            src="/assets/images/case-study/knowledge-tree/foundation.avif"
            alt="Wireframe Screenshot"
          ></app-image>


          <article>
            <h3>Data Structure</h3>

            <p><b>Source</b></p>
            <code> { "id": "name", "type": "source" } </code>

            <p>
              <b>Good :</b> The components field references either
              source nodes or other goods
            </p>

            <code>
              { "id": "name", "type": "good", "components": ["id",
              "id", "id"] }
            </code>
          </article>

          <article>
            <h3>Tech Stacks</h3>
            <ul>
              <li>Figma</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>Sonnet 5, Quwen3.7-Plus</li>
            </ul>

            <p>
              <b>Hosted on:</b>
              <app-link
                variant="underline"
                href="https://github.com/hanhtetaung/hanhtetaung.github.io/tree/main/knowledge-tree"
                target="_blank"
                >Github</app-link>
            </p>
          </article>
  </section>
`;e("section-knowledge-tree-building-block",{styles:B,template:G});var K=`
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${t}) {
        display: block;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-heading);
    width: fit-content;
    height: fit-content;
  }

  :host([variant="block"]) {
    display: block;
  }
`,I={title:String},D=({title:o})=>`
        <h3>${o}</h3>

        <article>
            <slot></slot>
        </article>
`;e("app-article-paragraph",{props:I,styles:K,template:D});var V=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }
`,W=`
  <section>
     <section-title
        variant="text"
        props='{"name": "Need One Interface"}'
      ></section-title>
      <p>
        The interface has two main areas: a <b>Center Panel</b> to
        visualize the knowledge tree and a <b> Right Panel</b> to
        display information about the selected node.
      </p>

      <ul>
        <li>
          <app-article-paragraph props='{ "title": "Default State"}'>
            <p>
              The center panel displays the entire knowledge tree. Sources
              are shown as blue nodes, while Goods are shown as green nodes.
              Every node is clickable, and the right panel remains empty
              until a node is selected.
            </p>

            <app-image
              variant="medium"
              src="/assets/images/case-study/knowledge-tree/default-state.avif"
              alt="Inspiration Collection"
              width="1398"
              height="1236"
            ></app-image>
          </app-article-paragraph>
        </li>

        <li>
            <app-article-paragraph props='{ "title": "Selecting a Source Node"}'>
         <p>
              When a source is selected, the center panel highlights its
              connected goods. The right panel displays the source name, and
              a list of goods made from that source.
            </p>

            <app-image
            variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-source-node.avif"
              alt="Wireframe Screenshot"
              width="1398"
              height="1366"
            ></app-image>

      </app-article-paragraph>
        </li>
        <li>
           <app-article-paragraph props='{ "title": "Selecting a Good Node"}'>
         <p>
              A good can be made directly from sources or from other goods.
              When a good is selected, the right panel displays its sources,
              ingredients (if any), and the goods that use it (if any).
            </p>

            <app-image
              variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-1.avif"
              alt="Design Foundation Screenshot"
              width="1474"
              height="864"
            ></app-image>

            <app-image
              variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-2.avif"
              alt="Design Foundation Screenshot"
              width="1474"
              height="864"
            ></app-image>
      </app-article-paragraph>
        </li>
      </ul>

    
     

     
  </section>
`;e("section-knowledge-tree-need-one-interface",{styles:V,template:W});var J=`
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }
`,R=`
  <section>
    <section-title
        variant="text"
        props='{"name": "Continue to Expand the Knowledge Tree"}'
      ></section-title>

      <article>
          <p>
            This project is designed to grow over time by adding more
            sources, goods, and their relationships. As the knowledge tree
            expands, it will provide a more complete view of how everyday
            products are connected.
          </p>
      </article>
  </section>
`;e("section-knowledge-tree-conclusion",{styles:J,template:R});
