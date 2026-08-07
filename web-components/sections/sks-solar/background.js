export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="case-study__background">
        <div class="container">
          <div class="section-title">
            <h2>Background</h2>
          </div>

          <p>
            This project was created for SKS Solar to redesign and redevelop the
            company’s outdated website into a more professional and modern
            experience. The goal was to create a clean, responsive, and
            trustworthy presentation that showcases the company’s solar
            products, services, and completed projects with simple navigation,
            clear structure, and minimal visuals.
          </p>
        </div>
      </section>`;
  }
}

customElements.define("section-sks-solar-background", Section);
