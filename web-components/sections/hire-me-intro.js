import { define } from "../define";

import "../components/app-link";
import "../components/app-button";
import { PHONE } from "../breakpoints";

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
  }

  input, textarea {
    border: none;
    padding: 1rem 1.5rem;
    font-size: var(--size-header);
    font-family: var(--font-body);
  }

  ul {
    padding: 0;
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: grid;
    max-width: 50rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    grid-template-areas: 
    "one two"
    "three three"
     "three three";

    @media (max-width: ${PHONE}) {
     display: flex;
     flex-wrap: wrap;   
    }
  }

  textarea {
    grid-area: three;
  }
`;

const template = /* html */ `
  <section>
      <h1>Let's Chat</h1>
      <p>I'd be happy to work with you. I'll get back to you later today.</p>

      <form
        action="https://submit-form.com/elmAjnFC7"
        data-botpoison-public-key="pk_40990b6d-13e8-439a-96f2-680095e68c36"
      >
        <input
          type="hidden"
          name="_redirect"
          value="http://hanhtetaung.dev/thank-you"
        />
        <input type="hidden" name="_append" value="false" />

        <ul>
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
            />
  
            <textarea
              name="message"
              placeholder="Message*"
              required=""
            ></textarea>
        </ul>

        <div
          class="cf-turnstile"
          data-sitekey="0x4AAAAAADTCi7AhwZfhOau6"
          data-size="flexible"
        ></div>

        <app-button type="submit">
          Send &#10166;
        </app-button>

        
        <hr />

        <p>
          Or hit me up at:
          <app-link variant="underline" href="mailto:hanhtetaung.dev@gmail.com">
            hanhtetaung.dev@gmail.com
          </app-link>
        </p>
      </form>
  </section>
`;

define("section-hire-me-intro", { styles, template });
