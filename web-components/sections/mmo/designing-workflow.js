export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section class="section">
        <div class="container">
          <h2>Designing workflow</h2>

          <article class="article">
            <div class="article__header">
              <h3>Select similar key insights</h3>
            </div>

            <div class="article__body">
              <ul class="article__list">
                <li>
                  <p>
                    “We sell medicines and medical supplies to patients every
                    day.” -
                    <span class="small--emphasis"> Business owner </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Staff need to check stock before completing a sale." -
                    <span class="small--emphasis"> Pharmacist </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Patients expect a fast checkout with minimal waiting." -
                    <span class="small--emphasis"> Front desk Staff </span>
                  </p>
                </li>
                <li>
                  <p>
                    "Every transaction must be recorded for billing and
                    auditing." -
                    <span class="small--emphasis"> Finance manager </span>
                  </p>
                </li>
                <li>
                  <p>
                    "We need to track who sold each item and when." -
                    <span class="small--emphasis"> Business owner </span>
                  </p>
                </li>
              </ul>
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Sell Medical items</h3>
            </div>

            <div class="article__body">
              <p>
                Start → Scan item barcode → Review total → Receive payment →
                Return Changes → Complete
              </p>
            </div>
          </article>

          <article class="article">
            <div class="article__header">
              <h3>Edge case</h3>
            </div>

            <ul class="article__list">
              <li>
                <p>What if the cashier doesn’t have inficient cash?</p>
              </li>
              <li>
                <p>What if the printer is not working?</p>
              </li>
              <li>
                <p>What if the barcode scanner is not working?</p>
              </li>
            </ul>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-designing-workflow", Section);
