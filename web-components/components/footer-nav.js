import { PHONE } from "../breakpoints.js";
import { define } from "../define.js";
import { navHref } from "../asset.js";

const sitemaps = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/credits", name: "Credits" },
  { href: "/hire-me", name: "Hire Me" },
  { href: "/thank-you", name: "Thank You" },
  { href: "/capabilities/design-system", name: "Design System" },
  { href: "/capabilities/user-interfaces", name: "User Interfaces" },
  { href: "/capabilities/web-interfaces", name: "Web Interfaces" },
  { href: "/work/terra", name: "Terra" },
  { href: "/work/bamboo", name: "Bamboo" },
  { href: "/work/mmo", name: "MMO" },
  { href: "/work/au-van", name: "AU Van" },
  { href: "/work/portfolio", name: "Portfolio" },
  { href: "/work/sks-solar", name: "SKS Solar" },
  {
    href: "/writings/foundation-building-interfaces-at-scale",
    name: "Foundation",
  },
];

const styles = /* css */ `
  :host {
    --local-bg: var(--color-secondary);
    --local-color: var(--color-bg-primary);
    --local-border: none;

   display: flex;
   gap: 5rem;

   @media (max-width: ${PHONE}) {
        flex-direction: column;
        gap: 3rem;
        margin-block: 2rem;
   }
  }

    ol {
    padding: 0;
    list-style-type: none;
    display: flex;
    margin: 0;
  }

  span {
    color: var(--color-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-bold);
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  nav ol {
    flex-wrap: wrap;
    flex-direction: column;
    max-height: 12.5ch;
    overflow: scroll;

    @media (max-width: ${PHONE}) {
        max-height: 20ch;
    }
  }

  ol li {
    margin-right: 5rem;
    margin-bottom: 0.3rem;
  }
`;

const template = () => /* html */ `
    <nav>
        <span>Sitemap</span>

        <ol>
            ${sitemaps
              .map(
                (s) => /*html*/ `
                <li>
                    <app-link variant="sitemap" href=${navHref(s.href)} >${s.name}</app-link>
                </li>
            `,
              )
              .join("")}
        </ol>
    </nav>
`;

define("footer-nav", { styles, template });
