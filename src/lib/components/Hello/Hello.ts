import { Component, type DecoratedHTMLMeta } from "../../easy-wc"
import { helloTemplate } from "./Hello.template"

type DecoratedHTMLElement = HTMLElement & DecoratedHTMLMeta

@Component({
  selector: "hello-component",
  template: helloTemplate
})
export default class HelloComponent extends HTMLElement implements DecoratedHTMLElement {
  connectedCallback() {
    this.renderTemplate(this, { mode: "open" })
  }
}
