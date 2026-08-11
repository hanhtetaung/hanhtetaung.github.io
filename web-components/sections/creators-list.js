import { define } from "../define";
import "../components/creator-item";
import { PHONE } from "../breakpoints";

const creditsData = [
  {
    icon: "/assets/images/logo.avif",
    alt: "Approach Logo",
    name: "Pimsupa Rukchonlatee",
  },
  {
    icon: "/assets/icons/man-in-details.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/programmer-5124229/",
    name: "VectorsLab",
  },
  {
    icon: "/assets/icons/merlion.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/merlion-6990371/",
    name: "Isaac haq",
  },
  {
    icon: "/assets/icons/positive-man.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/face-5688226/",
    name: "moaon",
  },
  {
    icon: "/assets/icons/full-time-freelancer.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/computer-4111354/",
    name: "Stepan Belyakov",
  },
  {
    icon: "/assets/icons/birds-singing.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/birds-170955/",
    name: "Lee Mette",
  },
  {
    icon: "/assets/icons/running.svg",
    alt: "Running Logo",
    url: "https://thenounproject.com/icon/running-7164037/",
    name: "Princess In The Spotlight",
  },
  {
    icon: "/assets/icons/seafood.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/seafood-6474814/",
    name: "Darwin Mulya",
  },
  {
    icon: "/assets/icons/penguin.svg",
    alt: "Penguin Icon",
    url: "https://thenounproject.com/icon/penguin-6418789/",
    name: "Lucas Rathgeb",
  },
  {
    icon: "/assets/icons/molecule.svg",
    alt: "Molecule Icon",
    url: "https://thenounproject.com/icon/molecule-1003938/",
    name: "Vectors Market",
  },
  {
    icon: "/assets/icons/student.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/graduate-6714013/",
    name: "Chaiconator",
  },
  {
    icon: "/assets/icons/bird-flying.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/bird-7842090/",
    name: "Princess In The Spotlight",
  },
  {
    icon: "/assets/icons/travelling.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/travel-5976779/",
    name: "Iconsden@gmail.com",
  },
  {
    icon: "/assets/icons/bird-watching.svg",
    alt: "Bird Singing Icon",
    url: "https://thenounproject.com/icon/bird-8218551/",
    name: "Piyapong Khemawattana",
  },
  {
    icon: "/assets/icons/owl.svg",
    alt: "Owl Icon",
    url: "https://thenounproject.com/icon/owl-4212053/",
    name: "CAMB",
  },
  {
    icon: "/assets/icons/working-man.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/man-working-4099412/",
    name: "Ameya SK",
  },
  {
    icon: "/assets/icons/sparrow.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/straight-copper-7408245/",
    name: "Sumin Lee",
  },
  {
    icon: "/assets/icons/bird-with-flower.svg",
    alt: "Approach Logo",
    url: "https://thenounproject.com/icon/bird-1705096/",
    name: "Olga",
  },
  {
    icon: "/assets/icons/water.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/water-1371137/",
    name: "SBTS",
  },
  {
    icon: "/assets/icons/sand.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/sand-6425352/",
    name: "Creative Mahira",
  },
  {
    icon: "/assets/icons/crude_oil.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/crude-oil-8424464/",
    name: "Suwarjo",
  },
  {
    icon: "/assets/icons/plant.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/plant-5514346/",
    name: "Przemyslawk",
  },
  {
    icon: "/assets/icons/clay.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/mud-2349786/",
    name: "Deuxamis_moon",
  },
  {
    icon: "/assets/icons/stone.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/stone-8242048/",
    name: "Ivar Jenner",
  },
  {
    icon: "/assets/icons/animal.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/animal-5115337/",
    name: "Visual Glow",
  },
  {
    icon: "/assets/icons/empty-state.svg",
    alt: "Result Logo",
    url: "https://thenounproject.com/icon/select-4375928/",
    name: "The Icon Z",
  },
  {
    icon: "/assets/icons/software-developer.svg",
    alt: "Software Developer Logo",
    url: "https://thenounproject.com/icon/programmer-3916075/",
    name: "Phạm Thanh Lộc",
  },
  {
    icon: "/assets/icons/cuckoo-cock.svg",
    alt: "Coming Soon Logo",
    url: "https://thenounproject.com/icon/cuckoo-clock-1470212/",
    name: "Phạm Thanh Lộc",
  },
];

const styles = /* css */ `
  :host {
    display: block;
  }

  section {
    width: 80%;
    margin-inline: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    overflow: scroll;

    @media (max-width: ${PHONE}) {
      display: flex;
      flex-direction: column;
    }
  }
`;

const template = () => /* html */ `
  <section>
      <ul>
        ${creditsData
          .map(
            (item) => /* html */ `
              <li>
                <creator-item
                  props='${JSON.stringify({
                    icon: item.icon,
                    alt: item.alt,
                    name: item.name,
                    url: item.url ?? "",
                  })}'
                ></creator-item>
              </li>
            `,
          )
          .join("")}
      </ul>
  </section>
`;

define("section-creators-list", { styles, template });
