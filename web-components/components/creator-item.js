import { define } from "../define";

import "../components/app-link";
import "../components/app-icon";

const styles = /* css */ `
  :host {
    display: flex;
    align-items: center;
    gap: 3rem;

  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    flex-shrink: 0;
  }

  a,
  p {
    margin: 0;
    color: inherit;
    text-decoration: none;
  }

  a {
    font-weight: 600;
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
