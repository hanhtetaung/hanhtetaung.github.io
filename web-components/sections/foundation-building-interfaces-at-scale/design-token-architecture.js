export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section id="design-token-architecture">
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Design Token Architecture</h2>
            </div>

            <div class="article__body">
              <p>A two-tier architecture is enough: Primitive and Semantic.</p>

              <img
                src="/assets/images/foundation-building-software/token-architecture.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Single Source of Truth</h3>
            </div>
            <div class="article__body">
              <p>
                Use semantic tokens to define all interface building blocks. The
                figma uses slash as separators with all letters lowercase, but
                can be converted to a preferred platform convention like dashes
                or camelCase.
              </p>

              <img
                src="/assets/images/foundation-building-software/single-source-of-truth.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Theming</h3>
            </div>
            <div class="article__body">
              <p>
                A token can point to different value related to mode and when
                the mode changes, the reference values are updated
                automatically.
              </p>

              <img
                src="/assets/images/foundation-building-software/theming.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Token Structure</h3>
            </div>
            <div class="article__body">
              <p>Tokens are named in two parts:</p>

              <ol>
                <li>Base</li>
                <li>Modifier (optional)</li>
              </ol>
              <img
                src="/assets/images/foundation-building-software/token-structure.avif"
                alt=""
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Design Token Anatomy</h3>
            </div>
            <div class="article__body">
              <p>
                The diagram below shows how primitive, and semantic tokens
                combine base, and modifier.
              </p>

              <img
                src="/assets/images/foundation-building-software/design-token-anatomy.avif"
                alt="Design Token Anatomy"
              />
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Applying Design Tokens</h3>
            </div>
            <div class="article__body">
              <p>
                Here's an example of how semantic tokens are used throughout a
                strava activities page.
              </p>

              <img
                src="/assets/images/foundation-building-software/applying-token.avif"
                alt="Applying Token photo"
              />
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-design-token-architecture", Section);
