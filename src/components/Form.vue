<template>
    <form :class="getClasses()">
        <slot></slot>
    </form>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    size: {
        type: String,
        default: ""
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
        useCoreClass("sv-form", getOptions(true)),
        useCoreClass("sv-form--sm", getOptions(props.size == "sm")),
        useCoreClass("sv-form--md", getOptions(props.size == "md")),
        useCoreClass("sv-form--lg", getOptions(props.size == "lg")),
    ];
};
</script>