<script setup>
import { ref } from "vue";
import Alerts from "@/components/Alerts.vue";
import Button from "@/components/Button.vue";

const alertsReference = [
    {
        name: "Primary",
        message: "A simple primary alert.",
        type: "primary"
    },
    {
        name: "Secondary",
        message: "A simple secondary alert.",
        type: "secondary"
    },
    {
        name: "Success",
        message: "A simple success alert.",
        type: "success"
    },
    {
        name: "Danger",
        message: "A simple danger alert.",
        type: "danger"
    },
    {
        name: "Warning",
        message: "A simple warning alert.",
        type: "warning"
    },
    {
        name: "Information",
        message: "A simple information alert.",
        type: "info"
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

<Button @click="reset" content="Reset" class="mb-2" :disabled="alerts.length >= alertsReference.length"></Button>
<Alerts :alerts="alerts" @remove="remove" alert-class="mb-2"/>
