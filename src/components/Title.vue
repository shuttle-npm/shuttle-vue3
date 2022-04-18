<template>
    <div :class="getClasses()" @click="click">
        <component :is="getIcon()" :class="getIconClasses()" />
        {{ props.content }}
        <slot></slot>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    clickable: {
        type: Boolean,
        default: false
    },
    content: {
        type: String
    },
    variant: {
        type: String
    },
    icon: {
        type: null
    },
    svClass: {
        type: Object
    },
})

const click = () => {
    if (!props.clickable) {
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
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-title", getOptions()),
        useCoreClass("sv-title--clickable", { svClass: props.svClass, include: props.clickable }),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-title__icon", getOptions()),
    ];
}
</script>