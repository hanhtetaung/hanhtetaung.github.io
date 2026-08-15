import { define } from "../define";
import "../components/section-title";
import "../components/app-badge";
import "../components/app-icon";
import "../components/capabilities-item";
import { PHONE } from "../breakpoints";

const styles = /* css */ `
  section {
    width: 80%;
    margin-inline: auto;
  }

   h3,p {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

    article {
        display: grid;
        grid-template-columns: 1fr 1fr;

        @media (max-width: ${PHONE}) {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
    }

    ol {
        padding-left: 2rem;
        padding: 0;
        display: flex;
        gap: 6rem;
        flex-direction: column;

        @media (max-width: ${PHONE}) {
            flex-direction: column;
        }
    }

    li {
        display: flex;
        gap: 2rem;
    }

    span {
        color: var(--color-secondary);
        font-size: var(--size-body);
        font-weight: var(--font-bold);
        display: block;
        margin-bottom: 0.5rem;
    }
`;

const template = () => /* html */ `
  <section>
      <section-title
        props='${JSON.stringify({
          name: "Workflow",
          img: "/assets/icons/ostrich.svg",
          alt: "Peacock Logo",
        })}'
      ></section-title>

    <article>
        <p>A process from understanding an idea to building production-ready interfaces</p>
        <ol>
            <li>
                <app-icon variant="medium" src="/assets/icons/one-finger.svg" alt="One Finger Icon"></app-icon>
               <p><span>Understand Idea</span>Turn requirements, problems, and needs into a clear understanding.</p>
            </li>
            <li>
                <app-icon variant="medium" src="/assets/icons/two-finger.svg" alt="Two Finger Icon"></app-icon>
               <p><span>Design Interfaces</span>Build a design foundation and design user interface component by component.</p>
            </li>
            <li>
                <app-icon variant="medium" src="/assets/icons/three-finger.svg" alt="Three Finger Icon"></app-icon>
               <p><span>Develop Web Interfaces</span>Build production-ready interfaces using HTML, CSS, JavaScript, and Web Components.</p>
            </li>
            <li>
                <app-icon variant="medium" src="/assets/icons/loop.svg" alt="Loop Icon"></app-icon>
               <p><span>Loop</span>Iterate, refine, and improve continuously.</p>
            </li>
        </ol>
    </article>
            

  </section>
`;

define("section-workflow", { styles, template });
