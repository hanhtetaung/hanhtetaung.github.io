import { define } from "../define";

import "../components/app-link";
import "../components/app-icon";

const styles = /* css */ `
  :host {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    max-width: 50rem;
    padding-block: 2rem;
    border-bottom: 1px dashed var(--color-text);
  }

  p {
    margin: 0;
    text-decoration: none;
  }
`;

const props = { icon: String, alt: String, url: String, name: String };

const template = ({ icon, alt, url, name }) => /* html */ `
    <app-icon variant="creator" src="${icon}" alt="${alt}" ></app-icon>
    ${
      url
        ? /*html*/ `<app-link variant="underline" href="${url}" target="_blank" rel="noreferrer">By ${name}</app-link>`
        : /*html*/ `<p>By ${name}</p>`
    }
`;

define("creator-item", { props, styles, template });
