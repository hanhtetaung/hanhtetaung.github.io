export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>About the Business</h2>
            </div>

            <div class="article__body">
              <p>
                MMO hospital is a private hospital. With over 50 staff including
                doctors, nurse, pharmacist, it provides outpatient and inpatient
                care, emergency services, pharmacy services, and medicine
                inventory management.
              </p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-about", Section);
