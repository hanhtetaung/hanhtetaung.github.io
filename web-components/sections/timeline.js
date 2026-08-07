export class SectionTimeline extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="timeline">
      <div class="container">
        <div class="section-title">
          <h2>Experience Overview</h2>
          <img
            src="/assets/icons/bird-flying.svg"
            alt="Timeline Logo"
            class="icon"
            height="36"
            width="76"
          />
        </div>

        <ul class="timeline__list">
          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/software-developer.svg"
              alt="Software Developer Icon"
              width="48"
              height="48"
            />

            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>

            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2021">2021</time>
                &ndash;
                <time datetime="2022">2022</time>
              </div>

              <h3>Software Developer</h3>
              <p class="timeline__description">
                I landed my first software development role building a hospital
                management system to manage inventory, POS, and OPD
                appointments. The system is still running today.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon timeline__icon-student"
              src="/assets/icons/student.svg"
              alt="Student Icon"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2022">2022</time>
                &ndash;
                <time datetime="2025">2025</time>
              </div>
              <h3>Student</h3>
              <p class="timeline__description">
                I completed my Bachelor of Science in Computer Science at
                Assumption University, Thailand. My favorite subject was
                <q>Computer Architecture</q>.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/software-developer.svg"
              alt="Software Developer Icon"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge badge--outline">
                <time datetime="2022">2025</time>
                &ndash;
                <time datetime="2025">2026</time>
              </div>
              <h3>Software Developer</h3>
              <p class="timeline__description">
                After graduating, I worked remotely for 6 months as a software
                developer at an event organizing company in Singapore.
              </p>
            </div>
          </li>

          <li class="timeline__item">
            <img
              class="timeline__icon"
              src="/assets/icons/full-time-freelancer.svg"
              alt="Web Design & Develop"
              width="48"
              height="48"
            />
            <div class="timeline__connector">
              <span class="timeline__dot"></span>
              <span class="timeline__line"></span>
            </div>
            <div class="timeline__content">
              <div class="badge">
                <time datetime="2026"> Present: </time>
              </div>
              <h3>UX Designer</h3>
              <p class="timeline__description">
                Today, I've found my passion in UX design. Self-taught through
                research and hands-on practice, I design intuitive experiences
                by simplifying complex workflows.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>`;
  }
}

customElements.define("section-timeline", SectionTimeline);
