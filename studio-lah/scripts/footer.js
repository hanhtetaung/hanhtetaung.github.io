import { define } from "../../lib/define.js";
import { asset, navHref } from "../../lib/asset.js";
import { TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    color: #030f03;
  }

  footer {
    width: min(90%, 144rem);
    margin-inline: auto;
  }


  a {
    color: var(--color-text);
    font-size: var(--font-small);

    @media (min-width: ${TABLET}) {
      text-decoration: none;
    }

  }

  img {
    width: 100%;
    height: auto;
  }

  p {
    width: 100%;
    text-align: start;

    @media (min-width: ${TABLET}) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const template = /* html */ `
  <footer>
    <img src=${asset("./assets/studio-lah.svg")} alt="LOGO">
      <p>
          <small>© 2021-2026 StudioLAH. All rights reserved</small>
          <a href="https://hanhtetaung.dev/">Crafted by Han</a>
      </p>
    </footer>
`;

define("section-footer", { template, styles });
