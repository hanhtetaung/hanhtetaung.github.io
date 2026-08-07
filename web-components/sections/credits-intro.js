export class SectionCreditsIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="credits">
    <div class="container">
      <h1>Credits</h1>
      <p>Thanks to the creators behind the icons.</p>
    </div>
  </section>`;
  }
}

customElements.define("section-credits-intro", SectionCreditsIntro);
