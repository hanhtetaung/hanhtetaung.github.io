export class SectionCaseStudies extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="work">
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

        <ul class="work__showcases">
          <li>
            <article class="showcase">
              <img
                src="/assets/images/case-study/knowledge-tree/thumbnail.avif"
                alt="Knowledge Tree Thumbnail"
                class="image"
              />
              <div class="showcase__content">
                <h3>Knowledge Tree</h3>

                <ul class="showcase__category">
                  <li class="badge">Product Design</li>
                  <li class="badge">User Experience</li>
                  <li class="badge">Design System</li>
                </ul>

                <p>
                  A tool to visualize the connections between everyday goods and
                  their fundamental sources based on my knowledge.
                </p>

                <a class="button--outline" href="/work/knowledge-tree"
                  >View Case Study &#8599;</a
                >
              </div>
            </article>
          </li>

          <li>
            <article class="showcase showcase--reverse-direction">
              <img
                src="assets/images/case-study/mmo/thumbnail.avif"
                alt="MMO thumbnail"
                class="image"
              />
              <div class="showcase__content">
                <h3>MMO</h3>

                <ul class="showcase__category">
                  <li class="badge">Simplify complex workflows</li>
                  <li class="badge">Build Prototype</li>
                  <li class="badge">Design System</li>
                </ul>

                <p>
                  An internal portal that uses to run daily operations in
                  hospital.
                </p>

                <a class="button--outline" href="/work/mmo"
                  >View Case Study &#8599;</a
                >
              </div>
            </article>
          </li>

          <li>
            <article class="showcase">
              <img
                src="/assets/images/case-study/portfolio/mockup.avif"
                alt="Portfolio Mockup"
                class="image"
              />
              <div class="showcase__content">
                <h3>Portfolio</h3>

                <ul class="showcase__category">
                  <li class="badge">Research</li>
                  <li class="badge">Web Design</li>
                  <li class="badge">Web Development</li>
                </ul>

                <p>
                  A personal portfolio to showcase my work, process, and
                  approach to web design and development.
                </p>

                <a class="button--outline" href="/work/portfolio"
                  >View Case Study &#8599;</a
                >
              </div>
            </article>
          </li>

          <li>
            <article class="showcase showcase--reverse-direction">
              <img
                src="/assets/images/case-study/skssolar/mockup.avif"
                alt="SKS Mockup"
                class="image"
              />
              <div class="showcase__content">
                <h3>SKS.Solar</h3>

                <ul class="showcase__category">
                  <li class="badge">Research</li>
                  <li class="badge">Web Design</li>
                  <li class="badge">Web Development</li>
                </ul>

                <p>
                  A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED to
                  showcase its history, services and completed project.
                </p>

                <a class="button--outline" href="/work/sks-solar"
                  >View Case Study &#8599;</a
                >
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  }
}

customElements.define("section-case-studies", SectionCaseStudies);
