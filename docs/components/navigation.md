<script setup>
import { Alert, Checkbox, Navigation } from "@/components";
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

const click = (item) => {
    message.value = `You clicked the "${item.text}" item that routes to "${item.to}".`;
}
</script>

# Navigation

## Example

<Alert type="info" :message="message" class="mb-4" />

<Navigation :items="items" :sv-class="{ 'sv-navigation__link': 'vt-doc-ignore' }" @click="click" />

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

<Navigation :items="items" @click="click" />
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
