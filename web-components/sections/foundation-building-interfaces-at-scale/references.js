export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="reference">
        <div class="container">
          <h2>References</h2>
          <ul>
            <li>
              <a
                href="https://atomicdesign.bradfrost.com/chapter-2/"
                target="_blank"
                class="button--link"
                >Atomic Design Principle
              </a>
            </li>
            <li>
              <a
                href="https://playbook.ebay.com/foundations"
                target="_blank"
                class="button--link"
                >ebay Playbook</a
              >
            </li>
            <li>
              <a
                href="https://www.designsystem.tech.gov.sg/foundations/"
                class="button--link"
                target="_blank"
              >
                SGDS Design
              </a>
            </li>
            <li>
              <a
                href="https://www.strava.com/"
                target="_blank"
                class="button--link"
              >
                Strava
              </a>
            </li>
          </ul>
        </div>
      </section>`;
  }
}

customElements.define(
  "section-foundation-building-interfaces-at-scale-references",
  Section,
);
