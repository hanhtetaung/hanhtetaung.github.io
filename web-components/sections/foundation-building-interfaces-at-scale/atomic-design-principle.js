export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section id="atomic-design-principle">
        <div class="container">
          <article class="article">
            <h2>Atomic Design Principle</h2>

            <div class="article__body">
              <p>
                Follow Atomic Design principles to create scalable, reusable,
                and maintainable interface building blocks.
              </p>

              <img
                src="/assets/images/foundation-building-software/atomic-design.avif"
                alt=""
              />
            </div>
          </article>

          <div class="stack">
            <article class="article article--row">
              <div class="article__header">
                <h3>Page</h3>
              </div>
              <div class="article__body">
                <p>
                  A complete interface that composed of multiple organisms.
                  Let’s break down the Strava Activities interface into
                  organisms → molecules → atoms → subatomic particles. <br />For
                  example, the Strava Activities page contains four organisms.
                </p>

                <img
                  src="/assets/images/foundation-building-software/page.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>

            <article class="article article--row">
              <div class="article__header">
                <h3>Organism</h3>
              </div>
              <div class="article__body">
                <p>
                  A distinct section of an interface composed of molecules,
                  atoms, subatomic particles or even other organisms. The
                  following diagram shows an organism made up of three
                  molecules, one atom and one other organism.
                </p>

                <img
                  src="/assets/images/foundation-building-software/organisms.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Molecule</h3>
              </div>
              <div class="article__body">
                <p>
                  A simple interface element composed of atoms or subatomic
                  particles as well as other molecules. The example below shows
                  how six atoms combine to form a molecule.
                </p>

                <img
                  src="/assets/images/foundation-building-software/molecule.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Atom</h3>
              </div>
              <div class="article__body">
                <p>
                  A foundational building block of an interface composed of
                  subatomic particles.The illustration below shows an atom
                  composed of three subatomic particles.
                </p>

                <img
                  src="/assets/images/foundation-building-software/atom.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
            <article class="article article--row">
              <div class="article__header">
                <h3>Subatomic particle</h3>
              </div>
              <div class="article__body">
                <p>Smallest unit of the system, represents design token.</p>

                <img
                  src="/assets/images/foundation-building-software/subatomic-particles.avif"
                  alt="Inspiration Collection"
                  width="1398"
                  height="1236"
                />
              </div>
            </article>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("section-atomic-design-principle", Section);
