<template>
    <Disclosure as="nav" v-slot="{ open }">
        <div :class="getClasses()">
            <DisclosureButton :class="getMenuToggleClasses()">
                <span class="sr-only">Open main menu</span>
                <XIcon v-if="open" class="h-8 w-8" aria-hidden="true" />
                <MenuIcon v-else class="h-8 w-8" aria-hidden="true" />
            </DisclosureButton>
            <div :class="getStartClasses()">
                <slot name="start"></slot>
            </div>
            <div :class="getNavigationClasses()">
                <slot name="navigation"></slot>
            </div>
            <div :class="getEndClasses()">
                <slot name="end"></slot>
            </div>
        </div>
        <DisclosurePanel :class="getPanelMinimalClasses()">
            <div :class="getTopMinimalClasses()">
                <slot name="top-minimal"></slot>
            </div>
            <div :class="getNavigationMinimalClasses()">
                <slot name="navigation-minimal"></slot>
            </div>
            <div :class="getBottomMinimalClasses()">
                <slot name="bottom-minimal"></slot>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure, DisclosureButton, DisclosurePanel
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline"
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    svClass: {
        type: Object
    }
});

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
};

const getClasses = () => {
    return [
        useCoreClass("sv-navbar", getOptions(true)),
    ];
};

const getMenuToggleClasses = () => {
    return [
        useCoreClass("sv-navbar__menu-toggle", getOptions(true)),
    ];
};

const getStartClasses = () => {
    return [
        useCoreClass("sv-navbar__start", getOptions(true)),
    ];
};

const getNavigationClasses = () => {
    return [
        useCoreClass("sv-navbar__navigation", getOptions(true)),
    ];
};

const getEndClasses = () => {
    return [
        useCoreClass("sv-navbar__end", getOptions(true)),
    ];
};

const getPanelMinimalClasses = () => {
    return [
        useCoreClass("sv-navbar__panel-minimal", getOptions(true)),
    ];
};

const getTopMinimalClasses = () => {
    return [
        useCoreClass("sv-top-minimal", getOptions(true)),
    ];
};

const getNavigationMinimalClasses = () => {
    return [
        useCoreClass("sv-navbar__navigation-minimal", getOptions(true)),
    ];
};

const getBottomMinimalClasses = () => {
    return [
        useCoreClass("sv-navbar__bottom--minimal", getOptions(true)),
    ];
};
</script>