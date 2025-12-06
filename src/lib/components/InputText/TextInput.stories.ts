import { html } from "lit-html";
import "./TextInput";
import type { Validator, ValidatorsMapping } from './types'

const validators: ValidatorsMapping = {
  username: {
    validations: [
      {
        flag: { valueMissing: true },
        message: "Error: Required",
        condition: (input) => input.required && input.value.length === 0,
      },
    ]
  }
}

export const Primary = {}

export default {
  title: "Components/Inputs/TextInput",
  component: "input-text",
  render: () => html`<form><input-text name="username"></input-text></form>`
}
