<script setup>
import { ref } from "vue";
import { Button, Input, Form } from "@/components";
</script>

# Form

## Examples

<Form class="border border-solid border-gray-600 p-2 rounded">
<Input label="What is your favourite movie?" />
<Button class="pt-2">Submit</Button>
</Form>

## Properties

| Name       | Type        | Default     | Description                                                                                                                    |
| ---------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `type`     | `String`    | `primary`   | The type of button:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info`<br/>- `link` |
| `icon`     | `Component` | `undefined` | Displays the given icon in front of the content.                                                                               |
| `sv-class` | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.             |

## Events

| Name    | Description                        |
| ------- | ---------------------------------- |
| `click` | Called when the button is clicked. |

## Classes

- `sv-button`
  -  `--{variant}`
  -  `--disabled`

- `sv-button__icon`
  -  `--{variant}`
  -  `--disabled`