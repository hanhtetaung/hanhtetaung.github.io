import { define } from "../../define.js";
import "../coming-soon-intro.js";
import { PHONE } from "../../breakpoints.js";
import { asset } from "../../asset.js";

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

  h3 {
    margin: 0;
    margin-bottom: 1rem;
  }

  ol {
    margin: 0;
    list-style: none;
    padding: 0;
    display: flex;
    gap: 5rem;
    border: 1px dashed var(--color-text);
    width: fit-content;
    padding: 2rem;

    @media (max-width: ${PHONE}) {
        flex-direction: column;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
    }
  }
`;

const template = /* html */ `
    <section>
        <hgroup>
            <span>Capabilities</span>
            <h1>Build Design System</h1>
            <p>Build the core foundation for consistent, scalable interfaces.</p>
        </hgroup>

        <article>
            <h3>What I deliver</h3>
             <ol>
                <li>
                    <app-icon variant="medium" src="${asset("./assets/icons/design-tokens.svg")}" alt="Design Token Icon"></app-icon>
                    <p>Design Tokens</p>
                </li>
                <li>
                     <app-icon variant="medium" src="${asset("./assets/icons/component-library.svg")}" alt="Component Library Icon"></app-icon>
                    <p>Component Library</p>
                    
                </li>
                <li>
                     <app-icon variant="medium" src="${asset("./assets/icons/guidelines.svg")}" alt="Guidelines Icon"></app-icon>
                    <p>Guidelines</p>
                    
                </li>
            </ol>
        </article>
    </section>
`;

define("section-design-system-intro", { styles, template });
