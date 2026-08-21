import { define } from "../define.js";
import { asset, navHref } from "../asset.js";

import "../components/app-icon.js";
import "../components/app-link.js";
import { TABLE } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: flex;
    gap: 2rem;
    padding-block: 3rem;
    padding-inline: 5rem;
    justify-content: space-between;
    align-items: center;
    border: 1px dashed var(--color-text);

    @media (max-width: ${TABLE}) {
      justify-content: start;
      flex-direction: column;
      padding: 0;
      padding-inline: 2rem;
      padding-block: 2rem;
      align-items: start;
    }
  }

  :host([variant="borderless"]) {
    border: none;
    padding: 0;

    h3 {
      font-size: var(--size-body);
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

  ol {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      gap: 4rem;
      width: fit-content;
      overflow: scroll;

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

    p {
        margin: 0;
        font-size: var(--size-small);
    }
  }

    article {
      @media (max-width: ${TABLE}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }

    :host([variant="no-list"]) {
      width: fit-content;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      overflow: hidden;
      padding: 4rem;
      justify-content: center;

      h3 {
        font-size: var(--size-body);
        font-weight: var(--font-regular);
        margin-bottom: 0.5rem;
      }

      ol {
        display: none;
      }
    }
`;

const props = {
  title: String,
  subTitle: String,
  href: String,
  delivers: Array,
};

const template = ({ title, subTitle, href, delivers }) => /* html */ `
  <article>
    <hgroup>
      <span>${subTitle}</span>
      <h3>${title}</h3>
    </hgroup>
    <app-link variant="plain" href=${navHref(href)}>→</app-link>
  </article>

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

define("capabilities-item", { props, styles, template });
