import { TABLE } from "../breakpoints.js";
import { define } from "../define.js";
import "../components/app-link.js";
import { navHref } from "../asset.js";

const styles = /* css */ `
  :host {
    display: block;
    position: relative;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 60ch;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 10%;
    height: 30rem;
    width: auto;
    max-width: 30rem;
  }

  app-link {
    margin-top: 2rem;
  }

  @media (max-width: ${TABLE}) {
    img {
      display: none;
    }
  }
`;

const template = /* html */ `
  <section>
       <section-title
       variant="text"
        props='${JSON.stringify({
          name: "Call me, Singapore",
          img: "./assets/icons/owl.svg",
          alt: "Owl Logo",
        })}'
      ></section-title>



      <article>
        <p>
          I'm looking for a UX Designer role in Singapore where I can simplify
          complex workflows and design intuitive experiences for enterprise
          products.
        </p>

        <p>
          If you're looking for someone who is hardworking, detail-oriented,
          and positive-minded, then I’m the one for you.
        </p>

        <app-link variant="primary" href=${navHref("/hire-me")}>
          Let's chat
          <span>&#8629;</span>
        </a>
      </article>

      <img
        src="./assets/icons/merlion.svg"
        alt="Merlion illustration"
      />
  </section>
`;

define("section-cta", { styles, template });
