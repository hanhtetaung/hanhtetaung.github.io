export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="case-study__process">
        <div class="container">
          <div class="section-title">
            <h2>Process</h2>
          </div>
        </div>

        <ul class="process-list">
          <li class="process-item">
            <span class="heading--emphasis">1</span>
            <h3>Research</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">2</span>
            <h3>Wireframe</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">3</span>
            <h3>Prototype</h3>
          </li>

          <li class="process-item">
            <span class="heading--emphasis">4</span>
            <h3>Develop</h3>
          </li>

          <li class="process-item process-item--last-child">
            <span class="heading--emphasis">5</span>
            <h3>Deliver</h3>
          </li>
        </ul>

        <div class="container">
          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Research</h3>
              </div>

              <div class="article__body">
                <p>
                  Research ideas and visual references to define the overall
                  direction of the website. This stage focused on exploring
                  modern layouts, typography, spacing, and clean visual
                  aesthetics to establish a clear and professional visual
                  foundation.
                </p>

                <img
                  src="../assets/images/case-study/skssolar/inspiration.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Wireframe</h3>
              </div>

              <div class="article__body">
                <p>
                  Plan the structure and layout of the website through
                  low-fidelity wireframes. This stage focused on content
                  hierarchy, storytelling flow, and user navigation before
                  moving into visual design.
                </p>

                <img
                  src="../assets/images/case-study/skssolar/wireframe.avif"
                  alt="Wireframe Screenshot"
                  width="1398"
                  height="1366"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Prototype</h3>
              </div>

              <div class="article__body">
                <p>
                  Build the design system and craft the polished visual
                  interface. This stage focused on transforming the wireframes
                  into final responsive designs with complete visual styling,
                  reusable components, refined layouts, and overall user
                  experience.
                </p>

                <figure>
                  <figcaption class="small--emphasis">
                    Design Foundation
                  </figcaption>
                  <img
                    src="../assets/images/case-study/skssolar/design-foundation.avif"
                    alt="Design Foundation Screenshot"
                    width="1474"
                    height="864"
                  />
                </figure>

                <figure>
                  <figcaption class="small--emphasis">Final Design</figcaption>
                  <img
                    src="../assets/images/case-study/skssolar/final-design.avif"
                    alt="Final Design"
                    width="1402"
                    height="1378"
                  />
                </figure>
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Develop & Deliver</h3>
              </div>

              <div class="article__body">
                <p>
                  Translate the approved design into a responsive website while
                  maintaining visual consistency across all screen sizes. The
                  project was managed with GitHub and deployed automatically
                  through GitHub Pages and GitHub Actions.
                </p>

                <div>
                  <p>Tech Stack</p>
                  <ul class="article__list">
                    <li>
                      <p>HTML</p>
                    </li>
                    <li><p>CSS</p></li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("section-sks-solar-process", Section);
