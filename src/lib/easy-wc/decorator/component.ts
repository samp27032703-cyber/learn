import { attachShadow } from "../template";

export interface ElementMeta {
  selector: string;
  style?: string;
  template?: string;
  custom?: boolean;
}

export interface DecoratedHTMLMeta {
  metaStyle: string;
  metaTemplate: string;
}

export function Component(meta: ElementMeta) {
  return (target: any) => {
    if (!meta?.selector) {
      throw new Error("Selector is required for @Component");
    }

    // Attach template/style metadata to prototype so attachShadow can use them
    if (meta.template) {
      target.prototype.metaTemplate = meta.template;
    } else {
      target.prototype.metaTemplate = "";
    }

    if (meta.style) {
      target.prototype.metaStyle = meta.style;
    } else {
      target.prototype.metaStyle = "";
    }

    // Provide helper to render
    target.prototype.renderTemplate = attachShadow;

    // Register custom element
    try {
      if (meta.custom) {
        // Try to detect which built-in to extend from prototype
        let extendTag = undefined;
        if (target.prototype instanceof HTMLButtonElement) {
          extendTag = 'button';
        } else if (target.prototype instanceof HTMLAnchorElement) {
          extendTag = 'a';
        } else if (target.prototype instanceof HTMLInputElement) {
          extendTag = 'input';
        }

        if (extendTag) {
          customElements.define(meta.selector, target, { extends: extendTag });
        } else {
          // fallback to normal registration
          customElements.define(meta.selector, target);
        }
      } else {
        customElements.define(meta.selector, target);
      }
    } catch (err) {
      // If already defined, ignore to allow reloading in dev env
      // console.warn(err);
    }

    return target;
  };
}
