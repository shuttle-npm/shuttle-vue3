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
        type: "primary",
        dismissable: true
    },
    {
        name: "Secondary",
        message: "A simple secondary alert.",
        type: "secondary",
        dismissable: true
    },
    {
        name: "Success",
        message: "A simple success alert.",
        type: "success",
        dismissable: true
    },
    {
        name: "Danger",
        message: "A simple danger alert.",
        type: "danger",
        dismissable: true
    },
    {
        name: "Warning",
        message: "A simple warning alert.",
        type: "warning",
        dismissable: true
    },
    {
        name: "Information",
        message: "A simple information alert.",
        type: "info",
        dismissable: true
    }
];

var alerts = ref([...alertsReference]);

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

## Standard (dismissable)

<Button @click="reset" content="Reset" class="mb-2" :disabled="alerts.length >= alertsReference.length"></Button>
<Alerts :alerts="alerts" @remove="remove" alert-class="mb-2"/>

## Custom Icon

```vue
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />
```
<Alert :icon="BeakerIcon" type="primary" message="A simple primary alert with a custom icon." :dismissable="false" />

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `String` | (empty) | A name to uniquely identify the alert. |
| `type` | `String` | `primary` | The type of alert:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info` |
| `message` | `String` | (required) | The message to display for the alert. |
| `dismissable` | `Boolean` | `false` | Whether a close icon will be displayed with will emit the `remove` event when clicked. |
| `icon` | `Component` | `undefined` | Displays the given icon in front of the message. |