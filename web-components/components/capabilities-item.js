import { define } from "../define";

import "../components/app-icon";
import "../components/app-link";
import { TABLE } from "../breakpoints";

const styles = /* css */ `
  :host {
    display: flex;
    gap: 2rem;
    padding-block: 3rem;
    padding-inline: 5rem;
    justify-content: center;
    border: 1px dashed var(--color-text);

    @media (max-width: ${TABLE}) {
      justify-content: start;
    }
  }

  h3, p {
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-weight: var(--font-bold);
    font-size: var(--size-small);
    text-transform: uppercase;
  }

  h3 {
    font-size: var(--size-heading);
    font-weight: var(--font-regular);
    margin-bottom: 0.5rem;
  }
`;

const props = {
  title: String,
  description: String,
  href: String,
  alt: String,
  subTitle: String,
};

const template = ({ title, subTitle }) => /* html */ `
     <article>
      <span>${subTitle}</span>
      <h3>${title}</h3>
      <app-link variant="plain" href="#">→</app-link>
     </article>
`;

define("capabilities-item", { props, styles, template });
