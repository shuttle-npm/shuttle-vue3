<script setup>
import { ref } from "vue";
import { Alert, Button } from "@/components";
import { PlayIcon } from '@heroicons/vue/outline'

const message = ref("You can click a button to change this message.");

const click = (type) => {
    message.value = `You clicked the "${type}" button.`;
}
</script>

# Buttons

## Examples

<Alert variant="info" :message="message" class="mb-4" />

<div class="flex flex-row">
<Button variant="primary" @click="click('primary')">Primary</Button>
<Button variant="secondary" class="ml-2" @click="click('secondary')">Secondary</Button>
<Button variant="success" class="ml-2" @click="click('success')">Success</Button>
<Button variant="danger" class="ml-2" @click="click('danger')">Danger</Button>
<Button variant="warning" class="ml-2" @click="click('warning')">Warning</Button>
<Button variant="info" class="ml-2" @click="click('info')">Info</Button>
<Button variant="link" class="ml-2" @click="click('link')">Link</Button>
</div>

```vue
<template>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="success">Success</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="info">Info</Button>
    <Button variant="link">Link</Button>
</template>
```

---
<div class="flex flex-row">
<Button :icon="PlayIcon">Custom Icon</Button>
<Button :disabled="true" class="ml-2">Disabled</Button>
</div>

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