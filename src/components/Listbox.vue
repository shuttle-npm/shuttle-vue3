<template>
    <Listbox v-model="selectedOption">
        <div :class="getClasses()">
            <div :class="getContainerClasses()">
                <ListboxLabel v-if="!!props.label" :class="getLabelClasses()">{{ props.label }}</ListboxLabel>
                <ListboxButton :class="getButtonClasses()">
                    <span class="sv-listbox__selected-option">{{
                        !!selectedOption ? selectedOption[displayProperty] ??
                            displayProperty : placeholder
                    }}</span>
                    <span class="sv-listbox__icon-container">
                        <SelectorIcon class="sv-listbox__icon" aria-hidden="true" />
                    </span>
                </ListboxButton>
                <div :class="getAlertClasses()">
                    <Alert v-if="!!alert" :message="alert.message" :variant="alert.variant" :icon="alert.icon" :dismissable="alert.dismissable" @click="alert.click" />
                </div>
            </div>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions class="sv-listbox__options">
                    <ListboxOption v-slot="{ active, selected }" v-for="option in options"
                        :key="option[valueProperty] ?? option[displayProperty]" :value="option" as="template"
                        :onclick="emit('update:modelValue', option)">
                        <li
                            :class="[active ? 'sv-listbox__option--active' : 'sv-listbox__option--inactive', 'sv-listbox__option']">
                            <span :class="[
                                selected ? 'sv-listbox__option-text--selected' : 'sv-listbox__option-text--not-selected', 'sv-listbox__option-text',
                            ]">{{ option[displayProperty] ?? displayProperty }}</span>
                            <span v-if="selected" class="sv-listbox__option-icon-container--selected">
                                <CheckIcon class="sv-listbox__option-icon--selected" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'
import { useAlert } from "@/composables/useAlert";
import { useCoreClass } from "@/composables/useCoreClass";
import Alert from "./Alert.vue";

const props = defineProps({
    alert: {
        type: Object
    },
    layout: {
        type: String,
        default: "block"
    },
    label: {
        type: String,
        default: ""
    },
    options: {
        type: Array,
        default: undefined
    },
    displayProperty: {
        type: String,
        default: "text"
    },
    valueProperty: {
        type: String,
        default: "value"
    },
    placeholder: {
        type: String,
        default: "Please select..."
    },
    modelValue: {
        type: undefined
    },
    svClass: {
        type: Object
    },
})

const getLayout = () => {
    return (props.layout ?? "block").toLowerCase();
}

const options = props.options ?? [];

const selectedOption = ref();

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-listbox", getOptions(true)),
        useCoreClass("sv-listbox--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox--block", getOptions(getLayout() === "block")),
    ];
}

const getContainerClasses = () => {
    return [
        useCoreClass("sv-listbox__container", getOptions(true)),
        useCoreClass("sv-listbox__container--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__container--block", getOptions(getLayout() === "block")),
    ];
}

const getButtonClasses = () => {
    return [
        useCoreClass("sv-listbox__button", getOptions(true)),
        useCoreClass("sv-listbox__button--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__button--block", getOptions(getLayout() === "block")),
    ];
}

const getLabelClasses = () => {
    return [
        useCoreClass("sv-listbox__label", getOptions(true)),
        useCoreClass("sv-listbox__label--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__label--block", getOptions(getLayout() === "block")),
    ];
}

const getAlertClasses = () => {
    return [
        useCoreClass("sv-listbox__alert", getOptions(true)),
        useCoreClass("sv-listbox__alert--inline", getOptions(getLayout() === "inline")),
        useCoreClass("sv-listbox__alert--block", getOptions(getLayout() === "block")),
    ];
}

const displayProperty = props.displayProperty ?? "text";
const valueProperty = props.valueProperty ?? "value";

const emit = defineEmits(["update:modelValue"]);

const alert = useAlert(props);
</script>