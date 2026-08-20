import { define } from "../define.js";
import "../components/app-icon.js";
import "../components/app-link.js";
import "../components/app-badge.js";
import "../components/app-toolkit.js";
import { PHONE } from "../breakpoints.js";
import { asset, navHref } from "../asset.js";

const showcases = [
  {
    name: "Terra",
    href: "./work/terra",
    src: "./assets/images/case-study/terra/thumbnail.avif",
    alt: "Terra Thumbnail",
  },
  {
    name: "MMO",
    href: "./work/mmo",
    src: "./assets/images/case-study/mmo/thumbnail.avif",
    alt: "MMO Thumbnail",
  },
  {
    name: "Bamboo",
    href: "./work/bamboo",
    src: "./assets/images/case-study/bamboo/thumbnail.avif",
    alt: "Bamboo Thumbnail",
  },
];

const highlights = [
  { title: "Specialize In", header: "Enterprise UX" },
  { title: "Simplify", header: "Complex workflows" },
  { title: "Scale", header: "Design System" },
];

const styles = /* css */ `
  section {
    width: 80%;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem;
    grid-template-areas:
      "one two"
      "three three";


    @media (max-width: ${PHONE}) {
        display: flex;
        flex-direction: column;
    }
  }


  ol {
    grid-area: three;
  }

  

  h1, h3, p {
    margin: 0;
  }

  h1 {
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  h3 {
    font-size: var(--size-heading);
    font-family: var(--font-body);
  }

  ul, ol {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
  }

  hgroup {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  article  {
    ul {
      flex-direction: row;
    }
  }
  
  ul {
    margin: 0;
    flex-direction: column;
    grid-area: two;
    max-width: 30ch;
    margin-left: auto;

    @media (max-width: ${PHONE}) {
      margin: 0;
    }

    li {
      margin-bottom: 1rem;
    }
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }
  
  ol {
    display: flex;
    gap: 2rem;

    overflow-y: scroll;
  }

  img {
    width: 25rem;
    height: auto;
  }
`;

const template = /* html */ `
  <section>
      <article>
        <hgroup>
          <p>I'm Han Htet Aung ⇾ <app-badge variant="success" props='{"name": "Open to Work"}'></app-badge></p>
          <h1>UX Engineer</h1>
          <p>
            Designing human-centered interfaces that power daily business
            operations
          </p>
        </hgroup>

        <app-toolkit props='${JSON.stringify({
          tools: [
            { src: "./assets/icons/figma.svg", alt: "Figma Icon" },
            { src: "./assets/icons/html.svg", alt: "HTML Icon" },
            { src: "./assets/icons/css.svg", alt: "CSS Icon" },
            { src: "./assets/icons/javascript.svg", alt: "JavaScript Icon" },
          ],
        })}'></app-toolkit>
      </article>

      <ul>
         ${highlights
           .map(
             (ti) => /* html */ `
                <li>
                  <span>${ti.title}</span>
                  <h3>${ti.header}</h3>
                </li>
              `,
           )
           .join("")}
      </ul>

      <ol>
        ${showcases
          .map(
            (showcase) => /*html*/ `
          <li>
            <app-link variant="image" href=${navHref(showcase.href)} >
              ➶ ${showcase.name}
              <img
                src=${asset(showcase.src)}
                alt=${showcase.alt}
              />
            </app-link>
          </li>
          `,
          )
          .join("")}
      </ol>
  </section>
`;

define("section-hero", { styles, template });
