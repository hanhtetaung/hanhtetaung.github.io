import { define } from "../define.js";
import "../components/section-title.js";
import "../components/app-badge.js";
import "../components/app-icon.js";
import "../components/capabilities-item.js";
import { TABLE } from "../breakpoints.js";

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
    display: flex;
    flex-direction: column;
    gap: 5rem;

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
          img: "./assets/icons/peacock.svg",
          alt: "Peacock Logo",
        })}'
      ></section-title>
            
    <ol>
        <li>
            <capabilities-item props='{"title": "Design System", "subTitle": "Build", "href": "/capabilities/design-system", "icon": "./assets/icons/design-system.svg", "alt": "Design System Icon", "delivers": ["Design Tokens", "Component Library", "Guidelines"]}'>
            </capabilities-item>
        </li>
        <li>
              <capabilities-item props='{"title": "User Interfaces", "subTitle": "Design", "href": "/capabilities/user-interfaces", "icon": "./assets/icons/user-interface.svg", "alt": "User Interface Icon", "delivers": ["User Flows", "Hi-Fi Interfaces", "Prototypes"]}'>
            </capabilities-item>
        </li>
        <li>
             <capabilities-item props='{"title": "Web Interfaces", "subTitle": "Develop", "href": "/capabilities/web-interfaces", "icon": "./assets/icons/web-interface.svg", "alt": "Web Interface Icon", "delivers": ["HTML, CSS", "Web Components"]}'>
            </capabilities-item>
        </li>
    </ol>
  </section>
`;

define("section-capabilities", { styles, template });
