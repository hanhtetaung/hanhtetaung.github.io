import { define } from "../../define";
import "../coming-soon-intro";

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
