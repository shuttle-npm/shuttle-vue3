<template>
    <div :class="getClasses()">
        <Menu as="div" v-for="item in items" :key="item.text" :class="getItemClasses()">
            <MenuButton v-if="!!item.items?.length" as="div" :class="getButtonClasses(item)">
                <div :class="getButtonTextClasses()">{{ item.text }}</div>
                <ChevronDownIcon :class="getButtonIconClasses()" />
            </MenuButton>
            <a v-if="!item.items?.length" @click="click(item)" :class="getLinkClasses(item)">{{ item.text }}</a>
            <transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems :class="getDropdownClasses()">
                    <MenuItem
                        v-for="subitem in item.items"
                        :key="subitem.text"
                        v-slot="{ active }"
                        as="div"
                    >
                        <div v-if="getItemType(subitem) === 'divider'" :class="getDividerClasses(active)"></div>
                        <a v-else @click="click(subitem)" :class="getLinkClasses(subitem, active)">{{ subitem.text }}</a>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";
import { useCoreClass } from "@/composables/useCoreClass";

const emit = defineEmits(["click"]);

const click = (item) => {
    if (item.disabled ?? false) {
        return;
    }

    emit("click", item);
}

const props = defineProps({
    items: {
        type: Array
    },
    svClass: {
        type: Object
    },
    minimal: {
        type: Boolean,
        default: false
    }
});

const getItemType = (item) => {
    return item.type ?? "item";
}

const minimal = props.minimal ?? false;
const normal = !minimal;

const getClasses = () => {
    return [
        useCoreClass("sv-navigation", props.svClass, true),
        useCoreClass("sv-navigation--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation--normal", props.svClass, normal),
    ];
}

const getItemClasses = () => {
    return [
        useCoreClass("sv-navigation__item", props.svClass, true),
        useCoreClass("sv-navigation__item--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__item--normal", props.svClass, normal),
    ];
}

const getButtonClasses = (item) => {
    return [
        useCoreClass("sv-navigation__button", props.svClass, true),
        useCoreClass("sv-navigation__button--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__button--normal", props.svClass, normal),
        useCoreClass("sv-navigation__button--disabled", props.svClass, item?.disabled ?? false),
    ];
}

const getButtonTextClasses = () => {
    return [
        useCoreClass("sv-navigation__button-text", props.svClass, true),
        useCoreClass("sv-navigation__button-text--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__button-text--normal", props.svClass, normal),
    ];
}

const getButtonIconClasses = () => {
    return [
        useCoreClass("sv-navigation__button-icon", props.svClass, true),
        useCoreClass("sv-navigation__button-icon--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__button-icon--normal", props.svClass, normal),
    ];
}

const getLinkClasses = (item, active) => {
    return [
        useCoreClass("sv-navigation__link", props.svClass, true),
        useCoreClass("sv-navigation__link--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__link--normal", props.svClass, normal),
        useCoreClass("sv-navigation__link--active", props.svClass, active),
        useCoreClass("sv-navigation__link--inactive", props.svClass, !active),
        useCoreClass("sv-navigation__link--disabled", props.svClass, item?.disabled ?? false),
    ];
}

const getDividerClasses = (active) => {
    return [
        useCoreClass("sv-navigation__divider", props.svClass, true),
    ];
}

const getDropdownClasses = () => {
    return [
        useCoreClass("sv-navigation__dropdown", props.svClass, true),
        useCoreClass("sv-navigation__dropdown--minimal", props.svClass, minimal),
        useCoreClass("sv-navigation__dropdown--normal", props.svClass, normal),
    ];
}
</script>    