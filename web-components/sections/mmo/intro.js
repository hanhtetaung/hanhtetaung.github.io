export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article article--hero">
            <div class="article__media">
              <img
                src="/assets/images/case-study/mmo/thumbnail.avif"
                alt="MMO thumbnail"
                class="image"
                width="1692"
                height="886"
              />
            </div>

            <div class="article__content">
              <div class="article__header">
                <span class="small--emphasis">Case Study</span>
                <h1>MMO</h1>
              </div>

              <div class="article__body">
                <p>
                  An internal portal that uses to run daily operations in
                  hospital.
                </p>

                <div>
                  <span class="small--emphasis">Role:</span>
                  <p>UX Designer</p>
                </div>

                <div>
                  <span class="small--emphasis">Scope: </span>
                  <ul class="article__list">
                    <li>
                      <p>Gather requirements</p>
                    </li>
                    <li>
                      <p>Simplify complex workflows</p>
                    </li>
                    <li>
                      <p>Build Prototype</p>
                    </li>
                    <li>
                      <p>Design System</p>
                    </li>
                    <li>
                      <p>Developer Handoff</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-intro", Section);
