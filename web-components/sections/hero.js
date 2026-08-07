export class SectionHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="hero">
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
    </section>`;
  }
}

customElements.define("section-hero", SectionHero);
