import { PHONE, TABLE } from "../breakpoints";
import { define } from "../define";
import "../components/app-link";
import "../components/app-badge";

const styles = /* css */ `
  :host {
    --local-border: 1px solid currentColor;
    --local-decoration: none;

    display: flex;
    gap: 5rem;
    align-items: center;
    padding-block: 5rem;
    padding-inline: 5rem; 
    box-shadow: 0 4px 12px -4px rgba(0, 0, 0, 0.35);
    
    @media (max-width: ${PHONE}) {
      padding: 0;
      padding-bottom: 5rem;
      box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.35);
    }

  }

  :host([reverse]) {
    flex-direction: row-reverse;
  }

  img {
    flex: 1;
    max-width: 50rem;
    width: 100%;
    height: auto;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    align-self: flex-start;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: var(--local-border);
    text-decoration: var(--local-decoration);
    color: inherit;
    border-radius: 4px;
  }

  @media (max-width: ${TABLE}) {
    :host {
      display: block;
    }
  }
`;

const props = {
  image: String,
  alt: String,
  title: String,
  description: String,
  href: String,
  categories: Array,
};

const template = ({
  image,
  alt,
  title,
  description,
  href,
  categories,
}) => /* html */ `
    <img src="${image}" alt="${alt}" />
    <div>
      <h3>${title}</h3>
      <ul>
        ${categories
          .map(
            (name) => /* html */ `
              <li><app-badge variant="primary" props='${JSON.stringify({ name })}'></app-badge></li>
            `,
          )
          .join("")}
      </ul>
      <p>${description}</p>
      <app-link variant="secondary" href="${href}">
        View Case Study &#8599;
      </app-link>
    </div>
`;

define("case-study-item", { props, styles, template });
