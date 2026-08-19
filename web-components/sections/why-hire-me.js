import { define } from "../define.js";

import "../components/section-title.js";
import "../components/app-image.js";

const points = [
  {
    title: "Working Man",
    description:
      "I'm consistent on one thing: always giving my best. I take pride in doing things properly and take full ownership of everything I do. When I commit to something, I follow through.",
    icon: "./assets/icons/working-man.svg",
    alt: "Working Man Icon",
  },
  {
    title: "Detail-oriented Person",
    description:
      "I pay close attention to every detail, because the little things matter. I believe the difference between good work and great work lives in the details.",
    icon: "./assets/icons/man-in-details.svg",
    alt: "Detail-oriented Person Icon",
  },
  {
    title: "Positive Thinker",
    description:
      "A positive mindset helps me create better work and stronger collaborations. I focus on solutions rather than problems. Good energy builds great work.",
    icon: "./assets/icons/positive-man.svg",
    alt: "Positive Thinker Icon",
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

  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: var(--size-heading);
    font-family: var(--font-body);
  }

  .header {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
    gap: 0;
  }

  .header img {
    width: 8rem;
    max-width: 12rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12rem;
  }

  li {
    display: flex;
    gap: 5rem;
  }

  article {
    max-width: 50ch;
  }

   span {
    color: var(--color-secondary);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  .icon {
    width: 4.5rem;
    height: auto;
  }

  @media (max-width: 769px) {
    li {
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
`;

const template = () => /* html */ `
  <section>
       <section-title
        variant="vertical"
        props='${JSON.stringify({
          name: "Why hire me?",
          img: "./assets/icons/owl.svg",
          alt: "Owl Logo",
        })}'
      ></section-title>

      <ul>
        ${points
          .map(
            ({ title, description, icon, alt }, index) => /* html */ `
              <li>
                <article>
                  <h3><span>${index + 1}.</span> ${title}</h3>
                  <p>${description}</p>
                </article>

                <app-icon variant="large" src="${icon}" alt="${alt}"></app-icon>
              </li>
            `,
          )
          .join("")}
      </ul>
  </section>
`;

define("section-why-hire-me", { styles, template });
