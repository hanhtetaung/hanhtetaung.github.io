import { define } from "../../define.js";
import "../coming-soon-intro.js";

const styles = /* css */ `
  :host {
    display: block;
  }
`;

const template = /* html */ `
  <section-coming-soon-intro
    props='{"name":"AU Van"}'
  ></section-coming-soon-intro>
`;

define("section-au-van-intro", { styles, template });
