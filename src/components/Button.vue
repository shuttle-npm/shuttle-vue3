<template>
    <div :class="useClass('sv-btn', props)" @click="click">
        {{props.content}}
        <slot></slot>
    </div>
</template>

<script setup>
import { useClass } from "@/composables/useClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    content: String,
    disabled: Boolean
})

const click = () => {
    if (props.disabled) {
        return;
    }

    emit("click");
}
</script>