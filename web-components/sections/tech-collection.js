import { define } from "../define.js";
import "../components/app-link.js";
import "../components/section-title.js";
import { asset, navHref } from "../asset.js";

const techCollection = [
  {
    href: "https://raindrop.io/",
    src: "./assets/tech-collection/raindrop-io.svg",
    alt: "Raindrop-io logo",
  },
  {
    href: "https://www.spendee.com/",
    src: "./assets/tech-collection/spendee.svg",
    alt: "Spendee logo",
  },
  {
    href: "https://citymapper.com/",
    src: "./assets/tech-collection/citymapper.svg",
    alt: "Citymapper logo",
  },
  {
    href: "https://www.figma.com/",
    src: "./assets/tech-collection/figma.svg",
    alt: "Figma logo",
  },
  {
    href: "https://www.strava.com/",
    src: "./assets/tech-collection/strava.svg",
    alt: "Strava logo",
  },
  {
    href: "https://www.notion.com/",
    src: "./assets/tech-collection/notion.svg",
    alt: "Notion logo",
  },
  {
    href: "https://wise.com/",
    src: "./assets/tech-collection/wise.svg",
    alt: "Wise logo",
  },
  {
    href: "https://dayoneapp.com/",
    src: "./assets/tech-collection/day-one.svg",
    alt: "Day One logo",
  },
  {
    href: "https://telegram.org/",
    src: "./assets/tech-collection/telegram.svg",
    alt: "Telegram logo",
  },
  {
    href: "https://www.redbus.com/",
    src: "./assets/tech-collection/redbus.svg",
    alt: "Red Bus logo",
  },
  {
    href: "https://www.iqair.com/",
    src: "./assets/tech-collection/iqair.svg",
    alt: "IqAir logo",
  },
  {
    href: "https://www.shazam.com/",
    src: "./assets/tech-collection/shazam.svg",
    alt: "Shazam logo",
  },
  {
    href: "https://www.skyscanner.net/",
    src: "./assets/tech-collection/skyscanner.svg",
    alt: "Skyscanner logo",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    src: "./assets/tech-collection/html5.svg",
    alt: "HTML5 logo",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    src: "./assets/tech-collection/css3.svg",
    alt: "CSS3 logo",
  },
  {
    href: "https://bun.com/",
    src: "./assets/tech-collection/bun.svg",
    alt: "Bun logo",
  },
  {
    href: "https://www.upwork.com/",
    src: "./assets/tech-collection/upwork.svg",
    alt: "Upwork logo",
  },
  {
    href: "https://google.com/maps",
    src: "./assets/tech-collection/google-map.svg",
    alt: "Google Map logo",
  },
  {
    href: "https://www.airbnb.com/",
    src: "./assets/tech-collection/airbnb.svg",
    alt: "Airbnb logo",
  },
  {
    href: "https://ticktick.com/",
    src: "./assets/tech-collection/ticktick.svg",
    alt: "Ticktick logo",
  },
  {
    href: "https://unsplash.com/",
    src: "./assets/tech-collection/unsplash.svg",
    alt: "Unsplash logo",
  },
  {
    href: "https://oklch.com/",
    src: "./assets/tech-collection/oklch.svg",
    alt: "Oklch logo",
  },
  {
    href: "https://vert.sh/",
    src: "./assets/tech-collection/vert.svg",
    alt: "Vert logo",
  },
  {
    href: "https://thenounproject.com/",
    src: "./assets/tech-collection/the-noun-project.svg",
    alt: "The Noun Project logo",
  },
];

const styles = /*css*/ `
  :host {
    display: block;
    margin-block: 20rem;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    position: relative;
    list-style-type: none;
    padding: 0;
    max-height: 35rem;
    overflow-x: scroll;
    display: flex;
    flex-wrap: wrap;
  }

  h2 {
    font-size: var(--size-title);
    margin: 0;
    margin: 1rem;
  }
`;

const template = () => /* html */ `
  <section>
      <h2>Tech Collection</h2>

      <ul>
        ${techCollection
          .map(
            (item) => /* html */ `
              <li>
                <app-link href="${navHref(item.href)}" target="_blank" variant="image">
                  <img
                    src="${asset(item.src)}"
                    alt="${item.alt}"
                    width="102"
                    height="73"
                  />
                </app-link>
              </li>
            `,
          )
          .join("")}
      </ul>
  </section>
`;

define("section-tech-collection", { styles, template });
