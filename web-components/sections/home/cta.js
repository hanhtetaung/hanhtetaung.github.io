import { define } from "../../define.js";

import "../../components/app-logo.js";
import { asset } from "../../asset.js";
import { DESKTOP, LARGE, TABLET } from "../../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    height: 70rem;
    position: relative;
    overflow: hidden;
    margin-top: 20rem;
    margin-bottom: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5rem;

    @media (min-width: ${TABLET}) {
      height: 90%;
    }

    @media (min-width: ${LARGE}) {
      position: relative;
      overflow: hidden;
    }
  }

  h2 {
    margin: 0;
    margin-top: 1rem;
    font-size: var(--size-title);
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    border-bottom: 1px solid var(--color-text);
    padding-block: 2rem;
    overflow: scroll;

    
    @media (min-width: ${TABLET}) {
      max-width: 50%;
      gap: 5rem;
    }
  }


  img {
    position: absolute;
    height: 60rem;
    top: 5rem;
    z-index: -1; 
    opacity: 0.1;
    left: -45%;
    top: 25%;

    @media (min-width: ${TABLET}) {
      left: auto;
      right: 10%;
      top: 3rem;
    }

    @media (min-width: ${DESKTOP}) {
      opacity: 1;
    }
  }

  button {
    background: var(--color-transparent);
    color: var(--color-text);
    border: 1px solid var(--color-text);
    padding-block: 0.5rem;
    padding-inline: 2rem;
    
    &:hover {
      cursor: pointer;
    }
  }

  `;

const template = /* html */ `


<section>
  <img src="./assets/images/home/red-telephone-box.avif" alt="Red Telephone Box">
   
  <hgroup>
    <p>[ Let's Craft ]</p>
    <h2>You bring the idea <br>
          I craft the website  
      </h2>
  </hgroup>

    <ul>
      <li>
          <app-logo src=${asset("./assets/icons/email.svg")} alt="Email icon"></app-logo>
          <app-link variant="plain">hanhtetaung.dev@gmail.com</app-link>
          <button onclick="navigator.clipboard.writeText('example@email.com')">Copy</button>
      </li>
      <li>
        <app-logo src=${asset("./assets/icons/linkedin.svg")} alt="Linkedin icon"></app-logo>
        <app-link variant="plain">in/han-htet-aung</app-link>
      </li>
    </ul>
</section>

`;

define("section-cta", { styles, template });
