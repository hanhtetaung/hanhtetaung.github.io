import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    margin-block: 10rem;
    overflow: hidden;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;
    
    @media (min-width: ${DESKTOP}) {
      display: flex;
      justify-content: space-between;
    }
  }

  img {
    height: 40rem;
    position: relative;
    object-fit: cover;
    width: 100%;
    bottom: 0rem;

    @media (min-width: ${TABLET}) {
      position: static;
      /* width: 100%; */
      height: 60rem;
      width: auto;
    }
  }

  hgroup {
    width: 100%;
  }


  h1 {
    margin: 0;
    font-size: var(--font-display);
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  p {
    margin: 0;
    max-width: 72rem;
    margin-inline: auto;
  }
`;

const template = /* html */ `
  <section>
    <hgroup>
        <h1>Studio LAH</h1>
        <p>အထင်ကရ အခမ်းအနားများ၊ ပွဲတော်များကို တိုက်ရိုက် ထုတ်လွှင့်တင်ဆက်ပေးနေသည့် ထားဝယ်မြို့၏ ပထမဆုံးသော Live Streaming အဖွဲ့ တစ်ခုဖြစ်ပါသည်။</p>
    </hgroup>
</section>
<img id="visible-img" src=${asset("./assets/hero.png")} alt="Dawei">
`;

define("section-hero", { styles, template });
