import { define } from "../define.js";
import "../components/app-icon.js";
import "../components/app-link.js";

const DOB = "3 Nov 2000";
const YEARS = 70;

const styles = /*css*/ `
  section {
    width: 80%;
    margin-inline: auto;
  }

  article {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "corner ages"
      "weeks  grid";
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  ul {
    grid-area: grid;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: grid;
    grid-template-rows: repeat(52, 1rem);
    grid-auto-columns: 1rem;
    grid-auto-flow: column;
    gap: 0.25rem;
    overflow: scroll;
  }

  span {
    display: block;
  }

  span.ages {
    grid-area: ages;
  }

  span.weeks-axis {
    grid-area: weeks;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: right;
  }

  li {
    width: 0.6rem;
    height: 0.6rem;
    border: 1px solid var(--color-text);
    border-radius: 0.2rem;
  }

    li.lived {
        background: var(--color-secondary);
        border-color: var(--color-secondary);
    }
`;

const generateWeeksHTML = (dobString, years) => {
  const d = new Date(dobString),
    t = new Date(),
    fy =
      t.getFullYear() -
      d.getFullYear() -
      (t.getMonth() < d.getMonth() ||
      (t.getMonth() === d.getMonth() && t.getDate() < d.getDate())
        ? 1
        : 0),
    wl =
      fy * 52 +
      Math.min(
        51,
        Math.floor(
          (t - new Date(d.getFullYear() + fy, d.getMonth(), d.getDate())) /
            6048e5,
        ),
      );
  return Array.from(
    { length: years * 52 },
    (_, i) => `<li class="${i < wl ? "lived" : ""}"></li>`,
  ).join("");
};

const template = () => /* html */ `
  <section>
    <section-title
      props='${JSON.stringify({
        name: "Life in Weeks",
        img: "./assets/icons/parrot.svg",
        alt: "Birds-singing Logo",
      })}'
    ></section-title>

    <article>
      <span class="ages">Ages (70 yrs) ⇨</span>
      <span class="weeks-axis">⇦ Weeks of the year</span>
      <ul>${generateWeeksHTML(DOB, YEARS)}</ul>
    </article>

    <p>Based on this post: <app-link variant="underline" href="https://waitbutwhy.com/2014/05/life-weeks.html" target="_blank">Your Life in Weeks</app-link></p>
  </section>
`;

define("section-life-in-weeks", { styles, template });
