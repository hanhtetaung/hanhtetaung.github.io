export class SectionHireMeIntro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `<section class="hire-me">
    <div class="container">
        <h1>Let's Chat</h1>
        <p>I'd be happy to work with you. I'll get back to you later today.</p>

        <form
        action="https://submit-form.com/elmAjnFC7"
        data-botpoison-public-key="pk_40990b6d-13e8-439a-96f2-680095e68c36"
        class="hire-me__form"
        >
        <input
            type="hidden"
            name="_redirect"
            value="http://hanhtetaung.dev/thank-you"
        />
        <input type="hidden" name="_append" value="false" />

        <div class="hire-me__inputs">
            <input
            class="input input-name"
            type="text"
            name="name"
            placeholder="Name*"
            required
            />
            <input
            class="input input-email"
            type="email"
            name="email"
            placeholder="Email*"
            required
            />

            <textarea
            class="input input-textarea"
            name="message"
            placeholder="Message*"
            required=""
            ></textarea>
        </div>

        <div
            class="cf-turnstile"
            data-sitekey="0x4AAAAAADTCi7AhwZfhOau6"
            data-size="flexible"
        ></div>

        <button type="submit" class="button--primary">
            Send &#10166;
        </button>
        <hr />
        <p class="hire-me__email">
            Or hit me up at:
            <a href="mailto:hanhtetaung.dev@gmail.com" class="button--link">
            hanhtetaung.dev@gmail.com
            </a>
        </p>
        </form>
    </div>
    </section>`;
  }
}

customElements.define("section-hire-me-intro", SectionHireMeIntro);
