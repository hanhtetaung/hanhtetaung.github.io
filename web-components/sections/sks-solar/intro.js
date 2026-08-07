export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `  <section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="../assets/images/case-study/skssolar/mockup.avif"
                alt="Final Product Screenshot"
                width="1692"
                height="886"
              />
            </div>
            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>SKS Solar</h1>
              </div>

              <div class="article__body">
                <p>
                  SKS Solar is a solar energy company providing solar products,
                  services, and solutions for homes and businesses across
                  Myanmar.
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
                  </ul>
                </div>

                <a
                  class="button--outline"
                  href="https://skssolarmymyanmar.com/"
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

customElements.define("section-sks-solar-intro", Section);
