import { PHONE } from "../breakpoints";
import { define } from "../define";

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
