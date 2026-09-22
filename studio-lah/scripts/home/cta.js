import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 15rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    /* text-align: center; */

    @media (min-width: ${DESKTOP}) {
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 3rem;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 10rem;
    overflow: scroll;

     @media (min-width: ${TABLET}) {
      display: grid;
          grid-template-columns: 1fr 1fr 1fr;

      gap: 20rem;
    }
  }

  p {
    margin: 0;
  }

  img {
    height: 20rem;
    width: auto;
  }

  figcaption {
    margin-top: 1rem;
  }

  figure {
    margin: 0;
    text-align: center;

  }

    div {
        overflow: scroll;
    }

    table {
    border-collapse: collapse;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

td {
    padding: 0.8rem 1rem;
    width: 50%;
    min-width: 14ch;
}

td:first-child {
    text-align: end;
    font-size: var(--font-small);
}

th {
  padding-block: 2rem;
}

td:last-child {
    text-align: start;
}

a {
    text-decoration: none;
    color: var(--color-text);
}
`;

const template = /* html */ `
  <section>
    <h2>Contact</h2>

    <div>
        <table>
             <tbody>
                 <tr>
                     <td>Primary Phone</td>
                     <td> <a href="tel:+959422206996" target="_blank">09422206996</a></td>
                 </tr>
                 <tr>
                     <td>Secondary Phone</td>
                     <td> <a href="tel:+959699604222" target="_blank">09699604222</a></td>
                 </tr>
                 <tr>
                     <td>Email</td>
                     <td>
                        <a href="mailto:contact@chanhein.com">contact@chanhein.com</a></td>
                 </tr>
     
                 <tr>
                     <th colspan="2">Social Media</th>
                 </tr>
     
                 <tr>
                     <td>Facebook </td>
                     <td><a href="https://www.facebook.com/studiolahdawei" target="_blank">Studio LAH</a></td>
                 </tr>
                 <tr>
                     <td>Tiktok</td>
                     <td><a href="https://www.tiktok.com/@studiolah" target="_blank">Studio LAH</a></td>
                 </tr>
             </tbody>
         </table>
    </div>

  </section>
`;

define("section-cta", { styles, template });
