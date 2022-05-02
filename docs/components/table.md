<script setup>
import { computed, ref } from "vue";
import { Button, ButtonGroup, Checkbox, Table } from "@/components";

const fields = [
    {
        name: "row",
        text: "#",
        thClass: "border-solid border-0 border-r border-gray-500 w-1",
        tdClass: "border-solid border-0 border-r border-gray-500"
    },
    {
        name: "name",
        text: "Name",
        sortable: true
    },
    {
        name: "custom",
        text: "Custom"
    },
];

const items = [
    {
        name: "Name-A"
    },
    {
        name: "Name-B"
    },
    {
        name: "Name-C"
    },
    {
        name: "Name-D"
    },
    {
        name: "Name-E"
    },
]

const variant = ref("");

const buttons = ref([
    {
        text: "none",
        value: ""
    },
    {
        text: "striped",
        value: "striped"
    },
]);

const svClass = { 
    'sv-table': 'vt-doc-ignore',
    'sv-table__thead-tr': 'vt-doc-ignore', 
    'sv-table__th': 'vt-doc-ignore', 'sv-table__tr-td': 'vt-doc-ignore', 
    'sv-table__tbody-tr': 'vt-doc-ignore', 
    'sv-table__td': 'vt-doc-ignore' 
};

const busy = ref(false);
const empty = ref(false);

const getItems = computed(() => {
    return empty.value ? [] : items;
})
</script>

# Table

## Examples

<ButtonGroup v-model="variant" :buttons="buttons" class="mb-4" />

<Checkbox v-model="busy" label="Busy?" class="mb-2" />
<Checkbox v-model="empty" label="Empty?" class="mb-4" />

<Table :fields="fields" :items="getItems" :variant="variant" :sv-class="svClass" :busy="busy"><template #item(row)="data">{{data.index}}</template><template v-slot:item(custom)="data"><Button variant="danger" size="xs">Remove</Button></template><template #empty><div class="p-6 text-center">(no results)</div></template><template #busy><div class="p-4"><svg role="status" class="w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg></div></template></Table>

```vue
<script setup>
const fields = [
    {
        name: "row",
        text: "#",
        thClass: "border-solid border-0 border-r border-gray-500 w-1",
        tdClass: "border-solid border-0 border-r border-gray-500"
    },
    {
        name: "name",
        text: "Name",
        sortable: true
    },
    {
        name: "custom",
        text: "Custom"
    },
];

const items = [
    {
        name: "Name-A"
    },
    {
        name: "Name-B"
    },
    {
        name: "Name-C"
    },
    {
        name: "Name-D"
    },
    {
        name: "Name-E"
    },
]
</script>

<template>
    <Table :fields="fields" :items="items" :variant="variant">
        <template #item(row)="data">
            {{data.index}}
        </template>
        <template v-slot:item(custom)="data">
            <Button variant="danger" size="xs">Remove</Button>
        </template>
        <template #empty>
            <div class="p-6 text-center">
                (no results)
            </div>
        </template>
        <template #busy>
            <div class="p-4">
                <svg role="status" class="w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
            </div>
        </template>
    </Table>
</template>
```

## Properties

| Name       | Type      | Default | Description                                                                                                         |
| ---------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `busy`     | `Boolean` | `false` | Indicates that results are being retrieved and renders the `busy` slot.                                             |
| `fields`   | `Array`   | `[]`    | The fields (columns) that should render.                                                                            |
| `items`    | `Array`   | `[]`    | The items that contains the data for each row.  The `fields` would contain the property name of the item to render. |
| `sv-class` | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.  |
| `variant`  | `String`  | `""`    | A variant that should be applied to the table:<br/>- `striped`                                                      |

## Slots

Each field has a slot named `field({field.name})` with the following props:

- `field`

Items have a slot named `item({field.name})` with the following props:

- `field`
- `item`
- `index`

There is also a slot when there are no items called `empty` and another called `busy` which is rendered when the `busy` prop is `true`.

## Fields

A field should have the following structure:

| Name       | Type      | Default    | Description                                                                                |
| ---------- | --------- | ---------- | ------------------------------------------------------------------------------------------ |
| `name`     | `String`  | *required* | The name of the field which is also the property of the `item` when rendered by the table. |
| `text`     | `String`  | `""`       | The text to display for the column header.                                                 |
| `sortable` | `Boolean` | `false`    | Indicates that the data in the table may be sorted by clicking on the column header.       |

## Classes

- `sv-table`
- `sv-table__container`
- `sv-table__thead`
- `sv-table__thead-tr`
- `sv-table__th`
- `sv-table__th-sort-order-icon`
- `sv-table__tbody`
- `sv-table__td`
- `sv-table__tbody-tr`
  - `sv-table__tbody-tr--striped`