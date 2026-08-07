export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <div class="section-title">
            <h2>Background</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                This project was created as a personal portfolio website to
                showcase selected projects and experience in a modern,
                responsive, and boutique-style presentation. The goal was to
                create a clean and polished experience with clear structure,
                minimal visuals, and a strong professional presence.
              </p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-portfolio-background", Section);
