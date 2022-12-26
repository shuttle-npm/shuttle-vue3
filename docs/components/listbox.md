<script setup>
import { computed, ref } from "vue";
import { Alert, Listbox, ValidationMessage } from "@/components";

const options = [
    { value: 0, text: '(no one)' },
    { value: 1, text: 'Wade Cooper' },
    { value: 2, text: 'Arlene Mccoy' },
    { value: 3, text: 'Devon Webb' },
    { value: 4, text: 'Tom Cook' },
    { value: 5, text: 'Tanya Fox' },
    { value: 6, text: 'Hellen Schmidt' },
    { value: 7, text: 'Inigo Montoya' },
    { value: 8, text: 'Hartwig Schierbaum' },
]

const value = ref();
const filterValue = ref("");

const filter = (value) => {
    filterValue.value = value;
}

const filteredOptions = computed(() => {
    if (!filterValue.value) {
        return options;
    }

    const value = filterValue.value.toLowerCase();

    const result = options.filter(option => {
        return option.text.toLowerCase().indexOf(value) > -1;
    });

    return result;
});
</script>

<style>
.vt-doc ul {
    padding-left: 0;
}
</style>

# Listbox

## Examples

Value: {{  value != undefined ? value : "(nothing selected)" }}

<Listbox v-model="value" :options="options"/>

### Label

<Listbox  v-model="value" :options="options" label="Block layout" />
<Listbox  v-model="value" :options="options" label="Inline layout" layout="inline" class="mt-2" />

```vue
<script setup>
import { ref } from "vue";
import { Listbox } from "@/components";

const options = [
    { value: 0, text: '(no one)' },
    { value: 1, text: 'Wade Cooper' },
    { value: 2, text: 'Arlene Mccoy' },
    { value: 3, text: 'Devon Webb' },
    { value: 4, text: 'Tom Cook' },
    { value: 5, text: 'Tanya Fox' },
    { value: 6, text: 'Hellen Schmidt' },
    { value: 7, text: 'Inigo Montoya' },
    { value: 8, text: 'Hartwig Schierbaum' },
]

const value = ref();
</script>

<template>
    <Listbox v-model="value" :options="options" label="Block layout" />
    <Listbox v-model="value" :options="options" label="Inline layout" layout="inline" />
</template>
```

### Searchable

<Listbox v-model="value" :options="filteredOptions" label="Block layout" searchable @filter="filter" :filterValue="filterValue" />
<Listbox v-model="value" :options="filteredOptions" label="Inline layout" layout="inline" class="mt-2" searchable @filter="filter" :filterValue="filterValue" />

```vue
<script setup>
import { computed, ref } from "vue";
import { Listbox } from "@/components";

const options = [
    { value: 0, text: '(no one)' },
    { value: 1, text: 'Wade Cooper' },
    { value: 2, text: 'Arlene Mccoy' },
    { value: 3, text: 'Devon Webb' },
    { value: 4, text: 'Tom Cook' },
    { value: 5, text: 'Tanya Fox' },
    { value: 6, text: 'Hellen Schmidt' },
    { value: 7, text: 'Inigo Montoya' },
    { value: 8, text: 'Hartwig Schierbaum' },
]

const value = ref();
const filterValue = ref("");

const filter = (value) => {
    filterValue.value = value;
}

const filteredOptions = computed(() => {
    if (!filterValue.value) {
        return options;
    }

    const result = options.filter(option => {
        return option.text.indexOf(filterValue.value) > -1;
    });

    return result;
});
</script>

<template>
    <Listbox v-model="value" :options="filteredOptions" label="Block layout" searchable @filter="filter" :filterValue="filterValue" />
    <Listbox v-model="value" :options="filteredOptions" label="Inline layout" layout="inline" class="mt-2" searchable @filter="filter" :filterValue="filterValue" />
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

| Name              | Type      | Default | Description                                                                                                        |
| ----------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `displayProperty` | `String`  | "text"  | The property in the option object containing the text to display.                                                  |
| `filterValue`     | `String`  | ""      | The value to pass to the `filter` method.                                                                          |
| `label`           | `String`  | ""      | The label to display for the input.                                                                                |
| `layout`          | `String`  | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `options`         | `Array`   | `[]`    | The available options where each object has both a `valueProperty` and a `displayProperty`.                        |
| `placeholder`     | `String`  | ""      | The placeholder to display for the input.                                                                          |
| `searchable`      | `Boolean` | `false` | Set to `true` in order to add a filter inbox.                                                                      |
| `sv-class`        | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |
| `valueProperty`   | `String`  | "value" | The property in the option object containing the value.                                                            |

## Methods

| Name     | Description                                                             |
| -------- | ----------------------------------------------------------------------- |
| `filter` | This will be invoked when the `filterValue` is changed: `(filterValue)` |

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
- `sv-listbox__selected-option`
- `sv-listbox__placeholder`
- `sv-listbox__icon-container`
- `sv-listbox__label`
  - `sv-listbox__label--block` 
  - `sv-listbox__label--inline`
- `sv-listbox__options`
- `sv-listbox__option`
  - `sv-listbox__option--active`
  - `sv-listbox__option--inactive`
- `sv-listbox__option-text`
  - `sv-listbox__option-text--selected`
  - `sv-listbox__option-text--not-selected`
- `sv-listbox__option-icon-container--selected`
- `sv-listbox__option-icon--selected`
- `sv-listbox__message`
  - `sv-listbox__message--inline`
  - `sv-listbox__message--block`
- `sv-listbox__filter`