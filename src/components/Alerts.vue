<template>
    <div v-if="alerts" class="sv-alerts">
        <Alert v-for="alert in alerts" v-bind="alert" @remove="emit('remove', alert)" :class="props.alertClass"/>
    </div>
</template>

<script setup>
import Alert from "./Alert.vue";

const props = defineProps({
    alerts: Array,
    alertClass: [String, Object]
});

const emit = defineEmits(['remove']);
</script>