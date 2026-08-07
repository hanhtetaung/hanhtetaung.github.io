export class SectionQuote extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="quote">
        <div class="container">
          <blockquote class="title">
            " What I hear, I forget.<br />
            What I see, I remember.<br />
            What I do I understand" <br />
            — Confucius
          </blockquote>
        </div>
      </section>`;
  }
}

customElements.define("section-quote", SectionQuote);
