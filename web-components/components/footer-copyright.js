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
    overflow: scroll;
    margin-top: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
  }

  nav {
    display: block;

    @media (min-width: ${TABLET}) {
      display: block;
    }
  }

  span {
    display: none;
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    

    @media (max-width: ${TABLET}) {
      display: inline-block;
      margin-bottom: 0.5rem;
    }
  }
`;

const template = () => /* html */ `
      <p>
        ©2026 Han Htet Aung
      </p>

      <nav>
        <span>Find me on:</span>
        <ul>
              <li>
                  <a href="https://wa.me/message/DVOPVSAGBDENB1">
                  <img
                      src=${asset("./assets/icons/whatsapp.svg")}
                      alt="Email Icon"
                  />
                  </a>    
              </li>
              <li>
                  <a
                  href="https://www.instagram.com/crafted.han"
                  target="_blank"
                  rel="noopener"
                
                  >
                  <img
                      src=${asset("./assets/icons/instagram.svg")}
                      alt="Linkedin Icon"
                  />
                  </a>
              </li>
              <li>
                  <a
                  href="https://www.linkedin.com/in/han-htet-aung/"
                  target="_blank"
                  rel="noopener"
                
                  >
                  <img
                      src=${asset("./assets/icons/linkedin.svg")}
                      alt="Linkedin Icon"
                  />
                  </a>
              </li>
              <li>
                  <a
                  href="https://github.com/hanhtetaung/"
                  target="_blank"
                  rel="noopener"
                
                  >
                  <img
                      src=${asset("./assets/icons/github.svg")}
                      alt="Github Icon"
                  />
                  </a>
              </li>
          </ul>
        </nav>
`;

define("footer-copyright", { styles, template });
