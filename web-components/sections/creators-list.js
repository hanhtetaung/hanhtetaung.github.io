import { define } from "../define";
import "../components/creator-item";
import { PHONE } from "../breakpoints";

const creditsData = [
  {
    icon: "/assets/images/logo.avif",
    alt: "Logo",
    name: "Pimsupa Rukchonlatee",
  },
  {
    icon: "/assets/icons/man-in-details.svg",
    alt: "Programmer Icon",
    url: "https://thenounproject.com/icon/programmer-5124229/",
    name: "VectorsLab",
  },
  {
    icon: "/assets/icons/merlion.svg",
    alt: "Merlion Icon",
    url: "https://thenounproject.com/icon/merlion-6990371/",
    name: "Isaac haq",
  },
  {
    icon: "/assets/icons/positive-man.svg",
    alt: "Face Icon",
    url: "https://thenounproject.com/icon/face-5688226/",
    name: "moaon",
  },
  {
    icon: "/assets/icons/full-time-freelancer.svg",
    alt: "Computer Icon",
    url: "https://thenounproject.com/icon/computer-4111354/",
    name: "Stepan Belyakov",
  },
  {
    icon: "/assets/icons/birds-singing.svg",
    alt: "Birds Icon",
    url: "https://thenounproject.com/icon/birds-170955/",
    name: "Lee Mette",
  },
  {
    icon: "/assets/icons/running.svg",
    alt: "Running Icon",
    url: "https://thenounproject.com/icon/running-7164037/",
    name: "Princess In The Spotlight",
  },
  {
    icon: "/assets/icons/seafood.svg",
    alt: "Seafood Icon",
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
    alt: "Student Icon",
    url: "https://thenounproject.com/icon/graduate-6714013/",
    name: "Chaiconator",
  },
  {
    icon: "/assets/icons/bird-flying.svg",
    alt: "Bird Icon",
    url: "https://thenounproject.com/icon/bird-7842090/",
    name: "Princess In The Spotlight",
  },
  {
    icon: "/assets/icons/travelling.svg",
    alt: "Travel Icon",
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
    alt: "Man Icon",
    url: "https://thenounproject.com/icon/man-working-4099412/",
    name: "Ameya SK",
  },
  {
    icon: "/assets/icons/sparrow.svg",
    alt: "Sparrow Icon",
    url: "https://thenounproject.com/icon/straight-copper-7408245/",
    name: "Sumin Lee",
  },
  {
    icon: "/assets/icons/bird-with-flower.svg",
    alt: "Bird Icon",
    url: "https://thenounproject.com/icon/bird-1705096/",
    name: "Olga",
  },
  {
    icon: "/assets/icons/water.svg",
    alt: "Water Icon",
    url: "https://thenounproject.com/icon/water-1371137/",
    name: "SBTS",
  },
  {
    icon: "/assets/icons/sand.svg",
    alt: "Sand Icon",
    url: "https://thenounproject.com/icon/sand-6425352/",
    name: "Creative Mahira",
  },
  {
    icon: "/assets/icons/crude_oil.svg",
    alt: "Crude Oil Icon",
    url: "https://thenounproject.com/icon/crude-oil-8424464/",
    name: "Suwarjo",
  },
  {
    icon: "/assets/icons/plant.svg",
    alt: "Plant Icon",
    url: "https://thenounproject.com/icon/plant-5514346/",
    name: "Przemyslawk",
  },
  {
    icon: "/assets/icons/clay.svg",
    alt: "Mud Icon",
    url: "https://thenounproject.com/icon/mud-2349786/",
    name: "Deuxamis_moon",
  },
  {
    icon: "/assets/icons/stone.svg",
    alt: "Stone Icon",
    url: "https://thenounproject.com/icon/stone-8242048/",
    name: "Ivar Jenner",
  },
  {
    icon: "/assets/icons/animal.svg",
    alt: "Animal Icon",
    url: "https://thenounproject.com/icon/animal-5115337/",
    name: "Visual Glow",
  },
  {
    icon: "/assets/icons/empty-state.svg",
    alt: "Empty State Icon",
    url: "https://thenounproject.com/icon/select-4375928/",
    name: "The Icon Z",
  },
  {
    icon: "/assets/icons/software-developer.svg",
    alt: "Software Developer Icon",
    url: "https://thenounproject.com/icon/programmer-3916075/",
    name: "Phạm Thanh Lộc",
  },
  {
    icon: "/assets/icons/cuckoo-clock.svg",
    alt: "Clock Icon",
    url: "https://thenounproject.com/icon/cuckoo-clock-1470212/",
    name: "Free Fair & Healthy",
  },
  {
    icon: "/assets/icons/technology.svg",
    alt: "Technology Icon",
    url: "https://thenounproject.com/icon/technology-7864424/",
    name: "Ferdian Mauladi Riziq",
  },
  {
    icon: "/assets/icons/engineering.svg",
    alt: "Engineering Icon",
    url: "https://thenounproject.com/icon/engineering-8024039/",
    name: "Omah Icon",
  },
  {
    icon: "/assets/icons/kingfisher.svg",
    alt: "Kingfisher Icon",
    url: "https://thenounproject.com/icon/kingfisher-bird-6274353/",
    name: "Delwar Hossain",
  },
  {
    icon: "/assets/icons/design-system.svg",
    alt: "Design System Icon",
    url: "https://thenounproject.com/icon/sourcing-6125071/",
    name: "icon 5",
  },
  {
    icon: "/assets/icons/user-interface.svg",
    alt: "User Interface Icon",
    url: "https://thenounproject.com/icon/website-149263/",
    name: "Dawid Sobolewski",
  },
  {
    icon: "/assets/icons/web-interface.svg",
    alt: "Web Interface Icon",
    url: "https://thenounproject.com/icon/web-5653117/",
    name: "Danang endar",
  },
  {
    icon: "/assets/icons/peacock.svg",
    alt: "Peacock Icon",
    url: "https://thenounproject.com/icon/bird-6684144/",
    name: "Carlos von Dessauer",
  },
  {
    icon: "/assets/icons/parrot.svg",
    alt: "Parrot Icon",
    url: "https://thenounproject.com/icon/parrot-8272477/",
    name: "Eskak",
  },
  {
    icon: "/assets/icons/one-finger.svg",
    alt: "Finger One Icon",
    url: "https://thenounproject.com/icon/only-one-hand-gesture-8076267/",
    name: "iconfield",
  },
  {
    icon: "/assets/icons/two-finger.svg",
    alt: "Finger Two Icon",
    url: "https://thenounproject.com/icon/two-hand-gesture-8076273/",
    name: "iconfield",
  },
  {
    icon: "/assets/icons/three-finger.svg",
    alt: "Finger Three Icon",
    url: "https://thenounproject.com/icon/three-hand-gesture-8076250/",
    name: "iconfield",
  },
  {
    icon: "/assets/icons/loop.svg",
    alt: "Loop Icon",
    url: "https://thenounproject.com/icon/loop-6016994/",
    name: "Ehtisham Abid",
  },
  {
    icon: "/assets/icons/ostrich.svg",
    alt: "Ostrich Icon",
    url: "https://thenounproject.com/icon/ostrich-8304474/",
    name: "Vectors Market",
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
