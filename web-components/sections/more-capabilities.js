import { define } from "../define.js";
import "../components/section-title.js";
import "../components/app-badge.js";
import "../components/app-icon.js";
import "../components/more-capabilities-item.js";
import { PHONE } from "../breakpoints.js";

const styles = /* css */ `
    section {
        width: 80%;
        margin-inline: auto;
    }

    h3 {
        margin: 0;
    }

    ol {
        margin: 0;
        position: relative;
        list-style: none;
        padding: 0;
        height: 48rem;

        @media (max-width: ${PHONE}) {
            position: static;
            height: auto;
            display: flex;
            gap: 2rem;
            overflow: scroll;
        }
    }


li:nth-child(1) {
    position: absolute;
    top: 12rem;
    left: 0rem;
}

li:nth-child(2) {
   position: absolute;
    top: 0rem;
    left: 22rem;
}

li:nth-child(3) {
   position: absolute;
    top: 25rem;
    left: 22rem;
}

@media (max-width: ${PHONE}) {
  li:nth-child(1),
  li:nth-child(2),
  li:nth-child(3) {
    position: static;
    top: auto;
    left: auto;
  }
}
`;

const template = () => /* html */ `
  <section>
      <section-title
        props='${JSON.stringify({
          name: "More Capabilities",
          img: "./assets/icons/peacock.svg",
          alt: "Peacock Logo",
        })}'
      ></section-title>
            
    <ol>
        <li>
           <more-capabilities-item props='${JSON.stringify({
             title: "Design System",
             subTitle: "Build",
             href: "/capabilities/design-system",
           })}'>
            </more-capabilities-item>
        </li>
        <li>
            <more-capabilities-item props='${JSON.stringify({
              title: "User Interfaces",
              subTitle: "Design",
              href: "/capabilities/user-interfaces",
            })}'>
            </more-capabilities-item>
        </li>
        <li>
            <more-capabilities-item props='${JSON.stringify({
              title: "Web Interfaces",
              subTitle: "Develop",
              href: "/capabilities/web-interfaces",
            })}'>
            </more-capabilities-item>
        </li>
    </ol>
  </section>
`;

define("section-more-capabilities", { styles, template });
