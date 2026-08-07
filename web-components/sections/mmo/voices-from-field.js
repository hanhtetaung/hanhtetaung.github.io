export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ ` <section class="section">
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>Voices from the field</h2>
            </div>

            <ul class="article__list">
              <li>
                <p>
                  “It takes days to prepare monthly sales and inventory
                  reports.” -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
              <li>
                <p>
                  “Patient registration takes too many steps.” -
                  <span class="small--emphasis"> Front desk staff </span>
                </p>
              </li>
              <li>
                <p>
                  "I need an activity history for every transaction." -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
              <li>
                <p>
                  “I hate searching for medicines every time.” -
                  <span class="small--emphasis"> Pharmacist </span>
                </p>
              </li>
              <li>
                <p>
                  “It's difficult to trace who adjusted stock.” -
                  <span class="small--emphasis"> Warehouse staff </span>
                </p>
              </li>
              <li>
                <p>
                  “I want different permissions for different roles.” -
                  <span class="small--emphasis"> Business owner </span>
                </p>
              </li>
            </ul>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-voices-from-field", Section);
