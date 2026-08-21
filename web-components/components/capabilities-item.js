import { define } from "../define.js";
import { asset, navHref } from "../asset.js";

import "../components/app-icon.js";
import "../components/app-link.js";
import { TABLE } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: flex;
    border: 2px solid var(--color-text);
    justify-content: space-between;
    flex-direction: column;
    padding: 0;
    padding-inline: 2rem;
    padding-block: 2rem;
    align-items: start;
    min-width: 35rem;
    height: 40rem;
  }

  div {
    width: 100%;
  }

  :host([variant="borderless"]) {
    border: none;
    padding: 0;

    h3 {
      font-size: var(--size-body);
    }
  }

  h3, h4, p {
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


  h4 {
      font-weight: var(--font-regular);
      font-size: var(--size-small);
      margin-bottom: 1.5rem;
      width: 100%;
      padding-block: 0.6rem;
      border-block: 1px dashed var(--color-text);
    }


  ol {
      margin: 0;
      list-style: none;
      padding: 0;
      display: flex;
      gap: 1rem;
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
      width: 100%;
      display: block;
      justify-content: space-between;
      margin-bottom: 2rem;
    }

    app-link {
      font-size: var(--size-small);
      margin-top: 0.6rem;
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
      <app-link variant="underline" href=${navHref(href)}>Details ➶</app-link>
    </article>

    <div>
      <h4>Deliver</h4>
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
    </div>

`;

define("capabilities-item", { props, styles, template });
