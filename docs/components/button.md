<script setup>
import { ref } from "vue";
import { Alert, Button, ButtonGroup, Checkbox } from "@/components";
import { PlayIcon } from '@heroicons/vue/outline'

const message = ref("You can click a button to change this message.");
const outline = ref(false);
const icon = ref(false);

const size = ref("");

const buttons = ref([
    {
        text: "empty",
        value: ""
    },
    {
        text: "xs",
        value: "xs"
    },
    {
        text: "sm",
        value: "sm"
    },
    {
        text: "lg",
        value: "lg"
    },
]);

const getIcon = () => {
    return icon.value ? PlayIcon : undefined;
}

const click = (type) => {
    message.value = `You clicked the "${type}" button.`;
}
</script>

# Button

## Examples

<ButtonGroup v-model="size" :buttons="buttons" class="mb-4" />

<Alert variant="info" :message="message" class="mb-4" />

<Checkbox v-model="outline" label="Outline?" class="mb-2" />
<Checkbox v-model="icon" label="Icon?" class="mb-4" />

<div class="flex flex-row flex-wrap">
<Button variant="primary" @click="click('primary')" :outline="outline" :size="size" :icon="getIcon()">Primary</Button>
<Button variant="secondary" class="ml-2" @click="click('secondary')" :outline="outline" :size="size" :icon="getIcon()">Secondary</Button>
<Button variant="success" class="ml-2" @click="click('success')" :outline="outline" :size="size" :icon="getIcon()">Success</Button>
<Button variant="danger" class="ml-2" @click="click('danger')" :outline="outline" :size="size" :icon="getIcon()">Danger</Button>
<Button variant="warning" class="ml-2" @click="click('warning')" :outline="outline" :size="size" :icon="getIcon()">Warning</Button>
<Button variant="info" class="ml-2" @click="click('info')" :outline="outline" :size="size" :icon="getIcon()">Info</Button>
<Button variant="link" class="ml-2" @click="click('link')" :size="size" :icon="getIcon()">Link</Button>
</div>

```vue
<script setup>
import { ref } from "vue";

const outline = ref(false);
const size = ref("");
const getIcon = () => {}
</script>

<template>
    <Button variant="primary" :outline="outline" :size="size" :icon="getIcon()">Primary</Button>
    <Button variant="secondary" :outline="outline" :size="size" :icon="getIcon()">Secondary</Button>
    <Button variant="success" :outline="outline" :size="size" :icon="getIcon()">Success</Button>
    <Button variant="danger" :outline="outline" :size="size" :icon="getIcon()">Danger</Button>
    <Button variant="warning" :outline="outline" :size="size" :icon="getIcon()">Warning</Button>
    <Button variant="info" :outline="outline" :size="size" :icon="getIcon()">Info</Button>
    <Button variant="link" :size="size" :icon="getIcon()">Link</Button>
</template>
```

```vue
<script setup>
import { PlayIcon } from '@heroicons/vue/outline'
</script>

<template>
    <Button :icon="PlayIcon">Custom Icon</Button>
    <Button :disabled="true">Disabled</Button>
<template>
```

## Properties

| Name       | Type        | Default     | Description                                                                                                                       |
| ---------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | `Boolean`   | `false`     | Set to `true` to disable the button.                                                                                              |
| `icon`     | `Component` | `undefined` | Displays the given icon in front of the content.                                                                                  |
| `outline`  | `Boolean`   | `false`     | Adds the `--outline-{variant}` class modifier.                                                                                    |
| `size`     | `String`    | `""`        | The size of the form:<br/>- `xs`<br/>- `sm`<br/>- `lg`<br/>- an empty value would be the default size.                            |
| `sv-class` | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.                |
| `variant`  | `String`    | `primary`   | The variant of button:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info`<br/>- `link` |

## Events

| Name    | Description                        |
| ------- | ---------------------------------- |
| `click` | Called when the button is clicked. |

## Classes

- `sv-button`
  -  `sv-button--{variant}`
  -  `sv-button--outline-{variant}`
  -  `sv-button--{size}`
  -  `sv-button--disabled`
- `sv-button__icon`
  -  `sv-button__icon--{variant}`
  -  `sv-button__icon--disabled`