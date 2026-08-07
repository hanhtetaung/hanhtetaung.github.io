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
                One of the main challenges of the project was creating a visual
                direction that felt modern, clean, and professional while
                maintaining clarity and usability. The redesign focused on
                improving typography, spacing, layout, and overall presentation
                to deliver a more polished and trustworthy user experience.
              </p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-sks-solar-challenge", Section);
