import { asset } from "../../../lib/asset.js";
import { define } from "../../../lib/define.js";
import { DESKTOP, TABLET } from "../breakpoints.js";

const styles = /* css */ `
  :host {
    display: block;
    padding-block: 10rem;
  }

  section {
    width: min(80%, 144rem);
    margin-inline: auto;

    @media (min-width: ${DESKTOP}) {
      justify-content: space-between;
    }
  }


  h2 {
    margin: 0;
    font-size: var(--font-title);
    margin-bottom: 8rem;

     @media (min-width: ${TABLET}) {
      font-size: var(--font-display);
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 7rem;
    overflow: scroll;

     @media (min-width: ${TABLET}) {
      /* display: grid; */
          /* grid-template-columns: 1fr 1fr 1fr; */

      gap: 10rem;
    }
  }

  img {
    max-height: 12rem;
    width: auto;
  }

  figcaption {
    margin-top: 1rem;
    font-size: var(--font-body);
    font-weight: var(--font-bold);
  }

  figure {
    margin: 0;
    min-width: 20ch;
  }

  article {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    gap: 10rem;
  }

  p {
    margin: 0;
    /* text-align: start; */
    max-width: 72rem;
    margin-inline: auto;
    margin-top: 3rem;
  }
`;

const template = /* html */ `
  <section>
    <h2>Our Services</h2>

    <ul>
        <li>
          <article>
            <figure>
              <img src=${asset("./assets/live-streaming.png")} alt="Teamwork">
              <figcaption>Live Streaming</figcaption>
            </figure>
              <p>
                Event အခမ်းအနားများ, Wedding, Promotion, Facebook Live Sales, Music Concert, Live Show, Festival အစရှိသည့်အခမ်းအနားပေါင်းများစွာကို နောက်ဆုံးပေါ် နည်းပညာများဖြင့် ကြည်လင်ပြတ်သားသော ရုပ်သံ (Full HD) တို့ဖြင့်တိုက်ရိုက် ထုတ်လွှင့်ပေးပါသည်။
              </p>
            </article>
        </li>
        <li>
          <article>
            <figure>
              <img src=${asset("./assets/photography.png")} alt="Drawing">
              <figcaption>Photography</figcaption>
            </figure>
            <p>
              အလှူမင်္ဂလာပွဲ၊ အခမ်းအနား၊ မင်္ဂလာပွဲများ အပြင် Portrait, Food, Convocation အစရှိသည့် Photography များစွာကို ပွဲအစအဆုံး ဓာတ်ပုံများထုတ်ပေးခြင်း၊ ဘောင်တပ်ပေးခြင်းအထိ တစ်နေရာတည်း (One-Stop) စနစ်ဖြင့် ဝန်ဆောင်မှုပေးပါသည်။
            </p>
              </article>
          </li>
          <li>
            <article>
              <figure>
                <img src=${asset("./assets/videography.png")} alt="Literacy">
                <figcaption>Videography</figcaption>
                
              </figure>
              <p>
                မင်္ဂလာပွဲများ၊ အလှူပွဲများ Promotion ပွဲများအပြင် လုပ်ငန်းများအတွက် Short Film များ၊ Documentary များ အစရှိသည့် ဝန်ဆောင်မှုများကို ရုပ်သံ ကြည်လင်ပြတ်သားစွာဖြင့် ရိုက်ကူးတင်ဆက် ပေးပါသည်။
              </p>
            </article>
        
        </li>
    </ul>

  </section>
`;

define("section-services", { styles, template });
