import { Component } from '../../easy-wc/decorator/component'
import { attachShadow } from '../../easy-wc/template/shadow'

@Component({
  selector: 'card-component',
  template: `
    <article class="card" part="card">
      <header class="card__header">
        <slot name="header"></slot>
      </header>
      <section class="card__content">
        <slot name="content"></slot>
      </section>
      <footer class="card__ui">
        <slot name="ui"></slot>
      </footer>
    </article>
  `,
  style: `
    :host { display: block; }
    .card {
      min-height: 120px;
      width: 320px;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      padding: 12px;
      box-sizing: border-box;
    }
  `
})
export default class CardComponent extends HTMLElement {
  constructor() {
    super()
    // render via helper attached by decorator
    // @ts-ignore
    this.renderTemplate?.call(this, { mode: 'open' })
  }
}
