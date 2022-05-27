<script setup>
import { computed, ref } from "vue";
import { Checkbox, Input, ValidationMessage } from "@/components";

const show = ref(true);
const message = computed(() => show.value ? "This is a typical validation message such as 'The field may not be empty'." : "");
</script>

# ValidationMessage

## Examples

<Checkbox v-model="show" label="Show message?" class="mb-2" />
<ValidationMessage :message="message" />

```vue
<template>
    <ValidationMessage :message="message" />
</template>
```

## Properties

| Name       | Type     | Default | Description                                                                                                        |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `message`  | `String` | ``      | The message that should be displayed.                                                                              |
| `sv-class` | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-validation-message`