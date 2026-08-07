export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="about">
        <div class="container">
          <h1>About</h1>
          <article class="article">
            <img
              class="logo"
              src="assets/images/about-profile.avif"
              alt="profile"
              height="162"
              width="169"
            />

            <div class="article__body">
              <p>
                I'm Han Htet Aung, an UX Engineer who loves creating unique
                experiences on the web.
              </p>

              <p>I see patterns in chaos.</p>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-about-intro", Section);
