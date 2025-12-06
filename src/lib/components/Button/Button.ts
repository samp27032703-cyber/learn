import { Component } from '../../easy-wc/decorator/component'
import { css, attachStyle } from '../../easy-wc/template/shadow'

@Component({
  selector: 'button-component',
  custom: true,
  template: `<button part="button"><slot></slot></button>`,
  style: `
    :host { display: inline-block; }
    button {
      padding: 8px 16px;
      background: #6200ee;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
    }
    button:active { transform: translateY(1px); }
  `
})
export default class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })

    // attach styles from decorator metaStyle
    // @ts-ignore
    const styles = (this as any).metaStyle || ''
    attachStyle(shadow, styles)

    // append template structure
    const tmp = document.createElement('template')
    tmp.innerHTML = (this as any).metaTemplate || '<button><slot></slot></button>'
    shadow.appendChild(tmp.content.cloneNode(true))
  }
}
