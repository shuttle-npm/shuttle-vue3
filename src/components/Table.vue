<template>
    <div :class="getContainerClasses()">
        <table :class="getClasses()">
            <thead :class="getHeadClasses()">
                <tr :class="getHeadRowClasses()">
                    <th v-for="field in fields" :class="getFieldClasses(field)" @click="fieldClick(field)">
                        <div :class="getFieldContainerClasses(field)">
                            <slot :name="getFieldSlotName(field)" :field="field">
                                {{ field.text }}
                                <component :is="getSortOrderIcon(field)" :class="getSortOrderIconClasses()" />
                            </slot>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody :class="getBodyClasses()">
                <tr v-if="!props.busy && !!items.length" v-for="(item, index) in items" :class="getBodyRowClasses()">
                    <td v-for="field in fields" :class="getItemClasses(field)">
                        <div :class="getInlineFieldClasses(field)">
                            {{field.text}}
                        </div>
                        <slot :name="getItemSlotName(field)" :field="field" :item="item" :index="index">
                            {{ formatValue(field, item[field.name]) }}
                        </slot>
                    </td>
                </tr>
                <tr v-if="!props.busy && !items.length" :class="getBodyRowClasses()">
                    <td :colspan="fields.length" :class="getItemClasses()">
                        <slot name="empty">
                        </slot>
                    </td>
                </tr>
                <tr v-if="props.busy" :class="getBodyRowClasses()">
                    <td :colspan="fields.length" :class="getItemClasses()">
                        <slot name="busy">
                        </slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useCoreClass } from "@/composables/useCoreClass";
import { SortAscendingIcon, SortDescendingIcon, EyeIcon } from "@heroicons/vue/outline";
import { ref, computed } from "vue";

const props = defineProps({
    busy: {
        type: Boolean,
        default: false
    },
    fields: {
        type: Array,
        default: []
    },
    items: {
        type: Array,
        default: []
    },
    striped: {
        type: Boolean,
        default: false
    },
    svClass: {
        type: Object
    },
    variant: {
        type: String
    }
})

const sortedFieldName = ref("");
const sortOrder = ref("");

const fieldClick = (field) => {
    if (field.sortable) {
        if (sortedFieldName.value === field.name) {
            sortOrder.value = sortOrder.value === "ascending" ? "descending" : "ascending";
        } else {
            sortedFieldName.value = field.name;
            sortOrder.value = "ascending";
        }
    }
}

const formatValue = (field, value) => {
    if (!!field.formatter &&
        typeof (field.formatter === 'function')) {
        return field.formatter(value);
    }

    return value;
}

const items = computed(() => {
    const result = props.items;
    const multiplier = sortOrder.value === "ascending" ? 1 : -1;
    const fieldName = sortedFieldName.value;

    if (fieldName !== "") {
        result.sort((a, b) => {
            return (a[fieldName] > b[fieldName] ? 1 : -1) * multiplier;
        });
    }

    return result;
});

const getSortOrderIcon = (field) => {
    if (sortedFieldName.value !== field.name) {
        return;
    }

    return sortOrder.value === "ascending"
        ? SortAscendingIcon
        : SortDescendingIcon;
}

const getFieldSlotName = (field) => {
    return `field(${field.name})`;
}

const getItemSlotName = (field) => {
    return `item(${field.name})`;
}

const getOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include,
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-table", getOptions(true)),
    ];
}

const getContainerClasses = () => {
    return [
        useCoreClass("sv-table__container", getOptions(true)),
    ];
}

const getHeadClasses = () => {
    return [
        useCoreClass("sv-table__thead", getOptions(true)),
    ];
}

const getHeadRowClasses = () => {
    return [
        useCoreClass("sv-table__thead-tr", getOptions(true)),
        useCoreClass("sv-table__thead-tr--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__thead-tr--empty", getOptions(!items.length)),
    ];
}

const getFieldClasses = (field) => {
    return [
        useCoreClass("sv-table__th", getOptions(true)),
        useCoreClass("sv-table__th--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__th--empty", getOptions(!items.length)),
        !!field.thClass ? field.thClass : ""
    ];
}

const getInlineFieldClasses = (field) => {
    return [
        useCoreClass("sv-table__th-inline", getOptions(true)),
        useCoreClass("sv-table__th-inline--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th-inline--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__th-inline--empty", getOptions(!items.length)),
        !!field.thClass ? field.thClass : ""
    ];
}

const getFieldContainerClasses = (field) => {
    return [
        useCoreClass("sv-table__th-container", getOptions(true)),
        useCoreClass("sv-table__th-container--sortable", getOptions(!!field.sortable)),
        useCoreClass("sv-table__th-container--reverse", getOptions(!!field.reverse)),
    ];
}

const getSortOrderIconClasses = (field) => {
    return [
        useCoreClass("sv-table__th-sort-order-icon", getOptions(true)),
    ];
}

const getBodyClasses = () => {
    return [
        useCoreClass("sv-table__tbody", getOptions(true)),
    ];
}

const getItemClasses = (field) => {
    return [
        useCoreClass("sv-table__td", getOptions(true)),
        useCoreClass("sv-table__td--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__td--empty", getOptions(!items.length)),
        !!field?.tdClass ? field.tdClass : ""
    ];
}

const getBodyRowClasses = () => {
    return [
        useCoreClass("sv-table__tbody-tr", getOptions(true)),
        useCoreClass("sv-table__tbody-tr--busy", getOptions(!!props.busy)),
        useCoreClass("sv-table__tbody-tr--empty", getOptions(!items.length)),
        useCoreClass("sv-table__tbody-tr--striped", getOptions(props.striped)),
    ];
}
</script>