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

<Listbox  v-model="value" :options="options" label="Block layout" />
<Listbox  v-model="value" :options="options" label="Inline layout" layout="inline" />
```

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `String` | "" | The label to display for the input. |
| `layout` | `String` | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline` |
| `placeholder` | `String` | "" | The placeholder to display for the input. |

## Classes

`sv-listbox` (`sv-listbox--block` | `sv-listbox--inlined`)
`sv-listbox__container` (`sv-listbox__container--block` | `sv-listbox__container--inline`)
`sv-listbox__button` (`sv-listbox__button--block` | `sv-listbox__button--inline`)
`sv-listbox__label` (`sv-label--block` | `sv-label--inline`)