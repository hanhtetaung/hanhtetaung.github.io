import { define } from "../../define.js";

import "../../components/section-title.js";
import "../../components/app-toolkit.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 5rem;
    width: fit-content;
  }

  li {
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 2rem;
  }


  h3 {
    color: var(--color-secondary);
    font-weight: var(--font-regular);
    font-size: var(--size-body);
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

`;

const template = /* html */ `
  <section>
    <section-title
        props='${JSON.stringify({
          name: "Workflow",
          img: "./assets/icons/ostrich.svg",
          alt: "Ostrich Logo",
        })}'
      ></section-title>

     <ul>
      <li>
        <h3>Step 1</h3>
        <p>Define shared colors, spacing, and typography as CSS variables in main.css.</p>
      </li>
      <li>
        <h3>Step 2</h3>
        <p>Create one web component per section, registered once in HTML.</p>
      </li>
      <li>
        <h3>Step 3</h3>
        <p>Create small web components with variants, and import them into sections.</p>
      </li>
      <li>
        <h3>Step 4</h3>
        <p>Do Step 2 and Step 3 for every remaining section.</p>
      </li>
      <li>
        <h3>Step 5</h3>
        <p>Compile into a standalone HTML that works on file and any server.</p>
      </li>
     </ul>
</section>
`;

define("section-web-interfaces-workflow", { styles, template });
