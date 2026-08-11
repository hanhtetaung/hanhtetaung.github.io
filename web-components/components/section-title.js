import { define } from "../define";

const styles = /* css */ `
  :host {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 3rem;
    gap: 1rem;
  }

  h2 {
    margin: 0;
    font-size: var(--size-title);
    font-family: var(--font-heading);
    font-weight: var(--font-regular)
  }

  img {
    height: 5rem;
    width: auto;
  }

  :host([variant="vertical"]) {
    flex-direction: column-reverse;
    gap: 0;
  }

  :host([variant="text"]) {
    img {
      display: none;
    }
  }
`;

const props = { name: String, img: String, alt: String };

const template = ({ name, img = "", alt = "" }) => /* html */ `
    <h2>${name}</h2>
    <img
        src=${img}
        alt=${alt}
        height="36"
        width="76"
    />
`;

define("section-title", { props, styles, template });
