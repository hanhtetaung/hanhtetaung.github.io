import { define } from "../../define.js";
import "../coming-soon-intro.js";
import "../../components/what-i-deliver.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

   h1 {
    margin: 0;
    font-size: var(--size-display);
    font-weight: var(--font-regular);
    font-family: var(--font-heading);
    margin-bottom: 1rem;
  }

   span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  p {
    margin: 0;
    margin-bottom: 5rem;
  }
`;

const template = /* html */ `
    <section>
        <hgroup>
            <span>Capabilities</span>
            <h1>Design User Interfaces</h1>
            <p>Design intuitive user interfaces and experiences.</p>
        </hgroup>


       <what-i-deliver props='${JSON.stringify({
         delivers: [
           {
             name: "User Flows",
             icon: "./assets/icons/user-flows.svg",
             alt: "User Flows Icon",
           },
           {
             name: "Hi Fi Interfaces",
             icon: "./assets/icons/hi-fi-interfaces.svg",
             alt: "Hi Fi Interface Icon",
           },
           {
             name: "Prototypes",
             icon: "./assets/icons/prototypes.svg",
             alt: "Prototypes Icon",
           },
         ],
       })}'></what-i-deliver>
    </section>
`;

define("section-user-interfaces-intro", { styles, template });
