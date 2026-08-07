export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section>
        <div class="container">
          <article class="article">
            <div class="article__header">
              <h2>100+ workflows in the system</h2>
            </div>

            <ul class="article__list">
              <li>
                <p>Register new employee</p>
              </li>
              <li>
                <p>Generate Inventory Report</p>
              </li>
              <li>
                <p>Request items from warehouse</p>
              </li>
            </ul>
          </article>
        </div>
      </section>`;
  }
}

customElements.define("section-mmo-multiple-workflows", Section);
