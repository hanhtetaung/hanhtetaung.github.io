import { define } from "../../lib/define.js";
import { asset, navHref } from "../../lib/asset.js";
import { DESKTOP, TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    background: var(--color-primary);
    font-size: var(--size-small);
    color: var(--color-background);
    position: relative;
  }
  
  header {
    width: min(80%, 144rem);
    margin-inline: auto;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
    
    @media (min-width: ${TABLET}) {
      justify-content: end;
      padding-block: 3rem;
    }

  }

  nav {
    width: 100%;
    display: none;

    @media (min-width: ${DESKTOP}) {
      display: block;
    }
  }

  img {
    height: 4.5rem;
    width: auto;
    vertical-align: middle;

    @media (min-width: ${TABLET}) {
      height: 6rem;
    }
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: ${TABLET}) {
      padding-top: 3rem;
      display: flex;
      flex-direction: row;
      gap: 2rem;
      justify-content: center;
    }
      
      @media (min-width: ${DESKTOP}) {
        padding-top: 0;
      display: flex;
      justify-content: space-between;
    }
  }

  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;



    @media (min-width: ${TABLET}) {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    @media (min-width: ${DESKTOP}) {
      gap: 5rem;
    }
  }

  .logo {
    display: inline-block;

    @media (min-width: ${TABLET}) {
      display: inline-block;
      position: absolute;
      left: 50%;
      bottom: -35%;
      transform: translateX(-50%);
      z-index: 3;
    }
  }

  .burger {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 3rem;
    height: 2.2rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    @media (min-width: ${DESKTOP}) {
      display: none;
    }
  }

  .burger span {
    display: block;
    height: 2px;
    width: 100%;
    background: var(--color-background);
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  :host([open]) .burger span:nth-child(1) {
    transform: translateY(0.9rem) rotate(45deg);
  }
  :host([open]) .burger span:nth-child(2) {
    opacity: 0;
  }
  :host([open]) .burger span:nth-child(3) {
    transform: translateY(-0.9rem) rotate(-45deg);
  }

  :host([open]) nav {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    background: var(--color-primary);

    text-align: center;
    padding-bottom: 2rem;

    @media (min-width: ${TABLET}) {
      padding-block: 2rem;
    }
  }
`;

const template = /* html */ `
  <header>
      <a class="logo" href=${navHref("/")}>
        <img src=${asset("./assets/logo.png")}
          alt="Logo">
      </a>

       <button class="burger" aria-label="Toggle menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav>
        <ul>
          <li>
            <ol>
              <li>Home</li>
              <li>About</li>
              <li>Testimonials</li>
            </ol>
          </li>
          <li>
            <ol>
              <li>Registration & Fees</li>
              <li>Call Us</li>
            </ol>
          </li>
        </ul>
      </nav>
  </header>
`;

function script(shadowRoot) {
  const host = shadowRoot.host;
  const burger = shadowRoot.querySelector(".burger");
  const nav = shadowRoot.querySelector("nav");
  burger.addEventListener("click", () => {
    const isOpen = host.hasAttribute("open");
    host.toggleAttribute("open", !isOpen);
    burger.setAttribute("aria-expanded", String(!isOpen));
  });
  nav.addEventListener("click", (e) => {
    if (e.target.closest("li")) {
      host.removeAttribute("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("click", (e) => {
    if (!host.contains(e.target) && !e.composedPath().includes(host)) {
      host.removeAttribute("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && host.hasAttribute("open")) {
      host.removeAttribute("open");
      burger.setAttribute("aria-expanded", "false");
    }
  });
}

define("section-header", { styles, template, onRender: script });
