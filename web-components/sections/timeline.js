import { define } from "../define";
import "../components/section-title";
import "../components/app-badge";
import { PHONE } from "../breakpoints";

const timelineItems = [
  {
    icon: "/assets/icons/software-developer.svg",
    alt: "Software Developer Icon",
    range: "2021-2022",
    title: "Software Developer",
    description:
      "I landed my first software development role building a hospital management system to manage inventory, POS, and OPD appointments. The system is still running today.",
  },
  {
    icon: "/assets/icons/student.svg",
    alt: "Student Icon",
    range: "2022-2025",
    title: "Student",
    description:
      "I completed my Bachelor of Science in Computer Science at Assumption University, Thailand. My favorite subject was Computer Architecture.",
  },
  {
    icon: "/assets/icons/software-developer.svg",
    alt: "Software Developer Icon",
    range: "2025-2026",
    title: "Software Developer",
    description:
      "After graduating, I worked remotely for 6 months as a software developer at an event organizing company in Singapore.",
  },
  {
    icon: "/assets/icons/full-time-freelancer.svg",
    alt: "Web Design & Develop",
    range: "Present",
    title: "UX Designer",
    description:
      "Today, I've found my passion in UX design. Self-taught through research and hands-on practice, I design intuitive experiences by simplifying complex workflows.",
  },
];

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h3, p {
    margin: 0;
  }

  h3 {
     font-size: var(--size-heading);
    font-weight: var(--font-bold);
    font-family: var(--font-body);
    margin-block: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column-reverse;
  }

  li {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 0 1rem;
    align-items: center;
    align-self: stretch;
  }

  .connector {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }

  .icon {
    width: 10rem;
    max-height: 5rem;
    height: auto;
  }

  .dot {
    width: 0.75rem;
    position: absolute;
    top: 1rem;
    height: 0.75rem;
    border-radius: 50%;
    background: var(--color-secondary);
  }

  .line {
    width: 2px;
    flex: 1;
    background: var(--color-secondary);
    min-height: 2rem;
  }

  .content {
    padding-bottom: 5rem;
    max-width: 100ch;
  }

  .badge {
    margin-bottom: 0.5rem;
  }

  app-icon {
    margin-right: 2rem;
  }

  @media (max-width: ${PHONE}) {
    app-icon {
      display: none;
    }
  }

  p {
    max-width: 50ch;
  }
`;

const template = () => /* html */ `
  <section>
    <div class="container">
      <section-title
        props='${JSON.stringify({
          name: "Experience Overview",
          img: "/assets/icons/bird-flying.svg",
          alt: "Bird Flying Logo",
        })}'
      ></section-title>

      <ul>
        ${timelineItems
          .map(
            ({ icon, alt, range, title, description }) => /* html */ `
              <li>
                <app-icon src="${icon}" alt="${alt}"></app-icon>

                <div class="connector">
                  <span class="dot"></span>
                  <span class="line"></span>
                </div>

                <div class="content">
                  <app-badge
                    props='${JSON.stringify({ name: range })}'
                    ${range === "Present" ? "" : 'variant="outline"'}
                  ></app-badge>

                  <h3>${title}</h3>
                  <p>${description}</p>
                </div>
              </li>
            `,
          )
          .join("")}
      </ul>
    </div>
  </section>
`;

define("section-timeline", { styles, template });
