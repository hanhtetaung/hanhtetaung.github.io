import { define } from "../define";

const styles = /* css */ `
  :host {
    display: block;
    width: 100%;
  }

  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const template = /* html */ `
  <div>
    <svg
      viewBox="0 0 1200 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,80
          L0,40
          Q50,10 100,35
          Q130,0 170,20
          Q210,-10 250,25
          Q290,0 330,30
          Q370,5 410,28
          Q450,-5 490,22
          Q530,2 570,30
          Q610,0 650,25
          Q690,5 730,28
          Q770,-5 810,22
          Q850,2 890,30
          Q930,0 970,25
          Q1010,5 1050,28
          Q1090,-5 1130,22
          Q1160,5 1200,30
          L1200,80
          Z
        "
        fill="var(--color-bg-secondary)"
      />
    </svg>
  </div>
`;

define("line-divider-upper", { styles, template });
