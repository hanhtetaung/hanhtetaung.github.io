import { define } from "../define";

import "../components/section-title";
import "../components/app-image";
import "../components/writing-article";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    overflow: scroll;
  }
`;

const template = () => /* html */ `
  <section>
       <section-title
        props='{"name": "Writings", "img": "/assets/icons/kingfisher.svg", "alt": "Kingfisher Logo"}'
      ></section-title>

      <ul>
        <writing-article props='{"title": "Foundation for Building Interfaces at Scale", "description": "Hello world", "img": "/assets/icons/molecule.svg", "alt": "Molecule Icon", "href": "/writings/foundation-building-interfaces-at-scale"}'></writing-article>
        <writing-article props='{"title": "Underlying Technology Is Strong Enough", "description": "Hello world", "img": "/assets/icons/technology.svg", "alt": "Technology Icon", "comingSoon": "True"}'></writing-article>       
        <writing-article props='{"title": "Engineering Behind This Portfolio", "description": "Hello world", "img": "/assets/icons/engineering.svg", "alt": "Molecule Icon", "comingSoon": "True"}'></writing-article>       
      </ul>
  </section>
`;

define("section-writings", { styles, template });
