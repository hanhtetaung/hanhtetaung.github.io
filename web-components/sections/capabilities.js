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

   h3 {
    margin: 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
}

ol {
      padding-left: 2rem;
    padding: 0;
    display: flex;
    gap: 6rem;
    margin-block: 5rem;

    @media (max-width: ${PHONE}) {
        flex-direction: column;
    }
  }

    ol > li {
    flex: 1 1 0;
    min-width: 0;
    } 

    ul {
        margin-top: 1rem;
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
            <capabilities-item props='{"title": "Design System", "subTitle": "Build", "description": "Build scalable and consistent design systems.", "href": "/assets/icons/design-system.svg", "alt": "Design System Logo"}'>
            </capabilities-item>
        </li>
        <li>
            <capabilities-item props='{"title": "User Interfaces", "subTitle": "Design", "description": "Design clear and intuitive user interfaces.", "href": "/assets/icons/user-interface.svg", "alt": "User Interface Logo"}'></capabilities-item>
        </li>
        <li>
            <capabilities-item props='{"title": "Web Interfaces", "subTitle": "Develop", "description": "Develop production-ready web interfaces.", "href": "/assets/icons/web-interface.svg", "alt": "Web Interface Logo"}'></capabilities-item>
        </li>
    </ol>


     <!-- <h3>Out of My Scope:</h3>
      <ul>
        <li>Backend Developement</li>
        <li>Database Management</li>
        <li>Server Maintenance</li>
      </ul> -->
  </section>
`;

define("section-capabilities", { styles, template });
