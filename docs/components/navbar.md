<script setup>
import { VTIconShuttle } from "shuttle-theme";
import IconGitHub from "/@theme/components/IconGitHub.vue";
import { Alert, Navbar, Navigation, Toggle } from "@/components";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { UserIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import { ref } from "vue";

const items = ref([
    {
        text: "Home",
        to: "/home"
    },
    {
        text: "Link",
        to: "/some-link"
    },
    {
        text: "Dropdown",
        items: [
            {
                text: "Action",
                to: "/action"
            },
            {
                text: "Another action",
                to: "/another-action"
            },
            {
                type: "divider"
            },
            {
                text: "Also disabled",
                disabled: true
            },
            {
                type: "divider"
            },
            {
                text: "Something else",
                to: "/something-else"
            }
        ]
    },
    {
        text: "Disabled",
        disabled: true
    }
]);

const profileItems = ref([
    {
        buttonIcon: UserIcon,
        items: [
            {
                text: "Profile",
                to: "/profile"
            },
            {
                type: "divider"
            },
            {
                text: "Logout",
                click: () => {
                    message.value = "We should invoke the logout functionality here.";
                }
            }
        ]
    }
]);

const message = ref("You can click a navigation item to change this message.");
const minimal = ref(false);
const showMenuToggle = ref(true);

const click = (item) => {
    message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
}
</script>

# Navbar

## Example

<Alert type="info" :message="message" class="mb-4" />
<Toggle v-model="showMenuToggle" label="Show menu toggle (minimal)?" :sv-class="{ 'sv-toggle': 'mb-4' }" />

<div class="sv-border border-gray-400">
<Navbar :items="items" :sv-class="{ 'sv-navbar': 'px-2', 'sv-navigation__link': 'vt-doc-ignore' }" :show-menu-toggle="showMenuToggle">
    <template #start>
        <div class="flex flex-row items-center mr-2">
            <VTIconShuttle class="h-10 w-10" />
            <div class="font-bold text-orange-500 mt-[2px]">Shuttle</div>
        </div>
    </template>
    <template #navigation>
        <Navigation :items="items" @click="click" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }"/>
    </template>
    <template #end>
        <div class="flex flex-row items-center">
            <div class="hidden sm:block">
                <Navigation :items="profileItems" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }" dropdown-alignment="right" @click="click" />
            </div>
            <IconGitHub class="h-5 w-5 fill-gray-500 mx-2 cursor-pointer" />
        </div>
    </template>
    <template #navigation-minimal>
        <Navigation :minimal="true" :items="items" @click="click" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }"/>
    </template>
    <template #bottom-minimal>
        <Navigation :minimal="true" :items="profileItems" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }" dropdown-alignment="right" @click="click" />
    </template>
</Navbar>
</div>

```vue
<script setup>
import { ref } from "vue";

const items = ref([
    {
        text: "Home",
        to: "/home"
    },
    {
        text: "Link",
        to: "/some-link"
    },
    {
        text: "Dropdown",
        items: [
            {
                text: "Action",
                to: "/action"
            },
            {
                text: "Another action",
                to: "/another-action"
            },
            {
                type: "divider"
            },
            {
                text: "Also disabled",
                disabled: true
            },
            {
                type: "divider"
            },
            {
                text: "Something else",
                to: "/something-else"
            }
        ]
    },
    {
        text: "Disabled",
        disabled: true
    }
]);

const profileItems = ref([
    {
        buttonIcon: UserIcon,
        items: [
            {
                text: "Profile",
                to: "/profile"
            },
            {
                type: "divider"
            },
            {
                text: "Logout",
                click: () => {
                    // ...
                }
            }
        ]
    }
]);
</script>

<template>
    <Navbar :items="items" @click="click">
        <template #start>
            <div class="flex flex-row items-center mr-2">
                <VTIconShuttle class="h-10 w-10" />
                <div class="font-bold text-orange-500 mt-[2px]">Shuttle</div>
            </div>
        </template>
        <template #navigation>
            <Navigation :items="items" @click="click" />
        </template>
        <template #end>
            <div class="flex flex-row items-center">
                <div class="hidden sm:block">
                    <Navigation :items="profileItems" dropdown-alignment="right" @click="click" />
                </div>
                <IconGitHub class="h-5 w-5 fill-gray-500 mx-2 cursor-pointer" />
            </div>
        </template>
        <template #navigation-minimal>
            <Navigation :minimal="true" :items="items" @click="click" />
        </template>
        <template #bottom-minimal>
            <Navigation :minimal="true" :items="profileItems" @click="click" />
        </template>
    </Navbar>
<template>
```

## Properties

| Name               | Type      | Default | Description                                                                                                        |
| ------------------ | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `show-menu-toggle` | `Boolean` | `true`  | The items that should be rendered in the navigation menu,                                                          |
| `sv-class`         | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-navbar`
- `sv-navbar__menu-toggle`
- `sv-navbar__start`
- `sv-navbar__navigation`
- `sv-navbar__end`
- `sv-navbar__panel-minimal`
- `sv-navbar__top-minimal`
- `sv-navbar__navigation-minimal`
- `sv-navbar__bottom-minimal`