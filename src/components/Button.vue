<template>
    <div :class="getClasses()" @click="click($event)" @keydown.space="click($event)" @keydown.enter="click($event)"
        tabindex="0">
        <component :is="getIcon()" :class="getIconClasses()" />
        <slot></slot>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    variant: {
        type: String
    },
    disabled: {
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

const click = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (props.disabled) {
        return;
    }

    emit("click");
}

const getIcon = () => {
    return props.icon ? props.icon : undefined;
}

const getOptions = () => {
    return {
        svClass: props.svClass,
        include: true,
        variant: props.variant ?? "primary",
        disabled: props.disabled,
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
        useCoreClass("sv-button", getOptions()),
        useCoreClass("sv-button--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-button--xs", getBaseOptions(props.size == "xs")),
        useCoreClass("sv-button--sm", getBaseOptions(props.size == "sm")),
        useCoreClass("sv-button--lg", getBaseOptions(props.size == "lg")),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-button__icon", getOptions()),
        useCoreClass("sv-button__icon--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-button__icon--xs", getBaseOptions(props.size == "xs")),
        useCoreClass("sv-button__icon--sm", getBaseOptions(props.size == "sm")),
        useCoreClass("sv-button__icon--lg", getBaseOptions(props.size == "lg")),
    ];
}
</script>