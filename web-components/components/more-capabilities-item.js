import { define } from "../define.js";

import "../components/app-icon.js";
import "../components/app-link.js";
import { TABLET, TABLE } from "../breakpoints.js";
import { navHref } from "../asset.js";

const styles = /* css */ `
  :host {
    display: flex;
    align-items: center;
    border: 1px dashed var(--color-text);

     width: fit-content;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      overflow: hidden;
      padding: 4rem;
      justify-content: center;

    @media (max-width: ${TABLET}) {
      flex-direction: column;
      padding-inline: 2rem;
      padding-block: 2rem;
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

    article {
        @media (max-width: ${TABLE}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        }
    }

    h3 {
        font-size: var(--size-body);
        font-weight: var(--font-regular);
        margin-bottom: 0.5rem;
    }
`;

const props = {
  title: String,
  subTitle: String,
  href: String,
};

const template = ({ title, subTitle, href }) => /* html */ `
  <article>
    <hgroup>
      <span>${subTitle}</span>
      <h3>${title}</h3>
    </hgroup>

    <app-link variant="plain" href=${navHref(href)}>→</app-link>
  </article>
`;

define("more-capabilities-item", { props, styles, template });
