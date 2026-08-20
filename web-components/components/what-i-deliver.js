import { define } from "../define.js";
import { asset } from "../asset.js";

import "./app-icon.js";
import "./app-link.js";
import { TABLE } from "../breakpoints.js";

const styles = /* css */ `
 h3 {
    margin: 0;
    margin-bottom: 1rem;
  }

 ol {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    border: 1px dashed var(--color-text);
    padding: 2rem;
    justify-content: space-between;
    gap: 2rem;
    width: fit-content;
    overflow: scroll;
    box-sizing: border-box; 

    @media (max-width: ${TABLE}) {
      width: 100%;
    }
  }

   li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 9ch;

   
  }

   p {
        margin: 0;
        font-size: var(--size-small);
    }
`;

const props = {
  delivers: Array,
};

const template = ({ delivers }) => /* html */ `
  <h3>What I deliver</h3>
  <ol>
    ${delivers
      .map(
        (d) => /*html*/ `
        <li>
          <app-icon variant="medium" src=${asset(d.icon)} alt=${d.alt}></app-icon>
          <p>${d.name}</p>
        </li>
      `,
      )
      .join("")}
  </ol>
`;

define("what-i-deliver", { props, styles, template });
