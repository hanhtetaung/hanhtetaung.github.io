import { define } from "../../define.js";

import "../../components/app-logo.js";
import { asset } from "../../asset.js";
import { DESKTOP, LARGE, TABLET } from "../../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    height: 70rem;
    position: relative;
    overflow: hidden;
    margin-top: 20rem;
    margin-bottom: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5rem;

    @media (min-width: ${TABLET}) {
      height: 90%;
    }

    @media (min-width: ${LARGE}) {
      position: relative;
      overflow: hidden;
    }
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    border-bottom: 1px solid var(--color-text);
    padding-block: 2rem;
    overflow: scroll;

    @media (min-width: ${TABLET}) {
      max-width: 50%;
      gap: 5rem;
    }
  }

  img {
    position: absolute;
    height: 40rem;
    z-index: -1;
    opacity: 0.1;
    left: -0%;
    top: 30%;

    @media (min-width: ${TABLET}) {
      left: auto;
      right: 20%;
      top: 20rem;
    }

    @media (min-width: ${DESKTOP}) {
      opacity: 1;
    }
  }

  button {
    background: var(--color-transparent);
    color: var(--color-text);
    border: 1px solid var(--color-text);
    padding-block: 0.5rem;
    padding-inline: 2rem;

    &:hover {
      cursor: pointer;
    }
  }

  button.copied {
    background: var(--color-primary);
    color: var(--color-bg, #fff);
  }

  a {
    text-decoration: none;
    color: var(--color-text);
  }
`;

const template = /* html */ `
<section>
  <img src="./assets/images/home/red-telephone-box.avif" alt="Red Telephone Box">

  <hgroup>
    <p>[ Let's Craft ]</p>
    <h2>You bring the idea <br>
          I craft the website
      </h2>
  </hgroup>

  <ul>
    <li>
      <app-logo src=${asset("./assets/icons/email.svg")} alt="Email icon"></app-logo>
      <a href="mailto:hanhtetaung.dev@gmail.com" target="_blank">hanhtetaung.dev@gmail.com</a>
      <button id="copyBtn">Copy</button>
    </li>
    <li>
      <app-logo src=${asset("./assets/icons/linkedin.svg")} alt="Linkedin icon"></app-logo>
      <a href="https://www.linkedin.com/in/han-htet-aung/" target="_blank">in/han-htet-aung</a>
    </li>
  </ul>
</section>
`;

function script(shadowRoot) {
  const btn = shadowRoot.getElementById("copyBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText("hanhtetaung.dev@gmail.com").then(() => {
      const originalText = btn.textContent;
      btn.textContent = "Copied!";
      btn.classList.add("copied");

      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove("copied");
      }, 1500);
    });
  });
}

define("section-cta", { styles, template, onRender: script });
