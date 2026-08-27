import { asset, navHref } from "../asset.js";
import { TABLET } from "../breakpoints.js";
import { define } from "../define.js";

const styles = /* css */ `
  :host {
   display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;
    margin-top: 3rem;

   @media (max-width: ${TABLET}) {
        flex-direction: column-reverse;
        gap: 2rem;
        border: none;
        padding-top: 0;
   }
  }

  p {
    margin: 0;
    border-top: 1px solid var(--color-text);
    padding-top: 1rem;

    @media (min-width: ${TABLET}) {
      border: none;
      padding-top: none;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }

  nav {
    display: none;

    @media (min-width: ${TABLET}) {
      display: block;
    }
  }

  span {
    display: none;
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    

    @media (max-width: ${TABLET}) {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`;

const template = () => /* html */ `
      <p>
        © Han Htet Aung 2026
      </p>

      <nav>
        <span>Find me on:</span>
        <ul>
              <li>
                  <app-link href="mailto:hanhtetaung.dev@gmail.com" variant="image">
                  <img
                      src=${asset("./assets/icons/email.svg")}
                      alt="Email Icon"
                  />
                  </app-link>
              </li>
              <li>
                  <app-link
                  href="https://github.com/hanhtetaung/"
                  target="_blank"
                  rel="noopener"
                  variant="image"
                  >
                  <img
                      src=${asset("./assets/icons/github.svg")}
                      alt="Github Icon"
                  />
                  </app-link>
              </li>
              <li>
                  <app-link
                  href="https://www.linkedin.com/in/han-htet-aung/"
                  target="_blank"
                  rel="noopener"
                  variant="image"
                  >
                  <img
                      src=${asset("./assets/icons/linkedin.svg")}
                      alt="Linkedin Icon"
                  />
                  </app-link>
              </li>
          </ul>
        </nav>
`;

define("footer-copyright", { styles, template });
