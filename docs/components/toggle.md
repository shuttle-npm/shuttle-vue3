<script setup>
import { ref } from "vue";
import { Toggle } from "@/components";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";

const value = ref(false);
</script>

# Toggle

## Examples

Value: {{ value }}

<Toggle v-model="value" />

### Label

<Toggle v-model="value" label="Use express delivery?" />

```vue
<template>
    <Toggle v-model="value" label="Use express delivery?" />
</template>
```

### Icon

<Toggle v-model="value" label="Use express delivery?" :onIcon="ThumbUpIcon" :offIcon="ThumbDownIcon" />

```vue
<script setup>
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";
</script>

<template>
    <Toggle v-model="value" label="Use express delivery?" :onIcon="ThumbUpIcon" :offIcon="ThumbDownIcon" />
</template>
```

### Disabled

<Toggle v-model="value" label="Is this disabled?" :disabled="true" />

```vue
<template>
    <Toggle v-model="value" label="Is this disabled?" :disabled="true" />
</template>
```

## Properties

| Name          | Type      | Default | Description                                                                                                        |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`       | `String`  | ""      | The label to display for the input.                                                                                |
| `layout`      | `String`  | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder` | `String`  | ""      | The placeholder to display for the input.                                                                          |
| `disabled`    | `Boolean` | `false` | Indicates whether the toggle is in a disabled state.                                                             |
| `sv-class`    | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-toggle`
  - `sv-toggle--on`
  - `sv-toggle--off`
  - `sv-toggle__slider--disabled`

- `sv-toggle__slider`
  - `sv-toggle__slider--on`
  - `sv-toggle__slider--off`
  - `sv-toggle__slider--disabled`

- `sv-toggle__box`
  - `sv-toggle__box--on`
  - `sv-toggle__box--off`
  - `sv-toggle__box--disabled`

- `sv-toggle__icon`
  - `sv-toggle__box--on`
  - `sv-toggle__box--off`
  - `sv-toggle__box--disabled`

- `sv-toggle__label`
  - `sv-toggle__label--on`
  - `sv-toggle__label--off`
  - `sv-toggle__label--disabled`