import { define } from "../../lib/define.js";
import { asset } from "../../lib/asset.js";

import { TABLET, LARGE } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  p {
    margin: 0;
  }

  div {
    overflow: scroll;
  }

  hgroup {
    margin-top: 2rem; 
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 1rem;
  }


  img {
    height: 50rem;
    width: auto;

    @media (min-width: ${TABLET}) {
      height: auto;
      width: 100%;
    }
  }

  a {
    display: inline-block;
    color: var(--color-primary);
    text-decoration: none;
  }

  a img {
    width: 1.5rem;
    height: auto;  
    vertical-align: bottom;

    @media (min-width: ${TABLET}) {
      width: 2rem;
    }
  }
`;

const template = /* html */ `


<section>
  <div>
    <img src=${asset("./assets/images/home/sketching.avif")} alt="Sketching SEA">
  </div>
  <hgroup>
    <h2>Self-taught in illustration</h2>
    <p>All hand-drawn. I use ink drawing. You can also find my Procreate diary on 
      <a
    href="https://www.instagram.com/crafted.han"
    target="_blank"
    rel="noopener"
    >
      Instagram
      <img
        src=${asset("./assets/icons/instagram-primary-color.svg")}
        alt="Linkedin Icon"
      />
    </a>
    .
    </p>
  </hgroup>

  
</section>
`;

define("section-hobby", { styles, template });
