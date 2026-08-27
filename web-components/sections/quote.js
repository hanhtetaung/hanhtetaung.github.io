import { TABLET } from "../breakpoints.js";
import { define } from "../define.js";

const styles = /*css*/ `
  section {
    width: 80%;
    margin-inline: auto;
    text-align: center;
  }

  blockquote {
    font-size: var(--size-title);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);

    @media (max-width: ${TABLET}) {
      font-size: var(--size-body);
    }
  }
`;

const template = /* html */ `
  <section>
      <blockquote>
        " What I hear, I forget.<br />
        What I see, I remember.<br />
        What I do, I understand." <br />
        — Confucius
      </blockquote>
  </section>
`;

define("section-quote", { styles, template });
