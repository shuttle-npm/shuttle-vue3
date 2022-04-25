<script setup>
import { ref } from "vue";
import { Button, ButtonGroup, Input, Form } from "@/components";

const size = ref("full");

const buttons = ref([
    {
        text: "small",
        value: "small"
    },
    {
        text: "medium",
        value: "medium"
    },
    {
        text: "large",
        value: "large"
    },
    {
        text: "full",
        value: "full"
    },
]);
</script>

# Form

## Examples

<ButtonGroup v-model="size" :buttons="buttons" class="mb-4" />

<Form class="border border-solid border-gray-600 p-2 rounded" :size="size">
<Input label="Input label" class="pb-2" />
<Button class="pt-2">Submit</Button>
</Form>

## Properties

| Name       | Type     | Default | Description                                                                                                        |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `size`     | `String` | `full`  | The size of the form:<br/>- `small`<br/>- `medium`<br/>- `large`<br/>- `full`                                      |
| `sv-class` | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name    | Description                        |
| ------- | ---------------------------------- |
| `click` | Called when the button is clicked. |

## Classes

- `sv-form`
  -  `sv-form--small`
  -  `sv-form--medium`
  -  `sv-form--large`
