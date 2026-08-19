import { PHONE } from "../breakpoints.js";
import { define } from "../define.js";

const styles = /* css */ `
  :host {
    display: grid;
    grid-template-columns: 1fr 2.5fr;


    @media (max-width: ${PHONE}) {
        display: block;
    }
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-heading);
    width: fit-content;
    height: fit-content;
  }

  :host([variant="block"]) {
    display: block;
  }
`;

const props = { title: String };

const template = ({ title }) => /* html */ `
        <h3>${title}</h3>

        <article>
            <slot></slot>
        </article>
`;

define("app-article-paragraph", { props, styles, template });
