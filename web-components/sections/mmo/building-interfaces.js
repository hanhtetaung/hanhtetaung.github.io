import { define } from "../../define";

import "../../components/section-title";
import "../../components/app-image";
import "../../components/app-article-paragraph";

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
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
`;

const template = /* html */ `
  <section>
    <section-title
      variant="text"
      props='{"name": "Building Interfaces for selling medical items workflow"}'
    ></section-title>

    <p>
      To complete the primary workflow, four interfaces are needed at first.
    </p>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "1st interface" }'>
          <p>
            Start sale, review current staff, review printer status, and
            barcode status. Clicking start sale creates a new unique ID and
            redirects to the next screen with this ID.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/1st-stage.avif"
            alt="First interface preview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "2nd interface" }'>
          <p>
            Scan a barcode item, enter a manual barcode item, review total,
            review items scanned, enter cash received, and confirm payment.
            Confirming payment leads to the 3rd interface.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/2nd-stage.avif"
            alt="Second interface preview"
            width="1398"
            height="1366"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "3rd interface" }'>
          <p>
            Review changes, review the receipt printed, and complete the sale
            by printing the receipt. It then moves to the final step.
          </p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/3rd-stage.avif"
            alt="Third interface preview"
            width="1474"
            height="864"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Final one" }'>
          <p>Show the completed sale and provide options to go back home or start the next sale.</p>

          <app-image
            variant="medium"
            src="/assets/images/case-study/mmo/final-stage.avif"
            alt="Final interface preview"
            width="1474"
            height="864"
          ></app-image>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;

define("section-mmo-building-interfaces", { styles, template });
