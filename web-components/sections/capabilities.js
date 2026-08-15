import { define } from "../define";
import "../components/section-title";
import "../components/app-badge";
import "../components/app-icon";
import "../components/capabilities-item";
import { TABLE } from "../breakpoints";

const styles = /* css */ `
  section {
    width: 80%;
    margin-inline: auto;
  }

   h3 {
    margin: 0;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

ol {
    padding: 0;
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: ${TABLE}) {
      grid-template-columns: 1fr;
      border: none;
    }
  }
`;

const template = () => /* html */ `
  <section>
      <section-title
        props='${JSON.stringify({
          name: "Capabilities",
          img: "/assets/icons/peacock.svg",
          alt: "Peacock Logo",
        })}'
      ></section-title>
            
    <ol>
        <li>
            <capabilities-item props='{"title": "Design System", "subTitle": "Build", "href": "/assets/icons/design-system.svg", "alt": "Design System Logo"}'>
            </capabilities-item>
        </li>
        <li>
            <capabilities-item props='{"title": "User Interfaces", "subTitle": "Design", "href": "/assets/icons/user-interface.svg", "alt": "User Interface Logo"}'></capabilities-item>
        </li>
        <li>
            <capabilities-item props='{"title": "Web Interfaces", "subTitle": "Develop", "href": "/assets/icons/web-interface.svg", "alt": "Web Interface Logo"}'></capabilities-item>
        </li>
    </ol>
  </section>
`;

define("section-capabilities", { styles, template });
