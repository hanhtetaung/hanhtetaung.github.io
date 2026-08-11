import { define } from "../../define";

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
`;

const template = /* html */ `
  <section>
    <section-title
      variant="text"
      props='{"name": "Keep Listening to the Voices"}'
    ></section-title>

    <p>The system continues to grow as users' needs change.</p>
  </section>
`;

define("section-mmo-conclusion", { styles, template });
