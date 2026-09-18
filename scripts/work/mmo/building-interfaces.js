import { define } from "../../../lib/define.js";

import "../../components/app-image.js";
import { asset } from "../../../lib/asset.js";
import { TABLET } from "../../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  h2 {
    margin: 0;
    margin-bottom: 2rem;
    font-size: var(--size-title);
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    margin-bottom: 1rem;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }

  article {

    @media (min-width:${TABLET}) {
      display: flex;
      justify-content: space-between;
    }
  }

  article p {
    margin-bottom: 2rem;
  }

  article div {

    @media (min-width: ${TABLET}) {
      max-width: 60%;
    }
  }
`;

const template = /* html */ `
  <section>
    <h2>Building Interfaces for Selling Medical Items Workflow</h2>

    <p>
      To complete the primary workflow, four interfaces are needed at first.
    </p>

    <ul>
      <li>
        <article>
          <h3>1st interface</h3>

          <div>
            <p>
             Start sale, review current staff, review printer status, and
             barcode status. Clicking start sale creates a new unique ID and
             redirects to the next screen with this ID.
           </p>

           <app-image
             variant="medium"
             src=${asset("./assets/images/case-study/mmo/1st-stage.avif")}
             alt="First interface preview"
             width="1398"
             height="1236"
           ></app-image>
          </div>
        </article>
      </li>

      <li>
         <article>
          <h3>2nd interface</h3>

          <div>
             <p>
            Scan a barcode item, enter a manual barcode item, review total,
            review items scanned, enter cash received, and confirm payment.
            Confirming payment leads to the 3rd interface.
          </p>

          <app-image
            variant="medium"
            src=${asset("./assets/images/case-study/mmo/2nd-stage.avif")}
            alt="Second interface preview"
            width="1398"
            height="1366"
          ></app-image>
          </div>
          </article>
      </li>

      <li>
        <article>
          <h3>3rd interface</h3>

          <div>
            <p>
            Review changes, review the receipt printed, and complete the sale
            by printing the receipt. It then moves to the final step.
          </p>

          <app-image
            variant="medium"
            src=${asset("./assets/images/case-study/mmo/3rd-stage.avif")}
            alt="Third interface preview"
            width="1474"
            height="864"
          ></app-image>
          </div>
          </article>
      </li>

      <li>
         <article>
          <h3>Final One</h3>

          <div>
            <p>Show the completed sale and provide options to go back home or start the next sale.</p>

          <app-image
            variant="medium"
            src=${asset("./assets/images/case-study/mmo/final-stage.avif")}
            alt="Final interface preview"
            width="1474"
            height="864"
          ></app-image>
          </div>
          </article>
      </li>
    </ul>
  </section>
`;

define("section-mmo-building-interfaces", { styles, template });
