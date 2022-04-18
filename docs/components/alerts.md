<script setup>
import { ref } from "vue";
import { BeakerIcon } from '@heroicons/vue/outline'
import { Alert } from "@/components";
import Alerts from "@/components/Alerts.vue";
import Button from "@/components/Button.vue";

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

const alerts = ref([...alertsReference]);

const stateAlerts = ref([
    {
        name: "Success",
        message: "A simple `success-state` alert.",
        variant: "success-state",
    },
    {
        name: "Danger",
        message: "A simple `danger-state` alert.",
        variant: "danger-state",
    },
    {
        name: "Warning",
        message: "A simple `warning-state` alert.",
        variant: "warning-state",
    },
    {
        name: "Information",
        message: "A simple `info-state` alert.",
        variant: "info-state",
    }
]);

const remove = (alert) => {
    const index = alerts.value.findIndex(item => item.name === alert.name);

    if (index < 0) {
        return;
    }

    alerts.value.splice(index, 1);
}

const reset = () => {
    alerts.value = [...alertsReference];
}
</script>

# Alerts

## Examples (dismissable)

<Button @click="reset" content="Reset" class="mb-2" :disabled="alerts.length >= alertsReference.length"></Button>
<Alerts :alerts="alerts" @remove="remove" :sv-class="{ 'sv-alert': 'mb-2' }"/>

### Custom Icon

```vue
<template>
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />
</template>
```
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />

### State Variants

<Alerts :alerts="stateAlerts" :sv-class="{ 'sv-alert': 'mb-2' }" />

## Properties

| Name          | Type        | Default     | Description                                                                                                        |
| ------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `name`        | `String`    | (empty)     | A name to uniquely identify the alert.                                                                             |
| `type`        | `String`    | `primary`   | The type of alert:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info`   |
| `message`     | `String`    | (required)  | The message to display for the alert.                                                                              |
| `dismissable` | `Boolean`   | `false`     | Whether a close icon will be displayed with will emit the `remove` event when clicked.                             |
| `icon`        | `Component` | `undefined` | Displays the given icon in front of the message.                                                                   |
| `sv-class`    | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Events

| Name     | Description                                     |
| -------- | ----------------------------------------------- |
| `remove` | Called when the dismissable element is clicked. |

## Classes

- `sv-alert`
  - `--{variant}`
- `sv-alert__icon`
  - `--{variant}`
- `sv-alert__icon-close`
  - `--{variant}`
- `sv-alert__message`
  - `--{variant}`

## Container

```vue
<template>
<Alerts :alerts="alerts" @remove="remove" />
</template>
```

Where `alerts` contains an array of objects that have the same properties as an `Alert`.  Will redner with class `sv-alerts` and supports the `:sv-class` [core class object](/components/core-class) property.