import { define } from "../../define.js";

import "../../components/section-title.js";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }


`;

const template = /* html */ `
  <section>
    <section-title
        props='${JSON.stringify({
          name: "Workflow",
          img: "./assets/icons/ostrich.svg",
          alt: "Ostrich Logo",
        })}'
      ></section-title>

     <p>Coming Soon</p>
</section>
`;

define("section-user-interfaces-workflow", { styles, template });
