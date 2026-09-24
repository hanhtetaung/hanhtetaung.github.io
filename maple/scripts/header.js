import { define } from "../../lib/define.js";
import { asset, navHref } from "../../lib/asset.js";
import { TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    background: var(--color-primary);
    font-size: var(--size-small);
    color: var(--color-background);
  }
  
  header {
    width: min(80%, 144rem);
    margin-inline: auto;
    
    padding-block: 3rem;
    display: flex;
    justify-content: end;

    position: relative;
    
  }

  nav {
    width: 100%;
    display: none;

    @media (min-width: ${TABLET}) {
      display: block;
    }
  }

  img {
    height: 6rem;
    width: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    list-style-type: none;
  }

  ol {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    gap: 5rem;
  }

  a {
    display: inline-block;
    position: absolute;
    left: 50%;
    bottom: -35%;
    transform: translateX(-50%);
  }
`;

const template = /* html */ `
  <header>
      <a href=${navHref("/")}>
        <img src=${asset("./assets/logo.png")}
          alt="Logo">
      </a>

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

define("section-header", { template, styles });
