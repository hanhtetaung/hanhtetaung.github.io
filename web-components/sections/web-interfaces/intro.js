import { define } from "../../define.js";
import "../coming-soon-intro.js";
import "../../components/capabilities-item.js";
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
            <h1>Develop Web Interfaces</h1>
            <p>Turn hi-fi designs into pixel-perfect web interfaces.</p>
        </hgroup>

        <what-i-deliver props='${JSON.stringify({
          delivers: [
            {
              name: "HTML",
              icon: "./assets/icons/html-1.svg",
              alt: "HTML Icon",
            },
            {
              name: "Assets",
              icon: "./assets/icons/assets.svg",
              alt: "Assets Icon",
            },
          ],
        })}'></what-i-deliver>
    </section>
`;

define("section-web-interfaces-intro", { styles, template });
