<script setup>
import { ref } from "vue";
import { Listbox } from "@/components";

const options = [
    { text: 'Wade Cooper' },
    { text: 'Arlene Mccoy' },
    { text: 'Devon Webb' },
    { text: 'Tom Cook' },
    { text: 'Tanya Fox' },
    { text: 'Hellen Schmidt' },
]

const value = ref();
</script>

<style>
.vt-doc ul {
    padding-left: 0;
}
</style>

# Listbox

## Examples

Value: {{  !!value ? value.text : "(nothing selected)" }}

<Listbox v-model="value" :options="options"/>

### Label

<Listbox  v-model="value" :options="options" label="Block layout" />
<Listbox  v-model="value" :options="options" label="Inline layout" layout="inline" class="mt-2" />

```vue
<script setup>
import { ref } from "vue";
import { Listbox } from "@/components";

const options = [
    { text: 'Wade Cooper' },
    { text: 'Arlene Mccoy' },
    { text: 'Devon Webb' },
    { text: 'Tom Cook' },
    { text: 'Tanya Fox' },
    { text: 'Hellen Schmidt' },
]

const value = ref();
</script>

<template>
    <Listbox  v-model="value" :options="options" label="Block layout" />
    <Listbox  v-model="value" :options="options" label="Inline layout" layout="inline" />
</template>
```

## Properties

| Name          | Type     | Default | Description                                                                                                        |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`       | `String` | ""      | The label to display for the input.                                                                                |
| `layout`      | `String` | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder` | `String` | ""      | The placeholder to display for the input.                                                                          |
| `sv-class`    | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-listbox`
  - `--block`
  - `--inline`

- `sv-listbox__container`
  - `--block` 
  - `--inline`

- `sv-listbox__button`
  - `--block` 
  - `--inline`

- `sv-listbox__label`
  - `--block` 
  - `--inline`