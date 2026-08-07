export class SectionWritings extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="writings">
      <div class="container">
        <div class="section-title">
          <h2>Writings</h2>
          <img
            src="/assets/icons/bird-flying.svg"
            alt="Timeline Logo"
            class="icon"
            height="36"
            width="76"
          />
        </div>
      </div>
    </section>`;
  }
}

customElements.define("section-writings", SectionWritings);
