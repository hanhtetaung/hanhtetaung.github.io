import { define } from "../../lib/define.js";
import { asset, navHref } from "../../lib/asset.js";
import { TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    font-size: var(--font-small);

  }

  header {
    width: min(90%, 144rem);
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 2rem;
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

  @media (max-width: ${TABLET}) {
    .header__navigation {
      gap: 4rem;
    }
  }

  img {
    max-width: 12rem;

    @media (min-width: ${TABLET}) {
      max-width: 15rem;
    }
  }

  a {
    text-decoration: none;
   display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
    color: var(--color-text);
  }


`;

const template = /* html */ `
  <header>
      <a href=${navHref("/")}>
        <img src=${asset("./assets/studio-lah.svg")}
          alt="Logo">
      </a>

      <div>
        <nav>
          <ul>
            <li>
              <a href=${navHref("/")}>Home</a>
            </li>

            <li>
              <a href=${navHref("/#services")}>Services</a>
            </li>
          </ul>
        </nav>

        <a href=${navHref("/#cta")}>
          Contact
        </a>
      </div>
  </header>
`;

define("section-header", { template, styles });
