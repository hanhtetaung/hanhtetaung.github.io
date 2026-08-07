export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `  <section class="coming-soon">
        <div class="container">
          <div class="coming-soon__header">
            <hgroup>
              <p class="body">Coming Soon</p>
              <h1>Bamboo</h1>
            </hgroup>

            <img
              src="/assets/icons/cuckoo-cock.svg"
              alt="Coming Soon"
              class="coming-soon__image"
            />
          </div>

          <img
            src="/assets/images/case-study/bamboo/thumbnail.avif"
            class="image"
            alt="Coming Soon"
          />
        </div>
      </section>`;
  }
}

customElements.define("section-bamboo-intro", Section);
