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
    margin-bottom: 4rem;

    @media (min-width: ${DESKTOP}) {
      margin-bottom: 5rem;
    }
  }

  h3 {
    margin: 0;
    font-size: var(--size-heading);
    width: fit-content;
  }

  p {
    margin: 0;
    margin-bottom: 2rem;
  }

  hgroup p {
    margin: 0;
  }

  ul {
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
    gap: 5rem;
    padding-bottom: 2rem;
    align-items: flex-start;
    
    @media (min-width:${TABLET}) {
        display: flex;
        overflow: scroll;
        gap: 5rem;
    }
    
    @media (min-width:${DESKTOP}) {
        gap: 15rem;
    }

  }

  li {
        position: relative;
        border: 1px solid var(--color-text);
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 5rem;

        @media (min-width: ${TABLET}) {
            min-width: 30ch;
            width: 30ch;
        }
    }

    @media (min-width: ${TABLET}) {
      li:last-child {
        --road: 40px;
        position: relative;
        overflow: hidden;
        padding-left: var(--road);
        padding-right: var(--road);
        border-style: dashed;
        border-left: none;
        border-right: none;
      }
  
      li:last-child::before,
      li:last-child::after {
        content: "";
        position: absolute;
        top: 0;
        width: 99rem;           
        height: var(--road);
        background: url("${asset("./assets/icons/road.svg")}") repeat-x left / auto var(--road);
        transform-origin: top left;
        transform: rotate(90deg);
        pointer-events: none;
      }
  
      li:last-child::before { left: var(--road); }
      li:last-child::after  { left: 100%; }        
    }

    @media (min-width: ${DESKTOP}) {
      li:last-child {
        margin-top: 7rem;
      }
    }

    article {
        padding-inline: 3rem;
        padding-block: 2rem;
    }

  a {
    display: inline-block;
    text-decoration: none;
    color: var(--color-text);
    padding: 1rem 2rem;
    border: 1px solid var(--color-text);
    width: fit-content;
    margin-top: 1.5rem;
  }

  img {
    width: 100%;
    height: auto;
  }


  h3 img {
    width: 100%;
    height: 3rem;
  }

  
`;

const template = /* html */ `
<section>
  <hgroup>
    <p>[ Menu ]</p>
    <h2>Two Options</h2>
  </hgroup>

    <ul>
        <li>
            <img src=${asset("./assets/images/home/web-identity.png")} alt="Web Identity">
            <article >
                <h3><img src=${asset("./assets/images/home/web-identity.svg")} alt="Web Identity"></h3>
                <p>Landing page or multiple pages, illustrations plus human taste</p>
            </article>
        </li>
        
        <li>
            <img src=${asset("./assets/images/home/story-map.png")} alt="Story Map">

            <article>
                <h3><img src=${asset("./assets/images/home/story-map.svg")} alt="Story Map"></h3>
                <p>Everything in your memory, your own characters plus infinite patience</p>
    
                <a href="/map" target="_blank">Preview</a>
            </article>
        </li>

    </ul>
</section>
`;

define("section-menu", { styles, template });
