export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section>
        <div class="container">
          <div class="section-title">
            <h2>Result</h2>
          </div>

          <article class="article">
            <div class="article__body">
              <p>
                The project resulted in a modern, responsive, and professional
                SKS Solar website with a stronger visual identity and improved
                user experience. The final website also achieved outstanding
                Google Lighthouse performance with optimized accessibility,
                responsiveness, and loading performance.
              </p>
              <a
                href="https://skssolarmyMyanmar.com/"
                target="_blank"
                class="button--outline"
                >View Live Website &#8599;</a
              >

              <div class="grid-2-col">
                <img
                  src="../assets/images/case-study/skssolar/mockup.avif"
                  alt="Mockup Photo"
                  width="1692"
                  height="886"
                />
                <img
                  src="../assets/images/case-study/skssolar/lighthouse.avif"
                  alt="Lighthouse Photo"
                  width="960"
                  height="1028"
                />
              </div>
            </div>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-sks-solar-result", Section);
