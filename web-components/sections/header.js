import { define } from "../define.js";
import "../components/app-link.js";
import "../components/app-logo.js";
import { PHONE } from "../breakpoints.js";
import { asset, navHref } from "../asset.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-top: 1rem;
    background: var(--color-bg-primary);
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

  @media (max-width: ${PHONE}) {
    .header__navigation {
      gap: 4rem;
    }
  }
`;

const template = /* html */ `
  <header>
      <app-link variant="plain" href=${navHref("/")}>
        <app-logo
          src=${asset("./assets/images/logo.avif")}
          alt="Logo"
        ></app-logo>
      </app-link>

      <div>
        <nav>
          <ul>
            <li>
              <app-link variant="plain" href=${navHref("/")}>Home</app-link>
            </li>

            <li>
              <app-link variant="plain" href=${navHref("/about")}>About</app-link>
            </li>
          </ul>
        </nav>

        <app-link variant="primary" href=${navHref("/hire-me")}>
          Let's chat &#8629;
        </app-link>
      </div>
  </header>
`;

define("section-header", { template, styles });
