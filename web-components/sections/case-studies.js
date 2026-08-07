import "../components/case-study-item";

const caseStudies = [
  {
    image: "/assets/images/case-study/knowledge-tree/thumbnail.avif",
    alt: "Knowledge Tree Thumbnail",
    title: "Knowledge Tree",
    categories: ["Product Design", "User Experience", "Design System"],
    description:
      "A tool to visualize the connections between everyday goods and their fundamental sources based on my knowledge.",
    href: "/work/knowledge-tree",
    reverse: false,
  },
  {
    image: "assets/images/case-study/mmo/thumbnail.avif",
    alt: "MMO thumbnail",
    title: "MMO",
    categories: [
      "Simplify complex workflows",
      "Build Prototype",
      "Design System",
    ],
    description:
      "An internal portal that uses to run daily operations in hospital.",
    href: "/work/mmo",
    reverse: true,
  },
  {
    image: "/assets/images/case-study/portfolio/mockup.avif",
    alt: "Portfolio Mockup",
    title: "Portfolio",
    categories: ["Research", "Web Design", "Web Development"],
    description:
      "A personal portfolio to showcase my work, process, and approach to web design and development.",
    href: "/work/portfolio",
    reverse: false,
  },
  {
    image: "/assets/images/case-study/skssolar/mockup.avif",
    alt: "SKS Mockup",
    title: "SKS.Solar",
    categories: ["Research", "Web Design", "Web Development"],
    description:
      "A website for SKS SOLAR (SALES & SERVICES) COMPANY LIMITED to showcase its history, services and completed project.",
    href: "/work/sks-solar",
    reverse: true,
  },
];

export class Section extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="work">
      <div class="container">
        <div class="section-title">
          <h2>Case Studies</h2>
          <img
            src="/assets/icons/sparrow.svg"
            alt="My Work Logo"
            class="icon"
            height="135"
            width="110"
          />
        </div>
        <ul class="work__showcases"></ul>
        </div>
        </section>`;
    this.renderShowcases();
  }

  renderShowcases() {
    const list = this.querySelector(".work__showcases");
    const fragment = document.createDocumentFragment();

    caseStudies.forEach((cs) => {
      const li = document.createElement("li");
      const item = document.createElement("case-study-item");

      item.setAttribute("image", cs.image);
      item.setAttribute("alt", cs.alt);
      item.setAttribute("title", cs.title);
      item.setAttribute("description", cs.description);
      item.setAttribute("href", cs.href);
      item.setAttribute("categories", JSON.stringify(cs.categories));
      if (cs.reverse) item.setAttribute("reverse", "");

      li.appendChild(item);
      fragment.appendChild(li);
    });

    list.appendChild(fragment);
  }
}

customElements.define("section-case-studies", Section);
