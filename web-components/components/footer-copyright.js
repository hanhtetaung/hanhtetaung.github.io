import { PHONE } from "../breakpoints";
import { define } from "../define";

const sitemaps = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/credits", name: "Credits" },
  { href: "/hire-me", name: "Hire Me" },
  { href: "/work/mmo", name: "MMO" },
  { href: "/thank-you", name: "Thank You" },
  { href: "/work/bamboo", name: "Bamboo" },
  { href: "/work/portfolio", name: "Portfolio" },
  { href: "/work/au-van", name: "AU Van" },
  { href: "/work/sks-solar", name: "SKS Solar" },
  {
    href: "/writings/foundation-building-interfaces-at-scale",
    name: "Foundation",
  },
  { href: "/work/knowledge-tree", name: "Knowledge Tree" },
];

const styles = /* css */ `
  :host {
   display: flex;
    justify-content: space-between;

   @media (max-width: ${PHONE}) {
        flex-direction: column;
        gap: 3rem;
   }
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
  }
`;

const template = () => /* html */ `
    
      <p>
        © Han Htet Aung 2026 |
        <app-link href="/credits" variant="underline">Credits</app-link>
      </p>

       <ul>
            <li>
                <app-link href="mailto:hanhtetaung.dev@gmail.com" variant="image">
                <img
                    src="/assets/icons/email.svg"
                    alt="Email Icon"
                />
                </app-link>
            </li>
            <li>
                <app-link
                href="https://github.com/hanhtetaung/"
                target="_blank"
                rel="noopener"
                variant="image"
                >
                <img
                    src="/assets/icons/github.svg"
                    alt="Github Icon"
                />
                </app-link>
            </li>
            <li>
                <app-link
                href="https://www.linkedin.com/in/han-htet-aung/"
                target="_blank"
                rel="noopener"
                variant="image"
                >
                <img
                    src="/assets/icons/linkedin.svg"
                    alt="Linkedin Icon"
                />
                </app-link>
            </li>
        </ul>
`;

define("footer-copyright", { styles, template });
