<script setup>
import { ref } from "vue";
import { Alert, Listbox, ValidationMessage } from "@/components";

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

### Slot

- `message`

<Listbox v-model="value" :options="options" label="Block layout"><template #message><Alert message="This is an info alert." size="sm" outline class="mt-2" variant="info"/></template></Listbox>
<Listbox v-model="value" :options="options" label="Inline layout" layout="inline" class="mt-2"><template #message><ValidationMessage message="This is a validation message." /></template></Listbox>

```vue
<template>
    <Listbox v-model="value" :options="options" label="Block layout">
        <template #message>
            <Alert message="This is an info alert." size="sm" outline class="mt-2" variant="info"/>
        </template>
    </Listbox>
    <Listbox v-model="value" :options="options" label="Inline layout" layout="inline" class="mt-2">
        <template #message>
            <ValidationMessage message="This is a validation message." />
        </template>
    </Listbox>
</template>
```

## Properties

| Name          | Type     | Default     | Description                                                                                                        |
| ------------- | -------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`       | `String` | ""          | The label to display for the input.                                                                                |
| `layout`      | `String` | `block`     | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder` | `String` | ""          | The placeholder to display for the input.                                                                          |
| `sv-class`    | `Object` | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-listbox`
  - `sv-listbox--block`
  - `sv-listbox--inline`
- `sv-listbox__container`
  - `sv-listbox__container--block` 
  - `sv-listbox__container--inline`
- `sv-listbox__button`
  - `sv-listbox__button--block` 
  - `sv-listbox__button--inline`
- `sv-listbox__label`
  - `sv-listbox__label--block` 
  - `sv-listbox__label--inline`
- `sv-listbox__message`
  - `sv-listbox__message--inline`
  - `sv-listbox__message--block`