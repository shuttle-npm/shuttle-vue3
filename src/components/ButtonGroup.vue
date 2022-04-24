<template>
    <div :class="getClasses()">
        <div v-for="button in buttons" :class="getButtonClasses(button)" @click="click($event, button)"
            @keydown.space="click($event, button)" @keydown.enter="click($event, button)" tabindex="0">
            <component :is="getIcon(button)" :class="getIconClasses(button)" />
            <span :class="getTextClasses(button)">{{ button.text }}</span>
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
    modelValue: {
        type: String,
        default: ''
    },
    svClass: {
        type: Object
    },
})

const click = (event, button) => {
    event.stopPropagation();
    event.preventDefault();

    if (props.disabled) {
        return;
    }

    emit("update:modelValue", button.value);
    emit("click", button);
}

const getIcon = (button) => {
    return button.icon ? button.icon : undefined;
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