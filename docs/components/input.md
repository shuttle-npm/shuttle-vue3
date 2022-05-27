<script setup>
import { computed, ref } from "vue";
import { Alert, Input, ValidationMessage } from "@/components";
import { ExclamationIcon, EyeIcon, EyeOffIcon, ShieldExclamationIcon } from "@heroicons/vue/outline";

const value = ref("");
const iconEndClickCount = ref(0);
const iconStartClickCount = ref(0);

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

<Input v-model="value" placeholder="Please type something here" />

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
| `sv-class`             | `Object`  | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |
| `type`                 | `String`  | `text`      | The type of the input value (same as native typres).                                                               |

## Classes

- `sv-input` 
  - `--block` 
  - `--inline`
- `sv-input__label`
  - `--block` 
  - `--inline`
