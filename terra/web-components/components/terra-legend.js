import { define } from "../define.js";

const styles = /*css*/ `
  :host {
    display: flex;
    align-items: center;
    gap: 7px;
    --local-background: var(--color-text);
  }
  
  i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;
    background: var(--local-background);
  }
  
  :host([variant="source"]) { 
    --local-background: var(--source-color-background); 
}
  :host([variant="goods"]) { 
    --local-background: var(--good-color-background); 
}
  :host([variant="ingredient"]) { --local-background: var(--component-color-background); }
  :host([variant="use"]) { --local-background: var(--used-in-color-background); }
`;

const props = {
  name: String,
};

const template = ({ name }) => /*html*/ `
  <i></i>
  <span>${name}</span>
`;

define("terra-legend", {
  props,
  styles,
  template,
});
