import { define } from "../../define.js";
import "../../components/app-icon.js";
import { DESKTOP } from "../../breakpoints.js";

const randomFacts = [
  {
    src: "./assets/images/about/birds.avif",
    alt: "Watching Bird",
    text: "I love birds",
  },
  {
    src: "./assets/images/about/seafood.avif",
    alt: "Seafood",
    text: "I’m allergic to seafood",
  },
  {
    src: "./assets/images/about/travelling.avif",
    alt: "Travelling",
    text: "I enjoy travelling",
  },
  {
    src: "./assets/images/about/running.avif",
    alt: "Running",
    text: "I like running",
  },
  {
    src: "./assets/images/about/sketching.avif",
    alt: "Sketching",
    text: "I sketch things",
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
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-rows: repeat(2, 1fr);   
    grid-auto-flow: column;              
    grid-auto-columns: 150px;            
    overflow-x: scroll;
    overflow-y: hidden;                  
    width: 100%; 
    gap: 5rem;

    @media (min-width: ${DESKTOP}) {
      display: flex;
      gap: 10rem;
    }
  }

  figure {
    margin: 0;
    text-align: center;
  }

  h2 {
    margin: 0;
    margin-bottom: 2rem;
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
