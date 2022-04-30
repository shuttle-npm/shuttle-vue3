<template>
    <div :class="getClasses()">
        <Menu as="div" v-for="item in items" :key="item.text" :class="getItemClasses()">
            <MenuButton v-if="!!item.items?.length" as="div" :class="getButtonClasses(item)">
                <div v-if="item.text" :class="getButtonTextClasses()">{{ item.text }}</div>
                <component :is="getButtonIcon(item)" :class="getButtonIconClasses()" />
            </MenuButton>
            <a v-if="!item.items?.length" @click="click(item, $event)" :class="getLinkClasses(item)">{{ item.text }}</a>
           <transition name="sv-navigation">
                <MenuItems :class="getDropdownClasses()">
                    <MenuItem v-for="subitem in item.items" :key="subitem.text" v-slot="{ active }" as="div">
                    <div v-if="getItemType(subitem) === 'divider'" :class="getDividerClasses(active)"></div>
                    <a v-else @click="click(subitem, $event)" :class="getLinkClasses(subitem, active)">{{ subitem.text }}</a>
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

const click = (item, event) => {
    if (item.disabled ?? false) {
        return;
    }

    if (!!item.click) {
        item.click(item);
    } else {
        emit("click", item);
    }
}

const props = defineProps({
    items: {
        type: Array,
        default: []
    },
    svClass: {
        type: Object
    },
    minimal: {
        type: Boolean,
        default: false
    },
    dropdownAlignment: {
        type: String,
        default: "left"
    }
});

const getButtonIcon = (item) => {
    return item.buttonIcon ? item.buttonIcon: ChevronDownIcon;
}

const getItemType = (item) => {
    return item.type ?? "item";
}

const getDropdownAlignment = () => {
    switch ((props.dropdownAlignment ?? "left").toLowerCase()) {
        case "right": {
            return "right";
        }
        default: {
            return "left";
        }
    }
}

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
};

const getClasses = () => {
    return [
        useCoreClass("sv-navigation", getOptions(true)),
        useCoreClass("sv-navigation--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation--normal", getOptions(!props.minimal)),
    ];
};

const getItemClasses = () => {
    return [
        useCoreClass("sv-navigation__item", getOptions(true)),
        useCoreClass("sv-navigation__item--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__item--normal", getOptions(!props.minimal)),
    ];
}

const getButtonClasses = (item) => {
    return [
        useCoreClass("sv-navigation__button", getOptions(true)),
        useCoreClass("sv-navigation__button--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__button--disabled", getOptions(item?.disabled ?? false)),
    ];
}

const getButtonTextClasses = () => {
    return [
        useCoreClass("sv-navigation__button-text", getOptions(true)),
        useCoreClass("sv-navigation__button-text--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button-text--normal", getOptions(!props.minimal)),
    ];
}

const getButtonIconClasses = () => {
    return [
        useCoreClass("sv-navigation__button-icon", getOptions(true)),
        useCoreClass("sv-navigation__button-icon--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__button-icon--normal", getOptions(!props.minimal)),
    ];
}

const getLinkClasses = (item, active) => {
    return [
        useCoreClass("sv-navigation__link", getOptions(true)),
        useCoreClass("sv-navigation__link--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__link--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__link--active", getOptions(active)),
        useCoreClass("sv-navigation__link--inactive", getOptions(!active)),
        useCoreClass("sv-navigation__link--disabled", getOptions(item?.disabled ?? false)),
    ];
}

const getDividerClasses = (active) => {
    return [
        useCoreClass("sv-navigation__divider", getOptions(true)),
    ];
}

const getDropdownClasses = () => {
    return [
        useCoreClass("sv-navigation__dropdown", getOptions(true)),
        useCoreClass("sv-navigation__dropdown--minimal", getOptions(props.minimal)),
        useCoreClass("sv-navigation__dropdown--normal", getOptions(!props.minimal)),
        useCoreClass("sv-navigation__dropdown--left", getOptions(getDropdownAlignment() == "left")),
        useCoreClass("sv-navigation__dropdown--right", getOptions(getDropdownAlignment() == "right")),
    ];
}
</script>    