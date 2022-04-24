<script setup>
import { Alert, Navigation, Toggle } from "@/components";
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

const message = ref("You can click a navigation item to change this message.");
const minimal = ref(false);

const click = (item) => {
    message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
}
</script>

# Navigation

A `Navigation` component is essentially a menu.  The items displayed depend mainly on the `text` property and the `buttonIcon` to render.  A `button` item is container for the sub-menu so it would contain an `items` property.  An `item` may also have a `click` function that will be invoked is available.

::: info
It is important to note that the `Navigation` component does not perform any routing; instead the `click` method is invoked and it would be the responsibility of the application to perform the routing using their router of choice.
:::

## Example

<Alert type="info" :message="message" class="mb-4" />

<Toggle v-model="minimal" label="Minimal?" :sv-class="{ 'sv-toggle': 'mb-2' }" />

<div class="sv-border border-gray-400">
<Navigation :items="items" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }" @click="click" :minimal="minimal" />
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
</script>

<template>
    <Navigation :items="items" @click="click" />
</template>
```

## Properties

| Name       | Type      | Default | Description                                                                                                                                                     |
| ---------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`    | `Array`   | `[]`    | The items that should be rendered in the navigation menu,                                                                                                       |
| `minimal`  | `Boolean` | `false` | If `true` the navigation menu has the `--minimal` class modifiers applied.  This is typically applied when the screen size is small, such as on mobile devices. |
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

- `sv-navigation`
  - `--normal`
  - `--minimal`

- `sv-navigation__item`
  - `--normal`
  - `--minimal`

- `sv-navigation__button`
  - `--normal`
  - `--minimal`
  - `--disabled`

- `sv-navigation__button-text` 
  - `--normal`
  - `--minimal`

- `sv-navigation__button-icon`
  - `--normal`
  - `--minimal`

- `sv-navigation__link`
  - `--normal`
  - `--minimal`
  - `--disabled`
  - `--active`
  - `--inactive`

- `sv-navigation__divider`

- `sv-navigation__dropdown` 
  - `--normal`
  - `--minimal`
