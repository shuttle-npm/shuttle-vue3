<script setup>
import { ref } from "vue";
import { Alert, Button, ButtonGroup, Input, Form, Title } from "@/components";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";

const size = ref("");

const buttons = ref([
    {
        text: "empty",
        value: ""
    },
    {
        text: "sm",
        value: "sm"
    },
    {
        text: "md",
        value: "md"
    },
    {
        text: "lg",
        value: "lg"
    },
]);

const message = ref("");
const count = ref(0);

const submitted = () => {
    count.value++;
    message.value = `Form submission count: ${count.value}`;
}
</script>

# Form

## Examples

<ButtonGroup v-model="size" :buttons="buttons" class="mb-4" />

<Alert v-if="!!message" variant="info" :message="message" class="mb-4" />

<Form class="border border-solid border-gray-600 p-2 rounded" :size="size" @submit.prevent="submitted()">
<div></div>
<div>
<Input label="Input label" class="pb-2" :icon-start="ThumbDownIcon" v-model="message" />
</div>
<Button class="pt-2" type="submit">Submit</Button>
</Form>

## Properties

| Name       | Type     | Default | Description                                                                                                        |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `size`     | `String` | `""`    | The size of the form:<br/>- `sm`<br/>- `md`<br/>- `lg`<br/>- an empty value would be the full width.               |
| `sv-class` | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `submit` | Called when the form is submitted (enter is pressed within the form). |

## Classes

- `sv-form`
  -  `sv-form--sm`
  -  `sv-form--md`
  -  `sv-form--lg`
