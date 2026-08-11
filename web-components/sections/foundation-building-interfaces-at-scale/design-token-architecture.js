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
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    padding-top: 5rem;
  }

  ol {
    list-style: disc;
    padding: 0;
    padding-left: 1.5rem;
  }
`;

const template = /* html */ `
  <section id="design-token-architecture">
    <section-title variant="text" props='{"name": "Design Token Architecture"}'></section-title>

    <p>A two-tier architecture is enough: Primitive and Semantic.</p>

    <app-image
      variant="full"
      src="/assets/images/foundation-building-software/token-architecture.avif"
      alt="Token architecture overview"
      width="1398"
      height="1236"
    ></app-image>

    <ul>
      <li>
        <app-article-paragraph variant="block" props='{ "title": "Single Source of Truth" }'>
          <p>
            Use semantic tokens to define all interface building blocks. The
            Figma file uses slashes as separators with all letters lowercase,
            but it can be converted to a preferred platform convention like
            dashes or camelCase.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/single-source-of-truth.avif"
            alt="Single source of truth overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Theming" }'>
          <p>
            A token can point to different values related to a mode, and when
            the mode changes, the reference values are updated automatically.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/theming.avif"
            alt="Theming overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Token Structure" }'>
          <p>Tokens are named in two parts:</p>
          <ol>
            <li>Base</li>
            <li>Modifier (optional)</li>
          </ol>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/token-structure.avif"
            alt="Token structure overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Design Token Anatomy" }'>
          <p>
            The diagram below shows how primitive and semantic tokens combine
            base and modifier.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/design-token-anatomy.avif"
            alt="Design token anatomy overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph variant="block" props='{ "title": "Applying Design Tokens" }'>
          <p>
            Here is an example of how semantic tokens are used throughout a
            Strava activities page.
          </p>
          <app-image
            variant="full"
            src="/assets/images/foundation-building-software/applying-token.avif"
            alt="Applying token overview"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>
</ul>
  </section>
`;

define("section-design-token-architecture", { styles, template });
