export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <div class="section-title">
            <h2>Challenge</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                One of the main challenges of the project was designing a visual
                direction that felt modern, minimal, and boutique while still
                maintaining clarity and professionalism. The redesign focused on
                creating a strong visual identity through typography, spacing,
                layout, and overall presentation to build a more polished and
                trustworthy user experience.
              </p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-portfolio-challenge", Section);
