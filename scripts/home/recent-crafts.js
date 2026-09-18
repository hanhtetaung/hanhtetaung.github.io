import { asset } from "../../lib/asset.js";
import { define } from "../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    margin-block: 20rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 5rem;
  }

   p {
    margin: 0;
  }


  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    @media (min-width: ${TABLET}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }


    @media (min-width: ${DESKTOP}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  li {
    border: 1px solid var(--color-primary);
    border-radius: 3rem;
    width: 100%;
    text-align: center;
  }

  a {
    display: block;
    width: 100%;
    text-decoration: none;
    color: var(--color-text);
  }

  img {
    width: auto;
    max-width: 100%;
    height: 20rem;
  }

`;

const template = /* html */ `
<section>
  <hgroup>
    <p>[ Recent Crafts ]</p>
    <h2>With Love & Care</h2>
  </hgroup>

  <ul>
    <li>
      <a href="/maple" target="_blank">
        <img src=${asset("./assets/images/home/maple-montessori.avif")} alt="Maple Montessori">
      </a>
    </li>



     <li>
      <a href="/map" target="_blank">
        <img src=${asset("./assets/images/home/story-map.avif")} alt="Story Map">
      </a>
    </li>

    
     <li>
       <a href="https://skssolarmyanmar.com/" target="_blank">
         <img src=${asset("./assets/images/home/sks-solar.avif")} alt="SKS Solar">
      </a>
    </li>
    
  </ul>
</section>
`;

define("section-recent-crafts", { styles, template });
