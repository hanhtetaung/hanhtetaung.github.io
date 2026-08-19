import { navHref } from "../asset.js";
import { define } from "../define.js";

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
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;

const template = /* html */ `
  <section>
      <h1>Thank you!</h1>
      <p>
        Thank you for sending me email. I will get back to you later today. Have a
        good day!
      </p>

      <app-link variant="underline" href=${navHref("/")}>
        Back to home
      </app-link>
  </section>
`;

define("section-thank-you-intro", { styles, template });
