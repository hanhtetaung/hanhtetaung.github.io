import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 20rem;
    margin-inline: 0.2rem;
  }

  section {
    width: 100%;
    
    @media (min-width: ${TABLET}) {
      width: min(80%, 144rem);
      margin-inline: auto;
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 3rem;

    @media (min-width: ${TABLET}) {
      display: none;
      
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    gap: 1rem;
    overflow: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-template-areas:
      "a e d"
      "a b b"
      "c c c"
      "c c c";
    height: 60rem;

    @media (min-width: ${TABLET}) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      height: 70rem;
      grid-template-areas:
        "b b a"
        "text text a"
        "d e a"
        "c c c"
        "c c c";
    }

    @media (min-width: ${DESKTOP}) {
      height: 70rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
        "a b b c"
        "a text text c"
        "a d e empty";
    }
  }

  ul li {
    border: 1px solid var(--color-text);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .img-a    { grid-area: a; }
  .img-b    { grid-area: b; }
  .img-c    { 
    grid-area: c;

    @media(min-width: ${DESKTOP}) {
      display: block;
    }
  }

  .img-d    { grid-area: d; }
  .img-e    { grid-area: e; }

  .img-f    { 
    grid-area: f;
    display: none;

    @media(min-width: ${DESKTOP}) {
      display: block;
    }
  }


  .title { 
    display: none;
    
    @media (min-width: ${TABLET}) {
      grid-area: text;
      display: flex;
      border: 1px dashed var(--color-text);
    }
  }

  .empty-block {
    grid-area: empty;
    border: 1px dashed var(--color-text);
  }


  p {
    margin: 0;
    font-size: var(--font-heading);
    font-weight: var(--font-bold);

    @media (min-width: ${DESKTOP}) {
      font-size: var(--font-title);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-position: 50% 50%;
    object-fit: cover;
  }
`;

const template = /* html */ `
  <section>
    <h2>Behind the Scene</h2>

    <ul>
        <li class="title">
          <p>Behind the Scene</p>
        </li>


        <li class="img-a">
            <img src=${asset("./assets/record-1.jpg")} alt="Teamwork">
        </li>
       

        <li class="img-b">
          <img src=${asset("./assets/record-2.jpg")} alt="Drawing">
        </li>

        <li class="img-c">
          <img src=${asset("./assets/record-3.jpg")} alt="Drawing">
        </li>

        <li class="img-d">
          <img src=${asset("./assets/record-4.jpg")} alt="Drawing">
        </li>

        <li class="img-e">
          <img src=${asset("./assets/record-5.jpg")} alt="Drawing">
        </li>

         <li class="empty-block">
        </li>
    </ul>

  </section>
`;

define("section-behind-the-scene", { styles, template });
