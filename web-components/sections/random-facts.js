export class SectionRandomFacts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="random-facts">
        <div class="container">
          <div class="section-title">
            <h2>Random Facts</h2>
            <img
              class="icon"
              src="/assets/icons/birds-singing.svg"
              alt="Random Fact Logo"
              height="24"
              width="24"
            />
          </div>

          <ul class="random-facts__list">
            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/bird-watching.svg"
                  alt="Watching Bird"
                />
                <figcaption class="body">I love birds</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/seafood.svg"
                  alt="Seafood"
                />
                <figcaption class="body">I’m allergic to seafood</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/travelling.svg"
                  alt="Travelling"
                />
                <figcaption class="body">I enjoy travelling</figcaption>
              </figure>
            </li>

            <li>
              <figure>
                <img
                  class="icon--lg"
                  src="/assets/icons/running.svg"
                  alt="Running"
                />
                <figcaption class="body">I like running</figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>`;
  }
}

customElements.define("section-random-facts", SectionRandomFacts);
