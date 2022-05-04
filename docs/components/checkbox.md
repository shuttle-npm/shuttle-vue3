<script setup>
import { ref } from "vue";
import { Checkbox } from "@/components";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";

const value = ref(false);
</script>

# Checkbox

## Examples

Value: {{ value }}

<Checkbox v-model="value" />

### Label

<Checkbox v-model="value" label="Use express delivery?" />

```vue
<template>
    <Checkbox v-model="value" label="Use express delivery?" />
</template>
```

### Icon

<Checkbox v-model="value" label="Use express delivery?" :checkedIcon="ThumbUpIcon" :uncheckedIcon="ThumbDownIcon" />

```vue
<template>
    <Checkbox v-model="value" label="Use express delivery?" :checkedIcon="ThumbUpIcon" :uncheckedIcon="ThumbDownIcon" />
</template>
```

### Disabled

<Checkbox v-model="value" label="Is this disabled?" :disabled="true" />

```vue
<template>
    <Checkbox v-model="value" label="Is this disabled?" :disabled="true" />
</template>
```

## Properties

| Name            | Type      | Default     | Description                                                                                                        |
| --------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `checkedIcon`   | `null`    | `undefined` | An icon that should be used when the checkbox is in the `checked` / `true` state.                                  |
| `disabled`      | `Boolean` | `false`     | Indicates whether the checkbox is in a disabled state.                                                             |
| `label`         | `String`  | ""          | The label to display for the input.                                                                                |
| `sv-class`      | `Object`  | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |
| `uncheckedIcon` | `null`    | `undefined` | An icon that should be used when the checkbox is in the `unchecked` / `false` state.                               |

## Events

| Name    | Description                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------- |
| `click` | Called when the checkbox is clicked.  This occurs after the `update:modelValue` event has been emitted. |

## Classes

- `sv-checkbox`
  - `sv-checkbox--checked`
  - `sv-checkbox--unchecked`
  - `sv-checkbox--disabled`
- `sv-checkbox__box`
  - `sv-checkbox__box--checked`
  - `sv-checkbox__box--unchecked`
  - `sv-checkbox__box--disabled`
- `sv-checkbox__icon`
  - `sv-checkbox__icon--checked`
  - `sv-checkbox__icon--unchecked`
  - `sv-checkbox__icon--disabled`
- `sv-checkbox__label`
  - `sv-checkbox__label--checked`
  - `sv-checkbox__label--unchecked`
  - `sv-checkbox__label--disabled`