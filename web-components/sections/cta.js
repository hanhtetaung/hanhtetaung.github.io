export class SectionCta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="cta">
      <div class="container">
        <div class="section-title">
          <h2>Call me, Singapore</h2>
        </div>

        <article class="cta__article">
          <p class="cta__description">
            I'm looking for a UX Designer role in Singapore where I can simplify
            complex workflows and design intuitive experiences for enterprise
            products.
          </p>

          <p class="cta__description">
            If you're looking for someone who is hardworking, detail-oriented,
            and positive-minded, then I’m the one for you.
          </p>

          <a class="button--primary" href="/hire-me">
            Let's chat
            <span>&#8629;</span>
          </a>
        </article>
        <img
          class="icon--lg"
          src="/assets/icons/merlion.svg"
          alt="Merlion illustration"
        />
      </div>
    </section>`;
  }
}

customElements.define("section-cta", SectionCta);
