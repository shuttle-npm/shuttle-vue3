<template>
    <div :class="getClasses()">
        <component :is="icon()" :class="getIconClasses()" />
        <div :class="getMessageClasses()">{{ message }}</div>
        <XCircleIcon
            v-if="dismissable"
            :class="getCloseIconClasses()"
            v-on:click="emit('remove', alert)"
        />
    </div>
</template>

<script setup>
import { XCircleIcon } from "@heroicons/vue/outline";
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    name: { type: String },
    variant: { type: String },
    message: { type: String },
    dismissable: { type: Boolean },
    icon: { type: null },
    svClass: {
        type: Object
    },
})

const emit = defineEmits(["remove"]);

const icon = () => {
    return props.icon ? props.icon : undefined;
}

const getOptions = () => {
    return {
        svClass: props.svClass,
        include: true,
        variant: props.variant ?? "primary"
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-alert", getOptions()),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon", getOptions()),
    ];
}

const getCloseIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon-close", getOptions()),
    ];
}

const getMessageClasses = () => {
    return [
        useCoreClass("sv-alert__message", getOptions()),
    ];
}
</script>