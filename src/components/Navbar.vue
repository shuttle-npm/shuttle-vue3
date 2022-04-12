<template>
    <Disclosure as="nav" v-slot="{ open }">
        <div :class="getClasses()">
            <DisclosureButton :class="getMenuToggleClasses()">
                <span class="sr-only">Open main menu</span>
                <XIcon v-if="open" class="h-8 w-8" aria-hidden="true" />
                <MenuIcon v-else class="h-8 w-8" aria-hidden="true" />
            </DisclosureButton>
            <div :class="getSlotStartClasses()">
                <slot name="start"></slot>
            </div>
            <div :class="getNavigationClasses()">
                <Navigation :items="$props.items" @click="click" :sv-class="props.svClass" />
            </div>
            <div :class="getSlotEndClasses()">
                <slot name="end"></slot>
            </div>
        </div>
        <DisclosurePanel :class="getNavigationPanelClasses()">
            <Navigation :items="$props.items" :minimal="true" @click="click" :sv-class="props.svClass" />
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure, DisclosureButton, DisclosurePanel
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline"
import { useCoreClass } from "@/composables/useCoreClass";
import Navigation from "./Navigation.vue";

const emit = defineEmits(["click"]);

const click = (item) => {
    if (item.disabled ?? false) {
        return;
    }

    emit("click", item);
}

const props = defineProps({
    items: {
        type: Array,
        default: []
    },
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

const getSlotStartClasses = () => {
    return [
        useCoreClass("sv-navbar__slot-start", getOptions(true)),
    ];
};

const getSlotEndClasses = () => {
    return [
        useCoreClass("sv-navbar__slot-end", getOptions(true)),
    ];
};

const getNavigationClasses = () => {
    return [
        useCoreClass("sv-navbar__navigation", getOptions(true)),
    ];
};

const getNavigationPanelClasses = () => {
    return [
        useCoreClass("sv-navbar__navigation-panel", getOptions(true)),
    ];
};
</script>