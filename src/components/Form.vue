<template>
    <form :class="getClasses()" v-on:submit.prevent="submit">
        <slot></slot>
    </form>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    size: {
        type: String,
        default: "full"
    },
    svClass: {
        type: Object
    }
});

const emit = defineEmits(["submit"]);

const submit = () => {
    emit("submit");
}

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
};

const getClasses = () => {
    return [
        useCoreClass("sv-form", getOptions(true)),
        useCoreClass("sv-form--small", getOptions(props.size == "small")),
        useCoreClass("sv-form--medium", getOptions(props.size == "medium")),
        useCoreClass("sv-form--large", getOptions(props.size == "large")),
        useCoreClass("sv-form--full", getOptions(props.size == "full")),
    ];
};
</script>