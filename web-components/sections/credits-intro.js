import { define } from "../define";

const styles = /*css*/ `
    section {
        margin-inline: auto;
        width: 80%;
    }

     h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const template = /* html */ `
  <section class="credits">
      <h1>Credits</h1>
      <p>Thanks to the creators behind the icons.</p>
  </section>
`;

define("section-credits-intro", { styles, template });
