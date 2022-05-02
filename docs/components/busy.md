<script setup>
import { ref } from "vue";
import { Busy, Checkbox } from "@/components";
import IconSpinner from "/@theme/components/IconSpinner.vue";

const custom = ref(false);
</script>

# Strip

## Examples

{{icon}}

<Checkbox v-model="custom" label="Custom icon?" class="mb-2" />

<Busy v-if="!custom" />
<Busy v-if="!!custom" :icon="IconSpinner" />

```vue
<template>
    <Busy v-if="!custom" />
    <Busy v-if="!!custom" :icon="IconSpinner" />
</template>
```

## Properties

| Name       | Type        | Default     | Description                                                                                                        |
| ---------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `icon`     | `Component` | `undefined` | Displays the given icon.                                                                                           |
| `sv-class` | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-busy`
- `sv-busy__icon`
