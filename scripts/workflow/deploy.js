import { define } from "../../lib/define.js";

const styles = /* css */ `
  :host {
    position: relative;
    display: block;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
  }

  hgroup {
    margin-bottom: 15rem;
    text-align: start;
  }

  h2 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
  }

  h3 {
    margin: 0;
    margin-bottom: 1rem;
    font-size: var(--size-title);
    color: var(--color-primary);
    width: fit-content;
  }

  p {
    margin: 0;
    margin-bottom: 0.5rem;
  }


`;

const template = /* html */ `

<section>
  <hgroup>
     <h2>Deploy</h2>
     <p>Publish the site through GitHub Pages.</p>
  </hgroup>


  <hgroup>
     <h3>Review</h3>
     <p>Send you the live website for a first look. Share your honest thoughts.</p>
     <p>Tweak the details together until everything feels right.</p>
  </hgroup>

</section>

`;

define("section-workflow-deploy", { styles, template });
