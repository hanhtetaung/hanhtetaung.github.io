import { define } from "../define.js";
import "../components/case-study-item.js";
import "../components/section-title.js";
import { PHONE } from "../breakpoints.js";

const caseStudies = [
  {
    image: "./assets/images/case-study/terra/thumbnail.avif",
    alt: "Terra Thumbnail",
    title: "Terra",
    categories: ["Product Design", "User Experience", "Design System"],
    description:
      "A tool to visualize the connections between everyday goods and their fundamental sources based on my knowledge.",
    href: "/work/terra",
    reverse: false,
  },
  {
    image: "./assets/images/case-study/mmo/thumbnail.avif",
    alt: "MMO thumbnail",
    title: "MMO",
    categories: [
      "Simplify complex workflows",
      "Build Prototype",
      "Design System",
    ],
    description:
      "An internal portal that uses to run daily operations in hospital.",
    href: "/work/mmo",
    reverse: true,
  },
  // {
  //   image: "./assets/images/case-study/portfolio/mockup.avif",
  //   alt: "Portfolio Mockup",
  //   title: "Portfolio",
  //   categories: ["Research", "Web Design", "Web Development"],
  //   description:
  //     "A personal portfolio to showcase my work, process, and approach to web design and development.",
  //   href: "/work/portfolio",
  //   reverse: false,
  // },
  {
    image: "./assets/images/case-study/skssolar/mockup.avif",
    alt: "SKS Mockup",
    title: "SKS.Solar",
    categories: ["Research", "Web Design", "Web Development"],
    description:
      "A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED to showcase its history, services and completed project.",
    href: "/work/sks-solar",
    reverse: true,
  },
];

const styles = /* css */ `
  :host {
    background: var(--color-bg-secondary)
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    padding: 0;
    list-style: none;
    gap: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${PHONE}) {
      display: block;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    
    > * {
      flex-grow: 1; 
    }
  }

  li:nth-child(1) {
    grid-column: span 2;
  }
`;

const template = () => /* html */ `
  <section>
      <section-title
        props='${JSON.stringify({
          name: "Case Studies",
          img: "./assets/icons/sparrow.svg",
          alt: "Sparrow Logo",
        })}'
      ></section-title>
            
      <ul>
        ${caseStudies
          .map(
            (cs) => /* html */ `
              <li>
                <case-study-item
                  props='${JSON.stringify(cs)}'
                  ${cs.reverse ? "reverse" : ""}
                ></case-study-item>
              </li>
            `,
          )
          .join("")}
      </ul>
  </section>
`;

define("section-case-studies", { styles, template });
