<template>
    <div :class="getClasses()">
        <component :is="icon()" :class="getIconClasses()" />
        <div :class="getMessageClasses()">{{ message }}</div>
        <XCircleIcon v-if="dismissable" :class="getCloseIconClasses()" v-on:click="emit('remove', alert)" />
    </div>
</template>

<script setup>
import { XCircleIcon } from "@heroicons/vue/outline";
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    name: {
        type: String
    },
    variant: {
        type: String
    },
    message: {
        type: String
    },
    dismissable: {
        type: Boolean
    },
    icon: {
        type: null
    },
    outline: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: ""
    },
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

const getBaseOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-alert", getOptions()),
        useCoreClass("sv-alert--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon", getOptions()),
        useCoreClass("sv-alert__icon--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getCloseIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon-close", getOptions()),
        useCoreClass("sv-alert__icon-close--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon-close--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getMessageClasses = () => {
    return [
        useCoreClass("sv-alert__message", getOptions()),
        useCoreClass("sv-alert__message--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__message--lg", getBaseOptions(props.size === "lg")),
    ];
}
</script>