import { define } from "../../define";

import "../../components/app-image";
import "../../components/app-link";

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
  }

  ul {
    margin: 0;
    margin-bottom: 2rem;
  }

  h3 {
    font-size: var(--size-heading);
    margin: 0;
    margin-bottom: 1rem;
  }

  article {
    margin-bottom: 3rem;
  }

  code {
    display: block;
    margin-bottom: 2rem;
  }
`;

const template = /* html */ `
  <section>
    <section-title
        variant="text"
        props='{"name": "Design Foundation"}'
      ></section-title>

          <app-image
            variant="large"
            src="/assets/images/case-study/knowledge-tree/foundation.avif"
            alt="Wireframe Screenshot"
          ></app-image>


          <article>
            <h3>Data Structure</h3>

            <p><b>Source</b></p>
            <code> { "id": "name", "type": "source" } </code>

            <p>
              <b>Good :</b> The components field references either
              source nodes or other goods
            </p>

            <code>
              { "id": "name", "type": "good", "components": ["id",
              "id", "id"] }
            </code>
          </article>

          <article>
            <h3>Tech Stacks</h3>
            <ul>
              <li>Figma</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>JavaScript</li>
              <li>Sonnet 5, Quwen3.7-Plus</li>
            </ul>

            <p>
              <b>Hosted on:</b>
              <app-link
                variant="underline"
                href="https://github.com/hanhtetaung/hanhtetaung.github.io/tree/main/knowledge-tree"
                target="_blank"
                >Github</app-link>
            </p>
          </article>
  </section>
`;

define("section-knowledge-tree-building-block", { styles, template });
