<script setup>
import { ref } from "vue";
import { Alert, Title } from "@/components";
import { PlayIcon } from '@heroicons/vue/outline'

const message = ref("You can click a title to change this message.");

const click = (type) => {
    message.value = `You clicked the "${type}" title.`;
}
</script>

# Title

## Examples

<Alert variant="info" :message="message" class="mb-4" />

<Title variant="primary" @click="click('primary')" clickable>Primary</Title>
<Title variant="secondary" @click="click('secondary')" clickable>Secondary</Title>
<Title variant="success" @click="click('success')" clickable>Success</Title>
<Title variant="danger" @click="click('danger')" clickable>Danger</Title>
<Title variant="warning" @click="click('warning')" clickable>Warning</Title>
<Title variant="info" @click="click('info')" clickable>Info</Title>

```vue
<template>
    <Title variant="primary" clickable>Primary</Title>
    <Title variant="secondary" clickable>Secondary</Title>
    <Title variant="success" clickable>Success</Title>
    <Title variant="danger" clickable>Danger</Title>
    <Title variant="warning" clickable>Warning</Title>
    <Title variant="info" clickable>Info</Title>
</template>
```

---
<Title :icon="PlayIcon">Custom Icon</Title>

```vue
<script setup>
import { PlayIcon } from '@heroicons/vue/outline'
</script>

<template>
    <Title :icon="PlayIcon">Custom Icon</Title>
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

- `sv-title`
  -  `sv-title--{variant}`
  -  `sv-title--clickable`
- `sv-title__icon`