<template>
    <div :class="getClasses()">
        <label v-if="!!props.label" class="sv-input-label">{{ props.label }}</label>
        <input
            type="text"
            :value="props.modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            :placeholder="props.placeholder ?? ''"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    layout: {
        type: String,
        default: "block"
    },
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    modelValue: {
        type: [String, Number, Date],
        default: ""
    }
})

const getLayout = () => {
    return (props.layout ?? "block").toLowerCase();
}

const getClasses = () => {
    return {
        "sv-input": true,
        "sv-input-inline": getLayout() === "inline",
        "sv-input-block": getLayout() === "block",
    };
}

const emit = defineEmits(["update:modelValue"]);
</script>