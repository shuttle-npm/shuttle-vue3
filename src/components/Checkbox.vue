<template>
    <div :class="getClasses()" @click="click">
        <div :class="getIconContainerClasses()">
            <component :is="getIcon?.()" :class="getIconClasses()" />
        </div>
        <label v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</label>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";
import { CheckIcon } from "@heroicons/vue/outline";

const props = defineProps({
    label: {
        type: String,
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    checkedIcon: {
        type: null
    },
    uncheckedIcon: {
        type: null
    },
    svClass: {
        type: Object
    },
})

const emit = defineEmits(["update:modelValue"]);

const click = () => {
    emit("update:modelValue", !props.modelValue);
}

const getIcon = () => {
    return props.modelValue
        ? !!props.checkedIcon ? props.checkedIcon : CheckIcon
        : !!props.uncheckedIcon ? props.uncheckedIcon : null;
}

const getClasses = () => {
    return [
        useCoreClass("sv-checkbox", props.svClass, true),
        useCoreClass("sv-checkbox--checked", props.svClass, props.modelValue),
        useCoreClass("sv-checkbox--unchecked", props.svClass, !props.modelValue),
    ];
}

const getIconContainerClasses = () => {
    return [
        useCoreClass("sv-checkbox__icon-container", props.svClass, true),
        useCoreClass("sv-checkbox__icon-container--checked", props.svClass, props.modelValue),
        useCoreClass("sv-checkbox__icon-container--unchecked", props.svClass, !props.modelValue),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-checkbox__icon", props.svClass, true),
        useCoreClass("sv-checkbox__icon--checked", props.svClass, props.modelValue),
        useCoreClass("sv-checkbox__icon--unchecked", props.svClass, !props.modelValue),
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-checkbox__label", props.svClass, true),
        useCoreClass("sv-checkbox__label--checked", props.svClass, props.modelValue),
        useCoreClass("sv-checkbox__label--unchecked", props.svClass, !props.modelValue),
    ];
}
</script>