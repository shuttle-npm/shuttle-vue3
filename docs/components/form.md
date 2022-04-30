<script setup>
import { ref } from "vue";
import { Alert, Button, ButtonGroup, Input, Form, Title } from "@/components";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";

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
| `size`     | `String` | `full`  | The size of the form:<br/>- `small`<br/>- `medium`<br/>- `large`<br/>- `full`                                      |
| `sv-class` | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| `submit` | Called when the form is submitted (enter is pressed within the form). |

## Classes

- `sv-form`
  -  `sv-form--small`
  -  `sv-form--medium`
  -  `sv-form--large`
