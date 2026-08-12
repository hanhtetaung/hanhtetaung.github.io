import { define } from "../define";
import "../components/app-icon";
import "../components/app-link";
import { PHONE } from "../breakpoints";

const tech_icons = [
  { src: "/assets/icons/figma.svg", alt: "Figma Icon" },
  { src: "/assets/icons/html.svg", alt: "HTML Icon" },
  { src: "/assets/icons/css.svg", alt: "CSS Icon" },
  { src: "/assets/icons/javascript.svg", alt: "JavaScript Icon" },
];

const showcases = [
  {
    name: "Knowledge Tree",
    href: "/work/knowledge-tree",
    src: "/assets/images/case-study/knowledge-tree/thumbnail.avif",
    alt: "Knowledge Tree Thumbnail",
  },
  {
    name: "MMO",
    href: "/work/mmo",
    src: "/assets/images/case-study/mmo/thumbnail.avif",
    alt: "MMO Thumbnail",
  },
  {
    name: "Bamboo",
    href: "/work/bamboo",
    src: "/assets/images/case-study/bamboo/thumbnail.avif",
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

  .highlights {
    grid-area: two;
    max-width: 30ch;
    margin-left: auto;

    @media (max-width: ${PHONE}) {
      margin: 0;
    }
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

  .toolkits {
    display: flex;
    gap: 2rem;
    margin-top: 0.5rem;
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
    flex-direction: column;
    margin: 0;
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
          <p>I'm Han Htet Aung</p>
          <h1>UX Engineer</h1>
          <p>
            Designing human-centered interfaces that power daily business
            operations
          </p>
        </hgroup>
  
        <span>Toolkit:</span>
        <ul class="toolkits">
          ${tech_icons
            .map(
              (ti) => /* html */ `
              <li>
                <app-icon
                  src=${ti.src}
                  alt=${ti.alt}
                ></app-icon>
              </li>
            `,
            )
            .join("")}
        </ul>
      </article>

      <ul class="highlights">
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
            <app-link variant="image" href=${showcase.href} >
              ➶ ${showcase.name}
              <img
                src=${showcase.src}
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
