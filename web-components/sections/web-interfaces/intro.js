import { define } from "../../define";
import "../coming-soon-intro";
import { PHONE } from "../../breakpoints";
import "../../components/capabilities-item";

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

  ol li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        margin-top: 0.5rem;
    }
  }
`;

const template = /* html */ `
    <section>
        <hgroup>
            <span>Capabilities</span>
            <h1>Develop Web Interfaces</h1>
            <p>Turn hi-fi designs into pixel-perfect web interfaces.</p>
        </hgroup>

        <article>
            <h3>What I provide</h3>
             <ol>
                <li>
                    <app-icon variant="medium" src="/assets/icons/web-interface.svg" alt=""></app-icon>
                    <p>HTML, CSS</p>
                </li>
                <li>
                     <app-icon variant="medium" src="/assets/icons/web-interface.svg" alt=""></app-icon>
                    <p>Web Components</p>
                    
                </li>
                <!-- <li>
                     <app-icon variant="medium" src="/assets/icons/design-system.svg" alt=""></app-icon>
                    <p>Assets</p>
                    
                </li> -->
            </ol>
        </article>
    </section>
`;

define("section-web-interfaces-intro", { styles, template });
