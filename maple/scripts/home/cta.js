import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;

    @media (min-width: ${DESKTOP}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;

    }
  }

  hgroup {
    margin-bottom: 3rem;
  }

    h2 {
        margin: 0;
        font-size: var(--font-title);
        margin-bottom: 2rem;
    }


  h3 {
    margin: 0;
    font-size: var(--font-heading);
  }

  h4 {
    margin: 0;
    font-size: var(--font-body);
  }

  p {
    margin: 0;
  }

  iframe {
    width: 100%;
    grid-column: span 2;
    border: 7px solid var(--color-primary);
    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
    transform: rotate(-0.5deg);
  }

  address {
    font-style: normal;
  }

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 5rem;

    @media (min-width: ${TABLET}) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  ul li {
    overflow: scroll;
  }

  a {
    color: var(--color-text);
    text-decoration: none;
  }

  ol {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li p {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const template = /* html */ `
  <section>
    <h2>Contact</h2>


    <address>
        <hgroup>
            <h3>Maple Montessori Preschool</h3>
            <p>Scout Hall, Wilson St, Winchmore Hill, London N21 1BP</p>
        </hgroup>
    
    
        <ul>
            <li>
                <h4>Call Us</h4>
                <p>
                    <img src=${asset("./assets/phone.svg")} alt="Phone icon">
                    <a href="#">07498498423</a>
                </p>
            </li>
            <li>
                <h4>Email Us</h4>
                <p>
                    <img src=${asset("./assets/email.svg")} alt="Phone icon">
                    <a href="#">info@maplemontessori.co.uk</a>
                </p>
            </li>
            <li>
                <h4>Follow Us</h4>
                <ol>
                    <li>
                        <p>
                            <img src=${asset("./assets/facebook.svg")} alt="Phone icon">
                            <a href="#">maplemontessorilondon</a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <img src=${asset("./assets/instagram.svg")} alt="Phone icon">
                            <a href="#">maple_montessori</a>
                        </p>
                    </li>
                </ol>
            </li>
        </ul>
    </address>


    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.8052723821975!2d-0.10059059999999999!3d51.6356074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487619887d9c6401%3A0xf05714aae17b836b!2sMaple%20Montessori%20Preschool!5e1!3m2!1sen!2suk!4v1789721307146!5m2!1sen!2suk" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  </section>
`;

define("section-cta", { styles, template });
