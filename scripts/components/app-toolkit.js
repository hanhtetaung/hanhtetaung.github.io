import { define } from "../define.js";
import { asset } from "../asset.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
  }

  h4 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-small);
    /* font-weight: var(--font-regular); */
    color: var(--color-secondary);
    text-transform: uppercase;
  }
`;

const props = { tools: Array };

const template = ({ tools }) => /* html */ `
    <h4>Toolkits</h4>
    <ul>
        ${tools
          .map(
            (ti) => /* html */ `
            <li>
            <app-icon
                src=${asset(ti.src)}
                alt=${ti.alt}
            ></app-icon>
            </li>
        `,
          )
          .join("")}
    </ul>
`;

define("app-toolkit", { props, styles, template });
