import { define } from "../../define";
import "../coming-soon-intro";

const styles = /* css */ `
  :host {
    display: block;
  }
`;

const template = /* html */ `
  <section-coming-soon-intro
    props='{"name":"Bamboo", "img": "/assets/images/case-study/bamboo/thumbnail.avif", "alt": "Bamboo Interface"}'
  ></section-coming-soon-intro>
`;

define("section-bamboo-intro", { styles, template });
