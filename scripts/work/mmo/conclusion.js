import { define } from "../../../lib/define.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    margin: 0;
    padding: 0;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: var(--size-title);
  }
`;

const template = /* html */ `
  <section>
    <h2>Keep Listening to the Voices</h2>
    <p>The system continues to grow as users' needs change.</p>
  </section>
`;

define("section-mmo-conclusion", { styles, template });
