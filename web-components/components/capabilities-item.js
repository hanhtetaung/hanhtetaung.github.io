import { define } from "../define";

import "../components/app-icon";

const styles = /* css */ `
  :host {
    display: block;
    /* padding-block: 5rem; */
    /* border: 1px solid var(--color-text); */
    width: fit-content;
  }

  h4, p {
    margin: 0;
  }

  span {
    display: block;
    color: var(--color-secondary);
    font-weight: var(--font-bold);
    font-size: var(--size-small);
    text-transform: uppercase;
    margin-top: 2rem;
  }

  h4 {
    font-size: var(--size-heading);
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

const template = ({ title, description, href, alt, subTitle }) => /* html */ `
    <app-icon variant="large" src=${href} alt=${alt}></app-icon>
    <span>${subTitle}</span>
    <h4>${title}</h4>
    <p>${description}</p>
    <slot></slot>
`;

define("capabilities-item", { props, styles, template });
