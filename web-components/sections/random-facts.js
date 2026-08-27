import { define } from "../define.js";
import "../components/app-icon.js";

const randomFacts = [
  {
    src: "./assets/icons/bird-watching.svg",
    alt: "Watching Bird",
    text: "I love birds",
  },
  {
    src: "./assets/icons/seafood.svg",
    alt: "Seafood",
    text: "I’m allergic to seafood",
  },
  {
    src: "./assets/icons/travelling.svg",
    alt: "Travelling",
    text: "I enjoy travelling",
  },
  {
    src: "./assets/icons/running.svg",
    alt: "Running",
    text: "I like running",
  },
];

const styles = /*css*/ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10rem;
  }

  figure {
    margin: 0;
    text-align: center;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }
`;

const template = () => /* html */ `
  <section>
      <h2>Random Facts</h2>

      <ul>
        ${randomFacts
          .map(
            (fact) => /* html */ `
              <li>
                <figure>
                  <app-icon variant="large" src="${fact.src}" alt="${fact.alt}"></app-icon>
                  <figcaption>${fact.text}</figcaption>
                </figure>
              </li>
            `,
          )
          .join("")}
      </ul>
  </section>
`;

define("section-random-facts", { styles, template });
