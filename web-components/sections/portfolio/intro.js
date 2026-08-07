export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="../assets/images/case-study/portfolio/mockup.avif"
                alt="Final Product Screenshot"
                width="1692"
                height="886"
              />
            </div>
            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>Portfolio</h1>
              </div>

              <div class="article__body">
                <p>
                  A personal portfolio website focused on creating a modern,
                  responsive, and minimal experience that showcases projects,
                  skills, and professional identity with clarity and simplicity.
                </p>

                <div>
                  <span class="small--emphasis">Role:</span>
                  <p>Web Designer & Developer</p>
                </div>

                <div>
                  <span class="small--emphasis">Scope: </span>
                  <ul class="article__list">
                    <li>
                      <p>Revamp Website</p>
                    </li>
                    <li>
                      <p>User Reserach</p>
                    </li>
                  </ul>
                </div>

                <a
                  class="button--outline"
                  href="https://hanhtetaung.dev/"
                  target="_blank"
                  >View Live Website</a
                >
              </div>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-portfolio-intro", Section);
