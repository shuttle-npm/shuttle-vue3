<template>
    <div :class="getClasses()">
        <label v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</label>
        <div :class="getBoxClasses()">
            <div v-for="button in buttons" :class="getButtonClasses(button)" @click="click($event, button)"
                @keydown.space="click($event, button)" @keydown.enter="click($event, button)" tabindex="0">
                <component :is="getIcon(button)" :class="getIconClasses(button)" />
                <span :class="getTextClasses(button)">{{ button.text }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["update:modelValue","click"]);

const props = defineProps({
    buttons: {
        type: Array,
        default: []
    },
    disabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
    },
    layout: {
        type: String,
        default: "block"
    },
    modelValue: {
        type: [Number, String],
        default: ''
    },
    svClass: {
        type: Object
    },
})

const click = (event, button) => {
    event.stopPropagation();
    event.preventDefault();

    if (props.disabled || button.value == props.modelValue) {
        return;
    }

    emit("update:modelValue", button.value);
    emit("click", button);
}

const getIcon = (button) => {
    return button.icon ? button.icon : undefined;
}

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
        useCoreClass("sv-button-group", getOptions(true)),
        useCoreClass("sv-button-group--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group--block", getOptions(getLayout() === "block"))
   ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-button-group__label", getOptions(true)),
        useCoreClass("sv-button-group__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group__label--block", getOptions(getLayout() === "block")),
    ];
}

const getBoxClasses = () => {
    return [
        useCoreClass("sv-button-group__box", getOptions(true)),
        useCoreClass("sv-button-group__box--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-button-group__box--block", getOptions(getLayout() === "block")),
    ];
}

const getButtonClasses = (button) => {
    return [
        useCoreClass("sv-button-group__button", getOptions(true)),
        useCoreClass("sv-button-group__button--selected", getOptions(props.modelValue === button.value)),
        useCoreClass("sv-button-group__button--disabled", getOptions(props.disabled)),
    ];
}

const getIconClasses = (button) => {
    return [
        useCoreClass("sv-button-group__button-icon", getOptions(true)),
    ];
}

const getTextClasses = (button) => {
    return [
        useCoreClass("sv-button-group__button-text", getOptions(true)),
    ];
}
</script>