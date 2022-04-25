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
<template v-slot:default>
<div>
    <div class="mt-2">
        <p class="text-sm text-gray-500">
            This text is provided in the default slot.
        </p>
    </div>
    <div class="mt-4">
        <button type="button"
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white0 bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
            @click="setIsOpen(false)">
            Button
        </button>
    </div>
</div>
</template>
</Dialog>

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