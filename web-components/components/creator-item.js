export class Component extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const icon = this.getAttribute("icon") ?? "/assets/icons/default.svg";
    const alt = this.getAttribute("alt") ?? "Icon";
    const url = this.getAttribute("url");
    const name = this.getAttribute("name") ?? "Unknown";

    const credit = url
      ? `<a href="${url}" target="_blank" class="button--link">By ${name}</a>`
      : `<p>By ${name}</p>`;

    this.innerHTML = /*html*/ `
      <div class="credits__content">
        <img class="icon--md" src="${icon}" alt="${alt}" />
        ${credit}
      </div>
    `;
  }
}

customElements.define("creator-item", Component);
