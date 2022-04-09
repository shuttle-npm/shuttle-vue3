<template>
    <div :class="getClasses()">
        <label v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</label>
        <input
            class="sv-input__input"
            type="text"
            :value="props.modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :placeholder="props.placeholder ?? ''"
        />
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const props = defineProps({
    layout: {
        type: String,
        default: "block"
    },
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: {
        type: [String, Number, Date],
        default: ""
    },
    svClass: {
        type: Object
    },
})

const getLayout = () => {
    return (props.layout ?? "block").toLowerCase();
}

const getClasses = () => {
    return [
        useCoreClass("sv-input", props.svClass, true),
        useCoreClass("sv-input--inline", props.svClass, getLayout() === "inline"),
        useCoreClass("sv-input--block", props.svClass, getLayout() === "block"),
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-input__label", props.svClass, true),
        useCoreClass("sv-input__label--inline", props.svClass, getLayout() === "inline"),
        useCoreClass("sv-input__label--block", props.svClass, getLayout() === "block"),
    ];
}

const emit = defineEmits(["update:modelValue"]);
</script>