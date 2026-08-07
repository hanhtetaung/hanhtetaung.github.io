export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Keep Listening the voices</h2>
            </div>

            <div class="article__body">
              <p>The system continues to grow as users' needs change.</p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-conclusion", Section);
