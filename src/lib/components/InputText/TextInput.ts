import { type Validator } from "./types";

export class TextInputComponent extends HTMLElement {
  static formAssociated = true;
  // @ts-ignore
  private internals: ElementInternals;
  public validator: Validator | null = null;

  constructor() {
    super();
    this.internals = this.attachInternals();

    const template = document.createElement('template')
    template.innerHTML = `
    <section class="control">
      <input type="text" />
    </section>
    <section class="message"></section>
    `

    this.attachShadow({ mode: 'open' })
    this.shadowRoot?.append(template.content.cloneNode(true))
  }

  get validity() {
    return this.internals.validity;
  }

  get validationMessage() {
    return this.internals.validationMessage;
  }

  checkValidity() {
    return this.internals.checkValidity();
  }

  reportValidity() {
    return this.internals.reportValidity();
  }

  setValidity(
    flags: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement
  ): void {
    this.internals.setValidity(flags, message, anchor);
  }

  get input(): HTMLInputElement {
    return this.shadowRoot!.querySelector("input")!;
  }

  get value(): string {
    return this.input.value;
  }

  set(value: string) {
    return this.input.value = value
  }

  get required(): boolean {
    return this.input.required;
  }

  set required(value: boolean | string) {
    if (String(value) === "true") {
      this.input.setAttribute("required", "required");
    }
    if (String(value) === "false") {
      this.input.removeAttribute("required");
    }
  }
}

customElements.define('input-text', TextInputComponent)
