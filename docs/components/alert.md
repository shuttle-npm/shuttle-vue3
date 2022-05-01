<script setup>
import { computed, ref } from "vue";
import { BeakerIcon } from '@heroicons/vue/outline'
import { Alert, Alerts, Button, ButtonGroup, Checkbox } from "@/components";

const outline = ref(false);
const size = ref("");

const buttons = ref([
    {
        text: "none",
        value: ""
    },
    {
        text: "small",
        value: "sm"
    },
    {
        text: "large",
        value: "lg"
    },
]);

const alertsReference = [
    {
        name: "Primary",
        message: "A simple primary alert.",
        variant: "primary",
        dismissable: true
    },
    {
        name: "Secondary",
        message: "A simple secondary alert.",
        variant: "secondary",
        dismissable: true
    },
    {
        name: "Success",
        message: "A simple success alert.",
        variant: "success",
        dismissable: true
    },
    {
        name: "Danger",
        message: "A simple danger alert.",
        variant: "danger",
        dismissable: true
    },
    {
        name: "Warning",
        message: "A simple warning alert.",
        variant: "warning",
        dismissable: true
    },
    {
        name: "Information",
        message: "A simple info alert.",
        variant: "info",
        dismissable: true
    }
];

const alerts = ref([]);

const remove = (alert) => {
    const index = alerts.value.findIndex(item => item.name === alert.name);

    if (index < 0) {
        return;
    }

    alerts.value.splice(index, 1);
}

const computedAlerts = computed(() => {
    return alerts.value.map(item => ({...item, outline: outline.value, size: size.value}));
})

const reset = () => {
    alerts.value = [...alertsReference];
}

reset();
</script>

# Alert

## Examples (dismissable)

<ButtonGroup v-model="size" :buttons="buttons" class="mb-4" />

<Checkbox v-model="outline" label="Outline?" class="mb-4" />

<Button @click="reset" content="Reset" class="mb-2" :disabled="alerts.length >= alertsReference.length"></Button>
<Alerts :alerts="computedAlerts" @remove="remove" :sv-class="{ 'sv-alert': 'mb-2' }"/>

### Custom Icon

```vue
<template>
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />
</template>
```
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />

## Properties

| Name          | Type        | Default     | Description                                                                                                        |
| ------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `name`        | `String`    | (empty)     | A name to uniquely identify the alert.                                                                             |
| `type`        | `String`    | `primary`   | The type of alert:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info`   |
| `message`     | `String`    | (required)  | The message to display for the alert.                                                                              |
| `dismissable` | `Boolean`   | `false`     | Whether a close icon will be displayed with will emit the `remove` event when clicked.                             |
| `icon`        | `Component` | `undefined` | Displays the given icon in front of the message.                                                                   |
| `size`        | `String`    | `""`        | The size of the alert:<br/>- `sm`<br/>- `lg`<br/>- an empty value would be the default size.                       |
| `sv-class`    | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| `remove` | Called when the dismissable element is clicked. |

## Classes

- `sv-alert`
  - `sv-alert--{variant}`
  - `sv-alert--{size}`
- `sv-alert__icon`
  - `sv-alert__icon--{variant}`
  - `sv-alert__icon--{size}`
- `sv-alert__icon-close`
  - `sv-alert__icon-close--{variant}`
  - `sv-alert__icon-close--{size}`
- `sv-alert__message`
  - `sv-alert__message--{variant}`
  - `sv-alert__message--{size}`

## Container

```vue
<template>
<Alerts :alerts="alerts" @remove="remove" />
</template>
```

Where `alerts` contains an array of objects that have the same properties as an `Alert`.  Will redner with class `sv-alerts` and supports the `:sv-class` [core class object](/components/core-class) property.