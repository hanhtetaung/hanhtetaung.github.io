import { define } from "../../lib/define.js";
import { TABLET } from "./breakpoints.js";
import { asset, navHref } from "../../lib/asset.js";

const styles = /* css */ `
  :host {
    display: block;
    background: var(--color-bg-primary);
    font-size: var(--size-small);
  }

  header {
    width: 80%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1.6rem;
    gap: 5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8rem;
    overflow-y: auto;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .button--primary {
    box-shadow: none;
  }

  @media (max-width: ${TABLET}) {
    .header__navigation {
      gap: 4rem;
    }
  }

  img {
    height: 5rem;
    width: auto;
  }
`;

const template = /* html */ `
  <header>
      <a href=${navHref("/")}>
        <img src=${asset("./assets/images/logo.avif")}
          alt="Logo">
      </a>

      <div>
        <nav>
          <ul>
            <li>
              <a href=${navHref("/")}>Home</a>
            </li>

            <li>
              <a href=${navHref("/about")}>About</a>
            </li>
          </ul>
        </nav>

        <a href=${navHref("/#cta")}>
          Call Us
        </a>
      </div>
  </header>
`;

define("section-header", { template, styles });
