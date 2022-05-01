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
                <tr v-for="(item, index) in items" :class="getBodyRowClasses()">
                    <td v-for="field in fields" :class="getItemClasses(field)">
                        <slot :name="getItemSlotName(field)" :field="field" :item="item" :index="index">
                            {{ formatValue(field, item[field.name]) }}
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
    fields: {
        type: Array,
        default: []
    },
    items: {
        type: Array,
        default: []
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
        typeof(field.formatter === 'function')) {
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

const getHeadRowClasses = (field) => {
    return [
        useCoreClass("sv-table__thead-tr", getOptions(true)),
    ];
}

const getFieldClasses = (field) => {
    return [
        useCoreClass("sv-table__th", getOptions(true)),
        useCoreClass("sv-table__th--sortable", getOptions(!!field.sortable)),
        !!field.thClass ? field.thClass : ""
    ];
}

const getFieldContainerClasses = (field) => {
    return [
        useCoreClass("sv-table__th-container", getOptions(true)),
        useCoreClass("sv-table__th-container--sortable", getOptions(!!field.sortable)),
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
        !!field.tdClass ? field.tdClass : ""
    ];
}

const getBodyRowClasses = () => {
    return [
        useCoreClass("sv-table__tbody-tr", getOptions(true)),
        useCoreClass("sv-table__tbody-tr--striped", getOptions(props.variant === "striped")),
    ];
}
</script>