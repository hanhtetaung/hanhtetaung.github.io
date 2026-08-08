const styles = /* css */ `
    :host { 
        --local-bg: transparent;
        --local-color: var(--color-text);
        --local-border: 1px solid var(--local-color);
        --local-decoration: none;

        display: inline-block;
    }

    a {
        display: inline-flex;
        gap: 0.5rem;
        background: var(--local-bg);
        color: var(--local-color);
        border: var(--local-border);
        text-decoration: var(--local-decoration);
        padding-block: 1rem;
        padding-inline: 2rem;
        white-space: nowrap;
    }

    :host([variant="primary"]) { 
        --local-bg: var(--color-primary);
        --local-color: var(--color-bg-primary);
    }

    :host([variant="secondary"]) { 
        --local-color: var(--color-secondary);
    }

    :host([variant="underline"]) { 
        --local-color: var(--color-secondary);
        --local-border: none;
        --local-decoration: underline;
    }

    :host([variant="plain"]) { 
        --local-border: none;
    }
`;

const template = /* html */ `
    <a><slot></slot></a>
`;

class AppLink extends HTMLElement {
  static forwardedAttributes = ["href", "target", "rel", "download"];

  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML =
      `<style>${styles}</style>${template}`;
  }

  connectedCallback() {
    const link = this.shadowRoot.querySelector("a");
    for (const name of AppLink.forwardedAttributes) {
      if (this.hasAttribute(name))
        link.setAttribute(name, this.getAttribute(name));
    }
  }
}

customElements.define("app-link", AppLink);
