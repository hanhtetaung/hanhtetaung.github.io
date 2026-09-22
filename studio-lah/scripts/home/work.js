import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;

    @media (min-width: ${DESKTOP}) {
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 4rem;
  }

  p {
    margin: 0;
  }

  div {
    overflow: scroll;
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

  table {
      border-collapse: collapse;
      width: 100%;
      letter-spacing: 1px;
      text-align: start;
  }

  th,
  td {
  border-bottom: 1px solid rgb(160 160 160);
  padding: 8px 10px;
  font-size: var(--font-small);
  }

  td:nth-of-type(2) {
    font-size: var(--font-body);
    min-width: 30ch;
  }

  th {
    text-align: start;
    color: var(--color-primary);
  }

`;

const template = /* html */ `
  <section>
      <h2>Our Work</h2>

      <div>
          <table>
              <thead>
                  <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Event</th>
                      <th scope="col">Service</th>
                  </tr>
              </thead>
      
              <tbody>
                  <tr>
                      <td>10/12/2021</th>
                      <td>Miss Crystal Thanintharyi</td>
                      <td>Videography</td>
                  </tr>
                  <tr>
                      <td>12/01/2022</th>
                      <td>University Water Festival</td>
                      <td>Live Streaming</td>
                  </tr>
                  <tr>
                      <td>09/11/2021</th>
                      <td>Facebook Live Sales </td>
                      <td>Photography</td>
                  </tr>
                  <tr>
                      <td>04/03/2020</th>
                      <td>Dawei DDPC</td>
                      <td>Live Streaming</td>
                  </tr>
              </tbody>
          </table>
      </div>


  </section>
`;

define("section-work", { styles, template });
