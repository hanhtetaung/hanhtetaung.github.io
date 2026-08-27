import { TABLET } from "../../breakpoints.js";
import { define } from "../../define.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    margin-block: 30rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

   h2 {
     margin: 0;
    font-weight: var(--font-bold);
    font-family: var(--font-heading);
    margin-bottom: 5rem;
  }


  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (max-width: ${TABLET}) {
      overflow: scroll;
      display: grid;
      grid-template-rows: repeat(3, auto);
      grid-auto-flow: column;
    }
  }

  li {
    border: 1px solid var(--color-text);
    border-radius: 3rem;
    padding-block: 4rem;
    min-width: 25ch;
    text-align: center;
  }

   h3 {
     margin: 0;
    font-size: var(--size-header);
    color: #7E4C37;
    margin-bottom: 1rem;
  }
`;

const template = /* html */ `
<section>
  <h2>A Little Corner of <br> Craftsmanship</h2>
  <ul>
    <li>
      <h3>Your Slot</h3>
    </li>
    <li>
      <h3>Terra</h3>
    </li>
    <li>
      <h3>SKS Solar</h3>
    </li>
    <li>
      <h3>Maple</h3>
    </li>
  </ul>
</section>
`;

define("section-recent-work", { styles, template });
