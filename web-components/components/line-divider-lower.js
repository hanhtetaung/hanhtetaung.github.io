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
    <svg
      viewBox="0 0 1200 80"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="
          M0,0
          L1200,0
          L1200,40
          Q1160,75 1130,58
          Q1090,85 1050,62
          Q1010,75 970,55
          Q930,80 890,50
          Q850,78 810,58
          Q770,85 730,52
          Q690,75 650,55
          Q610,80 570,50
          Q530,78 490,58
          Q450,85 410,52
          Q370,75 330,50
          Q290,80 250,55
          Q210,90 170,60
          Q130,80 100,45
          Q50,70 0,40
          Z
        "
        fill="var(--color-bg-secondary)"
      />
    </svg>
`;

define("line-divider-lower", { styles, template });
