export class SectionThankYouIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="thank-you">
    <div class="container">
        <h1>Thank you!</h1>
        <p class="thank-you__description">
        Thank you for sending me email. I will get back to you later today. Have a
        good day!
        </p>

        <a class="button--link" href="/">
        Back to home
        </a>
    </div>
    </section>`;
  }
}

customElements.define("section-thank-you-intro", SectionThankYouIntro);
