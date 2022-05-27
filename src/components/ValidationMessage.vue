<template>
    <div :class="getClasses()" v-if="!!props.message">
        {{props.message}}
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    message: {
        type: String,
    },
    svClass: {
        type: Object
    },
});

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-validation-message", getOptions(true)),
    ];
}
</script>