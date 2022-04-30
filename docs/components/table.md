<script setup>
import { ref } from "vue";
import { Button, ButtonGroup, Table } from "@/components";

const fields = [
    {
        name: "row",
        text: "#"
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

const svClass= { 
    'sv-table': 'vt-doc-ignore',
    'sv-table__thead-tr': 'vt-doc-ignore', 
    'sv-table__th': 'vt-doc-ignore', 'sv-table__tr-td': 'vt-doc-ignore', 
    'sv-table__tbody-tr': 'vt-doc-ignore', 
    'sv-table__td': 'vt-doc-ignore' 
};
</script>

# Table

## Examples

<ButtonGroup v-model="variant" :buttons="buttons" class="mb-4" />

<Table :fields="fields" :items="items" :variant="variant" :sv-class="svClass"><template #item(row)="data">{{data.index}}</template><template v-slot:item(custom)="data"><Button variant="danger" size="xs">Remove</Button></template></Table>

```vue
<script setup>
const fields = [
    {
        name: "row",
        text: "#"
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
    </Table>
</template>
```

## Properties

| Name       | Type     | Default | Description                                                                                                         |
| ---------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| `fields`   | `Array`  | `[]`    | The fields (columns) that should render.                                                                            |
| `items`    | `Array`  | `[]`    | The items that contains the data for each row.  The `fields` would contain the property name of the item to render. |
| `sv-class` | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.  |
| `variant`  | `String` | `""`    | A variant that should be applied to the table:<br/>- `striped`                                                      |

## Slots

Each field has a slot named `field({field.name})` with the following props:

- `field`

Items have a slot named `item({field.name})` with the following props:

- `field`
- `item`
- `index`

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