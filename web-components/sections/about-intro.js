import { define } from "../define";
import "../components/app-image";
import { PHONE } from "../breakpoints";

const styles = /*css*/ `
  section {
    width: 80%;
    margin-inline: auto;
     display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${PHONE}) {
      display: block; 
        text-align: center;
    }
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
  }

  div {
    display: flex;
    align-items: center;
    gap: 3rem;

     @media (max-width: ${PHONE}) {
      display: block; 
    }
  }
`;

const template = /* html */ `
  <section>
      <h1>About</h1>
      <div>
        <app-image
          variant="normal"
          src="assets/images/about-profile.avif"
          alt="profile"
        ></app-image>

        <article>
          <p>
            I'm Han Htet Aung, an UX Engineer who loves creating unique
            experiences on the web.
          </p>

          <p>I see patterns in chaos.</p>
        </article>
      </div>
  </section>
`;

define("section-about-intro", { styles, template });
