<template>
    <form :class="getClasses()">
        <slot></slot>
    </form>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    showMenuToggle: {
        type: Boolean,
        default: true
    },
    svClass: {
        type: Object
    }
});

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
};

const getClasses = () => {
    return [
        useCoreClass("sv-navbar", getOptions(true)),
    ];
};
</script>