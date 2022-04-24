<template>
    <div :class="getClasses()" @click="click($event)" @keydown.space="click($event)" @keydown.enter="click($event)" tabindex="0">
        <component :is="getIcon()" :class="getIconClasses()" />
        {{props.content}}
        <slot></slot>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    content: { type: String },
    variant: { type: String },
    disabled: { type: Boolean },
    icon: { type: null },
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
    return props.icon ? props.icon: undefined;
}

const getOptions = () => {
    return {
        svClass: props.svClass,
        include: true,
        variant: props.variant ?? "primary",
        disabled: props.disabled
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-button", getOptions()),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-button__icon", getOptions()),
    ];
}
</script>