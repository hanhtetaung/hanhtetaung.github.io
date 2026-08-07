export class CaseStudyItem extends HTMLElement {
  static get observedAttributes() {
    return ["image", "alt", "title", "description", "href", "reverse"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) this.render();
  }

  render() {
    const image = this.getAttribute("image") ?? "";
    const alt = this.getAttribute("alt") ?? "";
    const title = this.getAttribute("title") ?? "";
    const description = this.getAttribute("description") ?? "";
    const href = this.getAttribute("href") ?? "#";
    const reverse = this.hasAttribute("reverse");

    // categories passed as a JSON string in the "categories" attribute
    let categories = [];
    try {
      categories = JSON.parse(this.getAttribute("categories") ?? "[]");
    } catch {
      categories = [];
    }

    const categoryItems = categories
      .map((c) => `<li class="badge">${c}</li>`)
      .join("");

    this.innerHTML = /*html*/ `
      <article class="showcase${reverse ? " showcase--reverse-direction" : ""}">
        <img src="${image}" alt="${alt}" class="image" />
        <div class="showcase__content">
          <h3>${title}</h3>

          <ul class="showcase__category">
            ${categoryItems}
          </ul>

          <p>${description}</p>

          <a class="button--outline" href="${href}">View Case Study &#8599;</a>
        </div>
      </article>
    `;
  }
}

customElements.define("case-study-item", CaseStudyItem);
