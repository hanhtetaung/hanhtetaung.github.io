import { define } from "../define.js";
import "../components/footer-nav.js";
import "../components/footer-copyright.js";
import { TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    padding-block: 10rem;
  }

  q {
    display: block;
    text-align: center;
  }

  footer {
    width: 80%;
    margin-inline: auto;
  }

  img {
  width: 100%;
  height: auto;
  display: block;
}

  img:first-child {
    display: none;
  }

@media (min-width: ${TABLET}) {
  img:first-child {
    display: block;
  }

  img:not(:first-child) {
    display: none;
  }
}


`;

const template = /* html */ `
  <footer>

  <img src="./assets/images/footer/highlight.avif" alt="Parting phrase">
  <img src="./assets/images/footer/thank-you.avif" alt="Thank you phrase">
  <img src="./assets/images/footer/looking-forward.avif" alt="Parting Phrase">


    <!-- <footer-nav></footer-nav> -->

    <footer-copyright></footer-copyright>
  </footer>
`;

define("section-footer", { styles, template });
