<script setup>
import { ref } from "vue";
import { Alert, ButtonGroup } from "@/components";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline'

const value = ref();

const message = ref("You can click a button to change this message.");

const click = (button) => {
    message.value = `You clicked the "${button.text}" button with value "${button.value}".`;
}

const buttons = ref([
    {
        text: "Left",
        value: "left-value"
    },
    {
        text: "Middle",
        value: "middle-value"
    },
    {
        text: "Right",
        value: "right-value"
    },
]);

const buttonsWithIcon = ref([
    {
        text: "Left",
        value: "left-value",
        icon: ArrowCircleLeftIcon
    },
    {
        text: "Middle",
        value: "middle-value"
    },
    {
        text: "Right",
        value: "right-value",
        icon: ArrowCircleRightIcon
    },
]);
</script>

# Button Group

## Examples

Value: {{ value }}

<Alert variant="info" :message="message" class="mb-4" />

<ButtonGroup :buttons="buttons" @click="click" v-model="value" />

```vue
<script setup>
const buttons = ref([
    {
        text: "Left",
        value: "left-value"
    },
    {
        text: "Middle",
        value: "middle-value"
    },
    {
        text: "Right",
        value: "right-value"
    },
]);
</script>

<template>
    <ButtonGroup :buttons="buttons" @click="click" v-model="value" />
</template>
```

### Label
<ButtonGroup label="Block layout" :buttons="buttons" @click="click" v-model="value" />
<ButtonGroup label="Inline layout" layout="inline" :buttons="buttons" @click="click" v-model="value" class="mt-2" />

### With Icon

<ButtonGroup :buttons="buttonsWithIcon" @click="click" v-model="value" />

```vue
<script setup>
import { EmojiHappyIcon, EmojiSadIcon } from '@heroicons/vue/outline';

const buttonsWithIcon = ref([
    {
        text: "Left",
        value: "left-value",
        icon: EmojiSadIcon
    },
    {
        text: "Middle",
        value: "middle-value"
    },
    {
        text: "Right",
        value: "right-value",
        icon: EmojiHappyIcon
    },
]);
</script>

<template>
    <Button :icon="PlayIcon">Custom Icon</Button>
    <Button :disabled="true">Disabled</Button>
<template>
```

### Disabled

<ButtonGroup :buttons="buttonsWithIcon" @click="click" v-model="value" :disabled="true" />

## Properties

| Name       | Type      | Default | Description                                                                                                        |
| ---------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `buttons`  | `Array`   | `[]`    | An `array` of buttons to render.  May contain the following properties: <br/>- `text` <br/>- `value` <br/>- `icon` |
| `disabled` | `Boolean` | `false` | Indicates whether the checkbox is in a disabled state.                                                             |
| `label`    | `String`  | ""      | The label to display for the input.                                                                                |
| `layout`   | `String`  | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `sv-class` | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name    | Description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| `click` | Called when the button is clicked.  Receive the clicked `button` as an argument. |

## Classes

- `sv-button-group`
  - `sv-button-group--block`
  - `sv-button-group--inline`
- `sv-button-group__label`
  - `sv-button-group__label--block`
  - `sv-button-group__label--inline`
- `sv-button-group__box`
  - `sv-button-group__box--block`
  - `sv-button-group__box--inline`
- `sv-button-group__button`
  -  `sv-button-group__button--selected`
- `sv-button-group__button-icon`
- `sv-button-group__button-text`