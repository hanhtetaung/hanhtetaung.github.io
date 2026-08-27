import { define } from "../define.js";
import "../components/section-title.js";
import "../components/app-badge.js";
import "../components/app-icon.js";
import "../components/capabilities-item.js";

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
    gap: 5rem;
    overflow: scroll;
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
           <capabilities-item props='${JSON.stringify({
             title: "Design System",
             subTitle: "Build",
             href: "/capabilities/design-system",
             delivers: [
               {
                 name: "Design Tokens",
                 icon: "./assets/icons/design-tokens.svg",
                 alt: "Design Tokens Icon",
               },
               {
                 name: "Component Library",
                 icon: "./assets/icons/component-library.svg",
                 alt: "Component Library Icon",
               },
               {
                 name: "Guidelines",
                 icon: "./assets/icons/guidelines.svg",
                 alt: "Guidelines Icon",
               },
             ],
           })}'>
  </capabilities-item>
        </li>
        <li>
            <capabilities-item props='${JSON.stringify({
              title: "User Interfaces",
              subTitle: "Design",
              href: "/capabilities/user-interfaces",
              delivers: [
                {
                  name: "User Flows",
                  icon: "./assets/icons/user-flows.svg",
                  alt: "User Flows Icon",
                },
                {
                  name: "Hi Fi Interfaces",
                  icon: "./assets/icons/hi-fi-interfaces.svg",
                  alt: "Hi Fi Interface Icon",
                },
                {
                  name: "Prototypes",
                  icon: "./assets/icons/prototypes.svg",
                  alt: "Prototypes Icon",
                },
              ],
            })}'>
  </capabilities-item>
        </li>
        <li>
            <capabilities-item props='${JSON.stringify({
              title: "Web Interfaces",
              subTitle: "Develop",
              href: "/capabilities/web-interfaces",
              delivers: [
                {
                  name: "Standalone HTML",
                  icon: "./assets/icons/html-1.svg",
                  alt: "HTML Icon",
                },
                {
                  name: "Assets",
                  icon: "./assets/icons/assets.svg",
                  alt: "Assets Icon",
                },
              ],
            })}'>
  </capabilities-item>
        </li>
    </ol>
  </section>
`;

define("section-capabilities", { styles, template });
