<template>
    <div :class="getClasses()">
        <label v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</label>
        <input
            :class="getInputClasses()"
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

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-input", getOptions(true)),
        useCoreClass("sv-input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input--block", getOptions(getLayout() === "block"))
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-input__label", getOptions(true)),
        useCoreClass("sv-input__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__label--block", getOptions(getLayout() === "block")),
    ];
}

const getInputClasses = () => {
    return [
        useCoreClass("sv-input__input", getOptions(true)),
        useCoreClass("sv-input__input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__input--block", getOptions(getLayout() === "block")),
    ];
}

const emit = defineEmits(["update:modelValue"]);
</script>