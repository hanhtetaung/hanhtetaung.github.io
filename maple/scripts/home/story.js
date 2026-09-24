import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;

    @media (min-width: ${DESKTOP}) {
      display: flex;
      justify-content: end;
      flex-direction: row;
      gap: 20rem;
    }
  }

  img {
    display: block;
    height: 25rem;
    width: auto;
    
    @media (min-width: ${TABLET}) {
      height: 30rem;
    }

    @media (min-width: ${DESKTOP}) {
      height: 35rem;
    }
  }

  article {
    max-width: 50rem;
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }

  a {
    margin-top: 2rem;
    display: inline-block;
    padding-inline: 4rem;
    padding-block: 2rem;

    background-color: #8CB475;
    color: var(--color-background);
    text-decoration: none;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

const template = /* html */ `
  <section>

   <img src=${asset("./assets/sketch-logo.png")} alt="Original Logo">

    <article>
        <h2>Our Story</h2>
        <p>What began as a simple idea grew through trial, learning, and the support of the people around us. Along the way, every challenge helped shape who we are; today, we continue moving forward with the same curiosity and care, building on what worked, improving what didn’t, and staying focused on what comes next.</p>

        <a href="">Meet Headmaster</a>
    </article>

  </section>
`;

define("section-story", { styles, template });
