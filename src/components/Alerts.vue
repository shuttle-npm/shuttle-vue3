<template>
    <div v-if="alerts" :class="getClasses()">
        <transition-group appear tag="div" enter-active-class="sv-alert-enter-active" enter-from-class="sv-alert-enter-from"
            enter-to-class="sv-alert-enter-to" leave-active-class="sv-alert-leave-active" leave-from-class="sv-alert-leave-from"
            leave-to-class="sv-alert-leave-to">
            <Alert v-for="alert in alerts" v-bind="alert" @remove="emit('remove', alert.name)" :key="alert.key ?? alert.name"
                :sv-class="props.svClass" />
        </transition-group>
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