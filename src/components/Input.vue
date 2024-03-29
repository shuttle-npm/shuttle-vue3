<template>
    <div :class="getClasses()">
        <label v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</label>
        <div :class="getInputContainerClasses()">
            <component v-if="!!props.iconStart" :is="getIconStart?.()" :class="getIconStartClasses()"
                @click="iconStartClick" />
            <input v-if="isInput" :class="getInputClasses()" :type="props.type ?? 'text'" :value="props.modelValue"
                @input="emit('update:modelValue', $event.target.value)" :placeholder="props.placeholder ?? ''"
                :autocomplete="autocomplete" :readonly="!!props.readonly"/>
            <textarea v-else :class="getInputClasses()" :value="props.modelValue"
                @input="emit('update:modelValue', $event.target.value)" :placeholder="props.placeholder ?? ''" :rows="props.rows"
                :readonly="!!props.readonly"></textarea>
            <component v-if="!!props.iconEnd" :is="getIconEnd?.()" :class="getIconEndClasses()" @click="iconEndClick" />
        </div>
        <div :class="getMessageClasses()">
            <slot name="message"></slot>
        </div>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";
import { computed } from "vue";

const props = defineProps({
    autocomplete: {
        type: String
    },
    iconEnd: {
        type: null
    },
    iconEndClickable: {
        type: Boolean,
        default: false
    },
    iconStart: {
        type: null
    },
    iconStartClickable: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ""
    },
    layout: {
        type: String,
        default: "block"
    },
    modelValue: {
        type: [String, Number, Date],
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    readonly: {
        type: Boolean,
        default: false
    },
    rows: {
        type: Number,
        default: 1
    },
    svClass: {
        type: Object
    },
    type: {
        type: String,
        default: "text"
    }
})

const isInput = computed(() => {
    return (props.rows ?? 1) < 2;
});

const getIconStart = () => {
    return props.iconStart ? props.iconStart : null;
}

const getIconEnd = () => {
    return props.iconEnd ? props.iconEnd : null;
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
        useCoreClass("sv-input", getOptions(true)),
        useCoreClass("sv-input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input--readonly", getOptions(!!props.readonly))
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-input__label", getOptions(true)),
        useCoreClass("sv-input__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__label--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input__label--readonly", getOptions(!!props.readonly))
    ];
}

const getInputClasses = () => {
    return [
        useCoreClass("sv-input__input", getOptions(true)),
        useCoreClass("sv-input__input--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__input--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input__input--icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__input--icon-start", getOptions(!!props.iconStart)),
        useCoreClass("sv-input__input--readonly", getOptions(!!props.readonly))
    ];
}

const getInputContainerClasses = () => {
    return [
        useCoreClass("sv-input__input-container", getOptions(true)),
        useCoreClass("sv-input__input-container--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__input-container--block", getOptions(getLayout() === "block")),
        useCoreClass("sv-input__input-container--icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__input-container--icon-start", getOptions(!!props.iconStart)),
        useCoreClass("sv-input__input-container--readonly", getOptions(!!props.readonly))
    ];
}

const getIconStartClasses = () => {
    return [
        useCoreClass("sv-input__icon-start", getOptions(!!props.iconStart)),
        useCoreClass("sv-input__icon-start--clickable", getOptions(!!props.iconStart && props.iconStartClickable))
    ];
}

const getIconEndClasses = () => {
    return [
        useCoreClass("sv-input__icon-end", getOptions(!!props.iconEnd)),
        useCoreClass("sv-input__icon-end--clickable", getOptions(!!props.iconEnd && props.iconEndClickable))
    ];
}

const getMessageClasses = () => {
    return [
        useCoreClass("sv-input__message", getOptions(true)),
        useCoreClass("sv-input__message--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-input__message--block", getOptions(getLayout() === "block")),
    ];
}

const emit = defineEmits(["update:modelValue", "iconStartClick", "iconEndClick"]);

const iconStartClick = () => {
    if (!props.iconStartClickable) {
        return;
    }

    emit("iconStartClick");
}

const iconEndClick = () => {
    if (!props.iconEndClickable) {
        return;
    }

    emit("iconEndClick");
}
</script>