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
        props='{"name": "Need One Interface"}'
      ></section-title>
      <p>
        The interface has two main areas: a <b>Center Panel</b> to
        visualize the knowledge tree and a <b> Right Panel</b> to
        display information about the selected node.
      </p>

      <ul>
        <li>
            <app-article-paragraph props='{ "title": "Default State"}'>
        <p>
          The center panel displays the entire knowledge tree. Sources
          are shown as blue nodes, while Goods are shown as green nodes.
          Every node is clickable, and the right panel remains empty
          until a node is selected.
        </p>

        <app-image
        variant="medium"
          src="/assets/images/case-study/knowledge-tree/default-state.avif"
          alt="Inspiration Collection"
          width="1398"
          height="1236"
        ></app-image>
      </app-article-paragraph>

        </li>
        <li>
            <app-article-paragraph props='{ "title": "Selecting a Source Node"}'>
         <p>
              When a source is selected, the center panel highlights its
              connected goods. The right panel displays the source name, and
              a list of goods made from that source.
            </p>

            <app-image
            variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-source-node.avif"
              alt="Wireframe Screenshot"
              width="1398"
              height="1366"
            ></app-image>
            
      </app-article-paragraph>
        </li>
        <li>
           <app-article-paragraph props='{ "title": "Selecting a Good Node"}'>
         <p>
              A good can be made directly from sources or from other goods.
              When a good is selected, the right panel displays its sources,
              ingredients (if any), and the goods that use it (if any).
            </p>

            <app-image
              variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-1.avif"
              alt="Design Foundation Screenshot"
              width="1474"
              height="864"
            ></app-image>

            <app-image
              variant="medium"
              src="/assets/images/case-study/knowledge-tree/selecting-a-good-node-2.avif"
              alt="Design Foundation Screenshot"
              width="1474"
              height="864"
            ></app-image>
      </app-article-paragraph>
        </li>
      </ul>

    
     

     
  </section>
`;

define("section-knowledge-tree-need-one-interface", { styles, template });
