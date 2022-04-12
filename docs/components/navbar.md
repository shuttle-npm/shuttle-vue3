<script setup>
import { VTIconShuttle } from 'shuttle-theme'
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

const click = (item) => {
    message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
}
</script>

# Navbar

A `Navbar` contains a `start` and `end` slot (typically left and right, respectively) around a `Navigation` component.

## Example

<Alert type="info" :message="message" class="mb-4" />

<div class="sv-border border-gray-400">
<Navbar :items="items" :sv-class="{ 'sv-navbar': 'px-2', 'sv-navigation__link': 'vt-doc-ignore' }" @click="click">
    <template #start>
        <div class="flex flex-row items-center mr-2">
            <VTIconShuttle class="h-10 w-10" />
            <div class="font-bold text-orange-500 mt-[2px]">Shuttle</div>
        </div>
    </template>
    <template #end>
        <Navigation :items="profileItems" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }" dropdown-alignment="right" />
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
        <template #end>
            <Navigation :items="profileItems" dropdown-alignment="right" />
        </template>
    </Navbar>
<template>
```

## Properties

| Name       | Type      | Default | Description                                                                                                                                                     |
| ---------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`    | `Array`   | `[]`    | The items that should be rendered in the navigation menu,                                                                                                       |
| `sv-class` | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.                                              |

### Items

The items represent a menu that is one level deep:

```js
[
    {
        text: "some text",
        to: "represents a route"
        disabled: true|false // defaults to false
    }, // or
    {
        text: "some text",
        items: [
            {
                text: "some text",
                to: "represents a route"
                disabled: true|false // defaults to false
            }
            {
                type: "divider|item",
            }
        ]
    }
]
```

## Classes

- `sv-navbar`
- `sv-navbar__menu-toggle`
- `sv-navbar__slot-start`
- `sv-navbar__slot-end`
- `sv-navbar__navigation`
- `sv-navbar__navigation-panel`