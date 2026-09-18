import { define } from "../../lib/define.js";
import { asset, navHref } from "../../lib/asset.js";
import { TABLET } from "./breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    background: var(--color-primary);
    color: #030f03;
  }

  footer {
    width: 80%;
    margin-inline: auto;    
    
    padding-top: 10rem;
    padding-bottom: 5rem;

    position: relative;

     @media (min-width: ${TABLET}) {
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    width: auto;
    height: 10rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    padding: 0;
    gap: 1rem;
    overflow: scroll;
    padding-block: 2rem;
  }

  ul li {
    border: 3px solid var(--color-background);
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    transform: rotate(-0.5deg);
  }

  figure img {
    height: 5rem;
  }

  figure {
    display: flex;
    gap: 1rem;
  }

  figcaption {
    
    @media (min-width: ${TABLET}) {
      max-width: 15ch;

    }
  }

  .arrow {
    display: inline-block;
    position: absolute;

    left: 50%;
    top: -5%;
    transform: translateX(-50%);
  }

  .arrow img {
    width: 5rem;
    height: auto;
  }

  ol {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: #030f03;
  }

    p {
        margin: 0;
        padding: 2rem;
        font-size: var(--font-small);

        @media (min-width: ${TABLET}) {
          display: flex;
          justify-content: space-between;
        }
    }

    p a {
        color: var(--color-background);
    }
`;

const template = /* html */ `
  <footer>
        <a href="#" class="arrow"><img src=${asset("./assets/arrow.png")} alt="Up arrow"></a>

           <nav>
                <figure>
                    <img src=${asset("./assets/logo.png")}
                    alt="Logo">
                    <figcaption>Maple Montessori Preschool</figcaption>
                </figure>
        
         
                <ol>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Testimonials</a></li>
                    <li><a href="">Registration & Fees</a></li>
                </ol>
            </nav>


        <ul>
            <li><img src=${asset("./assets/footer-1.jpg")} alt="Welcome Maple Photo"></li>
            <li><img src=${asset("./assets/footer-2.jpg")} alt="Welcome Maple Photo"></li>
            <li><img src=${asset("./assets/footer-3.jpg")} alt="Welcome Maple Photo"></li>
            <li><img src=${asset("./assets/footer-4.jpg")} alt="Welcome Maple Photo"></li>
            <li><img src=${asset("./assets/footer-5.jpg")} alt="Welcome Maple Photo"></li>
        </ul>

    </footer>

    <p>
        <small>© 2026 Maple Montessori Preschoool. All rights reserved</small>
        <a href="https://hanhtetaung.dev/">Crafted by Han</a>
    </p>
`;

define("section-footer", { template, styles });
