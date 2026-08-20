import { define } from "../../define.js";
import "../coming-soon-intro.js";
import "../../components/what-i-deliver.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
    margin-bottom: 1rem;
  }

   span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  p {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

const template = /* html */ `
    <section>
        <hgroup>
            <span>Capabilities</span>
            <h1>Build Design System</h1>
            <p>Build the core foundation for consistent, scalable interfaces.</p>
        </hgroup>

        <what-i-deliver props='${JSON.stringify({
          delivers: [
            {
              name: "Design Tokens",
              icon: "./assets/icons/design-tokens.svg",
              alt: "Design Tokens Icon",
            },
            {
              name: "Component Library",
              icon: "./assets/icons/component-library.svg",
              alt: "Component Library Icon",
            },
            {
              name: "Guidelines",
              icon: "./assets/icons/guidelines.svg",
              alt: "Guidelines Icon",
            },
          ],
        })}'></what-i-deliver>
    </section>
`;

define("section-design-system-intro", { styles, template });
