import { define } from "../../define";

import "../../components/section-title";
import "../../components/app-image";
import "../../components/app-link";
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
    gap: 2rem;

    border-top: 1px dashed var(--color-text);
    padding-top: 5rem;
  }

  ol {
    list-style: disc;
  }
`;

const template = /* html */ `
  <section>
    <section-title variant="text" props='{"name": "Process"}'></section-title>

    <ul>
      <li>
        <app-article-paragraph props='{ "title": "Research" }'>
          <p>
            Research ideas and visual references to define the overall
            direction of the website. This stage focused on exploring modern
            layouts, typography, spacing, and clean visual aesthetics to
            establish a clear and professional visual foundation.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/inspiration.avif"
            alt="Inspiration Collection"
            width="1398"
            height="1236"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Wireframe" }'>
          <p>
            Plan the structure and layout of the website through low-fidelity
            wireframes. This stage focused on content hierarchy, storytelling
            flow, and user navigation before moving into visual design.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/wireframe.avif"
            alt="Wireframe Screenshot"
            width="1398"
            height="1366"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Prototype" }'>
          <p>
            Build the design system and craft the polished visual interface.
            This stage focused on transforming the wireframes into final
            responsive designs with complete visual styling, reusable
            components, refined layouts, and overall user experience.
          </p>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/design-foundation.avif"
            alt="Design Foundation Screenshot"
            width="1474"
            height="864"
          ></app-image>
          <app-image
            variant="medium"
            src="/assets/images/case-study/skssolar/final-design.avif"
            alt="Final Design"
            width="1402"
            height="1378"
          ></app-image>
        </app-article-paragraph>
      </li>

      <li>
        <app-article-paragraph props='{ "title": "Develop & Deliver" }'>
          <p>
            Translate the approved design into a responsive website while
            maintaining visual consistency across all screen sizes. The
            project was managed with GitHub and deployed automatically through
            GitHub Pages and GitHub Actions.
          </p>

          <p><b>Tech Stack</b></p>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
          </ol>
        </app-article-paragraph>
      </li>
    </ul>
  </section>
`;

define("section-sks-solar-process", { styles, template });
