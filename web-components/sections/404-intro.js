export class Section404Intro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="page-not-found">
        <div class="container">
          <hgroup>
            <h1>404</h1>
            <p>Sorry. Page not found.</p>
          </hgroup>
          <img
            src="/assets/icons/bird-with-flower.svg"
            class="icon--lg"
            alt="Coming Soon"
          />
        </div>
      </section>`;
  }
}

customElements.define("section-404-intro", Section404Intro);
