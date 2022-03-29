<template>
    <div :class="useClass('sv-alert', props)">
        <BeakerIcon class="icon"/>
        <div class="message">
            {{ message }}
        </div>
        <XCircleIcon class="icon-close" v-on:click="emit('remove', alert)" />
    </div>
</template>

<script setup>
import { useClass } from "@/composables/useClass";
import { BeakerIcon, XCircleIcon } from '@heroicons/vue/outline'

const props = defineProps({
    name: String,
    type: String,
    message: String,
    classes: [String, Object]
})

const emit = defineEmits(["remove"]);
</script>