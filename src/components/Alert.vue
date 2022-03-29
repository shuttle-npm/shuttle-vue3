<template>
    <div :class="useClass('sv-alert', props)">
        <component :is="icon()" class="icon" />
        <div class="message">{{ message }}</div>
        <XCircleIcon v-if="dismissable" class="icon icon-close" v-on:click="emit('remove', alert)" />
    </div>
</template>

<script setup>
import { useClass } from "@/composables/useClass";
import { XCircleIcon } from "@heroicons/vue/outline";

const props = defineProps({
    name: String,
    type: String,
    message: String,
    dismissable: Boolean,
    icon: null
})

const emit = defineEmits(["remove"]);

const icon = () => {
    return props.icon ? props.icon: undefined;
}
</script>