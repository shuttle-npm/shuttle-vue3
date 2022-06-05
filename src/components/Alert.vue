<template>
    <div :class="getClasses()">
        <component :is="icon()" :class="getIconClasses()" />
        <div :class="getMessageClasses()">{{ message }}</div>
        <div v-if="dismissable" :class="getDismissableClasses()" v-on:click="emitRemove()">
            <XCircleIcon :class="getCloseIconClasses()" />
            <svg :class="getTimerClasses()" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g :class="getTimerCircleClasses()">
                    <circle :class="getTimerPathElapsedClasses()" cx="50" cy="50" r="45"></circle>
                    <path :stroke-dasharray="circleDasharray" :class="getTimerPathRemainingClasses()" stroke="currentColor"
                        d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                "></path>
                </g>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { XCircleIcon } from "@heroicons/vue/outline";
import { useCoreClass } from "@/composables/useCoreClass";

const timePassed = ref(0);
let timerInterval;

const circleDasharray = computed(() => {
    return `${(timeFraction.value * 283).toFixed(0)} 283`;
});

const timeLeft = computed(() => {
    return props.expirySeconds - timePassed.value;
});

const timeFraction = computed(() => {
    const rawTimeFraction = timeLeft.value / props.expirySeconds;
    const result = rawTimeFraction - (1 / props.expirySeconds) * (1 - rawTimeFraction);

    return result > 0 ? result : 0;
})

const resetTimerInterval = () => {
    if (timerInterval === 0) {
        return;
    }

    clearInterval(timerInterval);
    timerInterval = 0;
}

const onExpired = () => {
    resetTimerInterval()

    emitRemove();
};

const startCountdown = () => {
    timerInterval = setInterval(() => (timePassed.value += .5), 500);
}

watch(timeLeft, (value) => {
    if (value > 0) {
        return;
    }

    onExpired();
});

watch(() => props.expirySeconds, (value) => {
    if (!value) {
        resetTimerInterval()
        return;
    }

    startCountdown();
})

onMounted(() => {
    if (props.expirySeconds > 0) {
        startCountdown();
    }
})

const props = defineProps({
    name: {
        type: String
    },
    variant: {
        type: String
    },
    message: {
        type: String
    },
    dismissable: {
        type: Boolean
    },
    expirySeconds: {
        type: Number
    },
    icon: {
        type: null
    },
    outline: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: ""
    },
    svClass: {
        type: Object
    },
})

const emit = defineEmits(["remove"]);

const emitRemove = () => {
    emit('remove', props.name);
}

const icon = () => {
    return props.icon ? props.icon : undefined;
}

const getOptions = () => {
    return {
        svClass: props.svClass,
        include: true,
        variant: props.variant ?? "primary"
    };
}

const getBaseOptions = (include) => {
    return {
        svClass: props.svClass,
        include: include
    };
}

const getClasses = () => {
    return [
        useCoreClass("sv-alert", getOptions()),
        useCoreClass("sv-alert--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getDismissableClasses = () => {
    return [
        useCoreClass("sv-alert__dismissable", getOptions()),
        useCoreClass("sv-alert__dismissable--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__dismissable--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getTimerClasses = () => {
    return [
        useCoreClass("sv-alert__timer", getOptions()),
        useCoreClass("sv-alert__timer--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getTimerCircleClasses = () => {
    return [
        useCoreClass("sv-alert__timer-circle", getOptions()),
        useCoreClass("sv-alert__timer-circle--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-circle--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getTimerPathElapsedClasses = () => {
    return [
        useCoreClass("sv-alert__timer-path-elapsed", getOptions()),
        useCoreClass("sv-alert__timer-path-elapsed--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-path-elapsed--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getTimerPathRemainingClasses = () => {
    return [
        useCoreClass("sv-alert__timer-path-remaining", getOptions()),
        useCoreClass("sv-alert__timer-path-remaining--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-path-remaining--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon", getOptions()),
        useCoreClass("sv-alert__icon--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__icon--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getCloseIconClasses = () => {
    return [
        useCoreClass("sv-alert__icon-close", getOptions()),
        useCoreClass("sv-alert__icon-close--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__icon-close--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon-close--lg", getBaseOptions(props.size === "lg")),
    ];
}

const getMessageClasses = () => {
    return [
        useCoreClass("sv-alert__message", getOptions()),
        useCoreClass("sv-alert__message--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__message--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__message--lg", getBaseOptions(props.size === "lg")),
    ];
}
</script>
