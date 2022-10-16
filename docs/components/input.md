<script setup>
import { ref } from "vue";
import { Alert, Checkbox, Input, ValidationMessage } from "@/components";
import { EyeIcon, EyeOffIcon, ShieldExclamationIcon } from "@heroicons/vue/outline";

const value = ref("");
const iconEndClickCount = ref(0);
const iconStartClickCount = ref(0);
const readonly = ref(false);

const iconStartClick = () => {
    iconStartClickCount.value += 1;
}

const iconEndClick = () => {
    iconEndClickCount.value += 1;
}

const getEndIcon = () => {
    return iconEndClickCount.value % 2 == 0 ? EyeIcon : EyeOffIcon;
}

const getInputType = () => {
    return iconEndClickCount.value % 2 == 0 ? "text" : "password";
}

const message = ref("");
</script>

# Input

## Examples

Value: {{ value }}

<Checkbox v-model="readonly" label="Readonly?" class="mb-2" />

<Input v-model="value" placeholder="Please type something here" :readonly="readonly" />

### Label

<Input v-model="value" label="Block layout" />
<Input v-model="value" label="Inline layout" layout="inline" class="mt-2" />

```vue
<template>
    <Input v-model="value" label="Block layout" />
    <Input v-model="value" label="Inline layout" layout="inline" />
</template>
```

### Icon

<div class="mb-4">
    Icon start click count: {{ iconStartClickCount }}
    <br/>
    Icon end click count: {{ iconEndClickCount }}
</div>

<Input v-model="value" label="Block layout"
    :icon-start="ShieldExclamationIcon" icon-start-clickable @icon-start-click="iconStartClick" 
    :icon-end="getEndIcon()" icon-end-clickable @icon-end-click="iconEndClick"
    :type="getInputType()"
/>
<Input v-model="value" label="Inline layout" layout="inline" class="mt-2" 
    :icon-start="ShieldExclamationIcon" icon-start-clickable @icon-start-click="iconStartClick" 
    :icon-end="getEndIcon()" icon-end-clickable @icon-end-click="iconEndClick"
    :type="getInputType()"
/>

```vue
<template>
    <Input v-model="value" label="Block layout"
        :icon-start="ShieldExclamationIcon" 
            icon-start-clickable @icon-start-click="iconStartClick" 
        :icon-end="getEndIcon()" 
            icon-end-clickable @icon-end-click="iconEndClick"
        :type="getInputType()"
    />
    <Input v-model="value" label="Inline layout" layout="inline"
        :icon-start="ShieldExclamationIcon" 
            icon-start-clickable @icon-start-click="iconStartClick" 
        :icon-end="getEndIcon()" 
            icon-end-clickable @icon-end-click="iconEndClick"
        :type="getInputType()"
    />
</template>
```

### Slot

- `message`

<Input v-model="message" label="Block layout"><template #message><Alert message="This is a danger alert." size="sm" outline class="mt-2" variant="danger"/></template></Input>
<Input v-model="message" label="Inline layout" layout="inline" class="mt-2"><template #message><ValidationMessage message="This is a validation message." /></template></Input>

```vue
<template>
    <Input v-model="message" label="Block layout">
        <template #message>
            <Alert message="This is a danger alert." size="sm" variant="danger" outline />
        </template>
    </Input>
    <Input v-model="message" label="Inline layout" layout="inline">
        <template #message>
            <ValidationMessage message="This is a validation message." />
        </template>
    </Input>
</template>
```

## Properties

| Name                   | Type      | Default     | Description                                                                                                        |
| ---------------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `icon-end`             | `null`    | `undefined` | An icon to display at the end of the input.                                                                        |
| `icon-end-clickable`   | `Boolean` | `false`     | If `true` the `icon-end` is clickable.                                                                             |
| `icon-start`           | `null`    | `undefined` | An icon to display at the start of the input.                                                                      |
| `icon-start-clickable` | `Boolean` | `false`     | If `true` the `icon-start` is clickable.                                                                           |
| `label`                | `String`  | ""          | The label to display for the input.                                                                                |
| `layout`               | `String`  | `block`     | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder`          | `String`  | ""          | The placeholder to display for the input.                                                                          |
| `readonly`             | `Boolean` | `false`     | When `true` the input value cannot be changed.                                                                     |
| `sv-class`             | `Object`  | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |
| `type`                 | `String`  | `text`      | The type of the input value (same as native typres).                                                               |

## Classes

- `sv-input` 
  - `sv-input--block` 
  - `sv-input--inline`
  - `sv-input--readonly`
- `sv-input__label`
  - `sv-input__label--block` 
  - `sv-input__label--inline`
  - `sv-input__label--readonly`
- `sv-input__input` 
  - `sv-input__input--block` 
  - `sv-input__input--inline`
  - `sv-input__input--readonly`
  - `sv-input__input--icon-end`
  - `sv-input__input--icon-start`
- `sv-input__input-continer` 
  - `sv-input__input-continer--block` 
  - `sv-input__input-continer--inline`
  - `sv-input__input-continer--readonly`
  - `sv-input__input-continer--icon-end`
  - `sv-input__input-continer--icon-start` 
- `sv-input__icon-start`
  - `sv-input__icon-start--clickable`
- `sv-input__icon-end`
  - `sv-input__icon-end--clickable`
- `sv-input__message`
  - `sv-input__message--block` 
  - `sv-input__message--inline`