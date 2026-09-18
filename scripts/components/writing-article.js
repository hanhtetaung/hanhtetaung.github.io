import { define } from "../define.js";

import "../components/app-icon.js";
import "../components/app-link.js";
import { navHref } from "../asset.js";

const styles = /* css */ `
  :host {
    display: flex;
    /* width: fit-content; */
    gap: 3rem;
    border: 1px solid var(--color-text);
    padding: 2rem 3rem;
    min-width: 25ch;
  }

  p {
    margin: 0;
    color: var(--color-secondary);
  }

  h3 {
    margin: 0;
    font-size: var(--size-body);
    margin-bottom: 1rem;
  }

  app-icon {
    margin-top: 1rem;
  }

`;

const props = {
  title: String,
  img: String,
  alt: String,
  href: String,
  comingSoon: Boolean,
};

const template = ({ title, img, alt, href, comingSoon }) => /* html */ `
    <app-icon
        variant="medium"
        src=${img}
        alt=${alt}
    ></app-icon>

    <article>
        <h3>${title}</h3>
        ${comingSoon ? "<p>Coming soon</p>" : /*html*/ `<app-link variant="underline" href=${navHref(href)} target="_blank">Read More</app-link>`}
    </article>

`;

define("writing-article", { props, styles, template });
