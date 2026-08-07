export class SectionWhyHireMe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="why-hire-me">
      <div class="container">
        <div class="section-title">
          <img
            src="/assets/icons/owl.svg"
            alt=""
            class="icon"
            height="125"
            width="100"
          />
          <h2>Why Hire me?</h2>
        </div>

        <ul class="why-hire-me__list">
          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3><span class="heading--emphasis">1.</span> Working Man</h3>
                <p>
                  I'm consistent on one thing: always giving my best. I take
                  pride in doing things properly and take full ownership of
                  everything I do. When I commit to something, I follow through.
                </p>
              </div>

              <img
                class="icon--lg"
                src="/assets/icons/working-man.svg"
                alt="Working Man Icon"
                width="48"
                height="48"
              />
            </article>
          </li>

          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3>
                  <span class="heading--emphasis">2.</span> Detail-oriented
                  Person
                </h3>
                <p>
                  I pay close attention to every detail, because the little
                  things matter. I believe the difference between good work and
                  great work lives in the details.
                </p>
              </div>
              <img
                class="icon--lg"
                src="/assets/icons/man-in-details.svg"
                alt="Detail-oriented Person Icon"
                width="48"
                height="48"
              />
            </article>
          </li>

          <li class="why-hire-me__item">
            <article class="why-hire-me__article">
              <div class="why-hire-me__content">
                <h3>
                  <span class="heading--emphasis">3.</span> Positive Thinker
                </h3>
                <p class="why-hire-me__description">
                  A positive mindset helps me create better work and stronger
                  collaborations. I focus on solutions rather than problems.
                  Good energy builds great work.
                </p>
              </div>
              <img
                class="icon--lg"
                src="/assets/icons/positive-man.svg"
                alt="Positive Thinker Icon"
                width="48"
                height="48"
              />
            </article>
          </li>
        </ul>
      </div>
    </section>`;
  }
}

customElements.define("section-why-hire-me", SectionWhyHireMe);
