function coerce(value, type) {
  if (value === undefined) {
    if (type === Array) return [];
    if (type === Object) return {};
    if (type === Boolean) return false;
    if (type === Number) return 0;
    return undefined;
  }
  if (type === Boolean) return Boolean(value);
  if (type === Number) return Number(value);
  return value;
}

export function define(
  name,
  { props = {}, attrs = [], styles = "", template, onRender = null },
) {
  const observed = ["props", ...attrs];

  class Component extends HTMLElement {
    static observedAttributes = observed;

    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._cleanup = null;
    }

    connectedCallback() {
      this._render();
    }

    disconnectedCallback() {
      if (typeof this._cleanup === "function") {
        this._cleanup();
      }
      this._cleanup = null;
    }

    attributeChangedCallback() {
      if (this.isConnected) this._render();
    }

    _getProps() {
      let parsed = {};
      const raw = this.getAttribute("props");
      if (raw) {
        try {
          parsed = JSON.parse(raw);
        } catch {
          parsed = {};
        }
      }
      const values = {};
      for (const key of Object.keys(props)) {
        values[key] = coerce(parsed[key], props[key]);
      }
      return values;
    }

    _applyForwardedAttrs() {
      if (attrs.length === 0) return;

      const target = this.shadowRoot.querySelector("[data-forward]");
      if (!target) return;

      for (const key of attrs) {
        if (this.hasAttribute(key)) {
          target.setAttribute(key, this.getAttribute(key));
        } else {
          target.removeAttribute(key);
        }
      }
    }

    _render() {
      if (typeof this._cleanup === "function") {
        this._cleanup();
        this._cleanup = null;
      }

      const values = this._getProps();
      const markup =
        typeof template === "function" ? template(values) : template;
      this.shadowRoot.innerHTML = `<style>${styles}</style>${markup}`;
      this._applyForwardedAttrs();

      if (onRender) {
        const result = onRender(this.shadowRoot, values, this);
        if (typeof result === "function") {
          this._cleanup = result;
        }
      }
    }
  }

  customElements.define(name, Component);
}
