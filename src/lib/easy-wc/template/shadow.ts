import type { DecoratedHTMLMeta } from "../decorator"

export function attachShadow(context: HTMLElement & DecoratedHTMLMeta, options: ShadowRootInit = { mode: 'open' }) {
  context.attachShadow(options)

  const element = document.createElement("template")

  // Вставляем шаблон
  element.innerHTML = context.metaTemplate || ''

  // Добавляем стили, если есть
  if (context.metaStyle) {
    const style = document.createElement('style')
    style.textContent = context.metaStyle
    // prepend so styles are applied before template content
    element.content.prepend(style)
  }

  context.shadowRoot?.appendChild(element.content.cloneNode(true))
}

export function css(strings: TemplateStringsArray, ...expr: any[]) {
  return strings.reduce((acc, s, i) => acc + s + (expr[i] ?? ''), '')
}

export function attachStyle(shadow: ShadowRoot, styleText: string) {
  const style = document.createElement('style')
  style.textContent = styleText
  shadow.appendChild(style)
}
