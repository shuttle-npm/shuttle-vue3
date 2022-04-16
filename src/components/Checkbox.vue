<template>
    <div :class="getClasses()" @click="click">
        <div :class="getBoxClasses()">
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
    disabled: {
        type: Boolean,
        default: false
    },
    svClass: {
        type: Object
    },
})

const emit = defineEmits(["update:modelValue", "click"]);

const click = () => {
    if (props.disabled) {
        return;
    }

    emit("update:modelValue", !props.modelValue);
    emit("click");
}

const getIcon = () => {
    return props.modelValue
        ? !!props.checkedIcon ? props.checkedIcon : CheckIcon
        : !!props.uncheckedIcon ? props.uncheckedIcon : null;
}

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-checkbox", getOptions(true)),
        useCoreClass("sv-checkbox--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox--disabled", getOptions(props.disabled)),
    ];
}

const getBoxClasses = () => {
    return [
        useCoreClass("sv-checkbox__box", getOptions(true)),
        useCoreClass("sv-checkbox__box--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__box--unchecked", getOptions(!props.modelValue)),
        useCoreClass("sv-checkbox__box--disabled", getOptions(props.disabled)),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-checkbox__icon", getOptions(true)),
        useCoreClass("sv-checkbox__icon--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__icon--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__icon--unchecked", getOptions(!props.modelValue)),
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-checkbox__label", getOptions(true)),
        useCoreClass("sv-checkbox__label--disabled", getOptions(props.disabled)),
        useCoreClass("sv-checkbox__label--checked", getOptions(props.modelValue)),
        useCoreClass("sv-checkbox__label--unchecked", getOptions(!props.modelValue)),
    ];
}
</script>