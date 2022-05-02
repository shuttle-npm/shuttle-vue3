<template>
    <div :class="getClasses()">
        <slot></slot>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    svClass: {
        type: Object
    },
});

const getClasses = () => {
    return [
        useCoreClass("sv-strip", {
            svClass: props.svClass,
            include: true
        })];
}
</script>