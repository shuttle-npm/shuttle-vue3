<template>
    <TransitionRoot :show="!!props.isOpen">
        <div :class="getClasses()">
            <TransitionChild enter="sv-dialog__overlay-enter-active" enter-from="sv-dialog__overlay-enter-from"
                enter-to="sv-dialog__overlay-enter-to" leave="sv-dialog__overlay-leave-active" leave-from="sv-dialog__overlay-leave-from"
                leave-to="sv-dialog__overlay-leave-to">
                <div :class="getOverlayClasses()" @click="props.setIsOpen?.(false)" />
            </TransitionChild>

            <TransitionChild enter="sv-dialog-enter-active" enter-from="sv-dialog-enter-from"
                enter-to="sv-dialog-enter-to" leave="sv-dialog-leave-active" leave-from="sv-dialog-leave-from"
                leave-to="sv-dialog-leave-to">
                <div :class="getContainerClasses()">
                    <div v-if="!!props.title" :class="getTitleClasses()">{{ props.title }}</div>
                    <div v-if="!!props.message" :class="getMessageClasses()">{{ props.message }}</div>
                    <slot></slot>
                </div>
            </TransitionChild>
        </div>
    </TransitionRoot>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";
import { TransitionRoot, TransitionChild } from "@headlessui/vue";

const props = defineProps({
    message: {
        type: String
    },
    isOpen: {
        type: Boolean,
        default: false
    },
    setIsOpen: {
        type: Function,
    },
    svClass: {
        type: Object
    },
    title: {
        type: String
    },
})

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include,
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-dialog", getOptions(true)),
    ];
}

const getTitleClasses = () => {
    return [
        useCoreClass("sv-dialog__title", getOptions(true)),
    ];
}

const getMessageClasses = () => {
    return [
        useCoreClass("sv-dialog__message", getOptions(true)),
    ];
}

const getOverlayClasses = () => {
    return [
        useCoreClass("sv-dialog__overlay", getOptions(true)),
    ];
}

const getContainerClasses = () => {
    return [
        useCoreClass("sv-dialog__container", getOptions(true)),
    ];
}
</script>