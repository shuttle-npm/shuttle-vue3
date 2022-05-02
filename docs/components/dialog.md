<script setup>
import { ref } from "vue";
import { Button, Dialog } from "@/components";

const isOpen = ref(false);

const setIsOpen = (value) => {
    isOpen.value = value;
}
</script>

# Dialog

## Examples

<Button @click="setIsOpen(true)">Show</Button>
<Dialog :is-open="isOpen" :set-is-open="setIsOpen" title="Dialog Title" message="A message for the dialog.">
<div class="mt-2">
    <p class="text-sm text-gray-500">
        This text is provided in the default slot.
    </p>
</div>
<div class="mt-4">
    <button type="button"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
        @click="setIsOpen(false)">
        Button
    </button>
</div>
</Dialog>

```vue
<script setup>
import { ref } from "vue";
import { Button, Dialog } from "@/components";

const isOpen = ref(false);

const setIsOpen = (value) => {
    isOpen.value = value;
}
</script>

<template>
    <Dialog 
        :is-open="isOpen" 
        :set-is-open="setIsOpen" 
        title="Dialog Title" 
        message="A message for the dialog.">
        <div class="mt-2">
            <p class="text-sm text-gray-500">
                This text is provided in the default slot.
            </p>
        </div>
        <div class="mt-4">
            <button type="button" @click="setIsOpen(false)">
                Button
            </button>
        </div>
    </Dialog>
</template>
```

## Properties

| Name          | Type       | Default     | Description                                                                                                                          |
| ------------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `message` | `String`   | `""`        | A message to show in the dialog.                                                                                                 |
| `isOpen`      | `Boolean`  | `false`     | Set to `true` to show the dialog; else `false` to hide the dialog.                                                                   |
| `setIsOpen`   | `Function` | `undefined` | The function to call that would set the `isOpen` prop to `false`.  Should take a single argument that represents the `isOpen` state. |
| `sv-class`    | `Object`   | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.                   |
| `title`       | `String`   | `""`        | A title to show in the dialog.                                                                                                       |

## Classes

- `sv-dialog`
- `sv-dialog__title`
- `sv-dialog__message`
- `sv-dialog__overlay`
- `sv-dialog__container`