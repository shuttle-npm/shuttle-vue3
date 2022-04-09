<template>
    <div v-if="alerts" :class="getClasses()">
        <Alert
            v-for="alert in alerts"
            v-bind="alert"
            @remove="emit('remove', alert)"
            :sv-class="props.svClass"
        />
    </div>
</template>

<script setup>
import Alert from "./Alert.vue";
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    alerts: {
        type: Array
    },
    svClass: {
        type: Object
    },
});

const emit = defineEmits(['remove']);

const getClasses = () => {
    return [
        useCoreClass("sv-alerts", {
            svClass: props.svClass,
            include: true
        }),
    ];
}
</script>