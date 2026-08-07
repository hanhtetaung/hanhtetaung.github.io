export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <div class="section-title">
            <h2>Building Interfaces for selling medical items workflow</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                To complete the pirmary workflow, four interfaces are needed at
                first.
              </p>
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>1st interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Start sale, Review current staff. Review printer status,
                  barcode status. Clicking start sale create new unique id and
                  redirect to next screen with this id.
                </p>

                <img
                  src="/assets/images/case-study/mmo/1st-stage.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>2nd interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Scan barcode item, enter manual barcode item, review total,
                  items scanned, review total, enter cash received, confirm
                  payment. Confirm payment go to 3rd interface.
                </p>

                <img
                  src="/assets/images/case-study/mmo/2nd-stage.avif"
                  alt="Wireframe Screenshot"
                  width="1398"
                  height="1366"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>3rd interface</h3>
              </div>

              <div class="article__body">
                <p>
                  Review changes, review the receipt printed, Complete sale →
                  print receipt. it go to final one.
                </p>

                <img
                  src="/assets/images/case-study/mmo/3rd-stage.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>final one</h3>
              </div>

              <div class="article__body">
                <p>Show complete sale, Go back to home or Next Sale.</p>
                <img
                  src="/assets/images/case-study/mmo/final-stage.avif"
                  alt="Design Foundation Screenshot"
                  width="1474"
                  height="864"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-building-interfaces", Section);
