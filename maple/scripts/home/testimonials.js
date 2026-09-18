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
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 2rem;
  }

  p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    padding-block: 5rem;
    display: flex;
    gap: 5rem;
    overflow: scroll;
    align-items: flex-start;
  }

  li {
    border: 3px solid var(--color-primary);
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    transform: rotate(-0.5deg);
    min-width: 20rem;
    padding: 5rem;
  }

  li p {
    margin-top: 2rem;
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

  hgroup {
    width: 100%;

    @media (min-width: ${TABLET}) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
        <h2>Testimonials</h2>
        <a href="">Explore more</a>
    </hgroup>

    <ul>
        <li>
          <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sunt magni quas. Aliquam eveniet deserunt saepe</q>
          <p>John Doe</p>
        </li>
        <li> <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sunt magni quas. Aliquam eveniet deserunt saepe incidunt fugit debitis aspernatur molestias rerum, iure voluptas. Rem ea dolorem sit nobis odio!</q>
          <p>John Doe</p></li>
        <li> <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sunt magni quas. Aliquam eveniet deserunt molestias rerum, iure voluptas. Rem ea dolorem sit nobis odio!</q>
          <p>John Doe</p></li>
        <li>
          <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque sunt magni quas. Aliquam eveniet deserunt molestias rerum, iure voluptas. Rem ea dolorem sit nobis odio!</q>
          <p>John Doe</p>
        </li>
    </ul>

  </section>
`;

define("section-testimonials", { styles, template });
