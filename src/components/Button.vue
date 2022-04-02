<template>
    <div :class="useClass('sv-button', props)" @click="click" tabindex="0">
        <component :is="icon()" class="icon" />
        {{props.content}}
        <slot></slot>
    </div>
</template>

<script setup>
import { useClass } from "@/composables/useClass";

const emit = defineEmits(["click"]);

const props = defineProps({
    content: String,
    type: String,
    disabled: Boolean,
    icon: null
})

const click = () => {
    if (props.disabled) {
        return;
    }

    emit("click");
}

const icon = () => {
    return props.icon ? props.icon: undefined;
}
</script>