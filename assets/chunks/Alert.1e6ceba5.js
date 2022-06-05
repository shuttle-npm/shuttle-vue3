import { u as useCoreClass } from "./useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, e as ref, f as computed, p as watch, q as onMounted, b as createElementBlock, n as normalizeClass, j as resolveDynamicComponent, g as createBaseVNode, t as toDisplayString, u as unref, d as createCommentVNode } from "../app.b78d4ac8.js";
function render(_ctx, _cache) {
  return openBlock(), createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _hoisted_1 = ["stroke-dasharray"];
const _sfc_main = {
  props: {
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
    }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
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
      const result = rawTimeFraction - 1 / props.expirySeconds * (1 - rawTimeFraction);
      return result > 0 ? result : 0;
    });
    const resetTimerInterval = () => {
      if (timerInterval === 0) {
        return;
      }
      clearInterval(timerInterval);
      timerInterval = 0;
    };
    const onExpired = () => {
      resetTimerInterval();
      emitRemove();
    };
    const startCountdown = () => {
      timerInterval = setInterval(() => timePassed.value += 0.5, 500);
    };
    watch(timeLeft, (value) => {
      if (value > 0) {
        return;
      }
      onExpired();
    });
    watch(() => props.expirySeconds, (value) => {
      if (!value) {
        resetTimerInterval();
        return;
      }
      startCountdown();
    });
    onMounted(() => {
      if (props.expirySeconds > 0) {
        startCountdown();
      }
    });
    const emitRemove = () => {
      emit("remove", props.name);
    };
    const icon = () => {
      return props.icon ? props.icon : void 0;
    };
    const getOptions = () => {
      var _a;
      return {
        svClass: props.svClass,
        include: true,
        variant: (_a = props.variant) != null ? _a : "primary"
      };
    };
    const getBaseOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-alert", getOptions()),
        useCoreClass("sv-alert--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getDismissableClasses = () => {
      return [
        useCoreClass("sv-alert__dismissable", getOptions()),
        useCoreClass("sv-alert__dismissable--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__dismissable--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getTimerClasses = () => {
      return [
        useCoreClass("sv-alert__timer", getOptions()),
        useCoreClass("sv-alert__timer--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getTimerCircleClasses = () => {
      return [
        useCoreClass("sv-alert__timer-circle", getOptions()),
        useCoreClass("sv-alert__timer-circle--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-circle--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getTimerPathElapsedClasses = () => {
      return [
        useCoreClass("sv-alert__timer-path-elapsed", getOptions()),
        useCoreClass("sv-alert__timer-path-elapsed--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-path-elapsed--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getTimerPathRemainingClasses = () => {
      return [
        useCoreClass("sv-alert__timer-path-remaining", getOptions()),
        useCoreClass("sv-alert__timer-path-remaining--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__timer-path-remaining--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getIconClasses = () => {
      return [
        useCoreClass("sv-alert__icon", getOptions()),
        useCoreClass("sv-alert__icon--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__icon--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getCloseIconClasses = () => {
      return [
        useCoreClass("sv-alert__icon-close", getOptions()),
        useCoreClass("sv-alert__icon-close--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__icon-close--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__icon-close--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    const getMessageClasses = () => {
      return [
        useCoreClass("sv-alert__message", getOptions()),
        useCoreClass("sv-alert__message--outline", getBaseOptions(!!props.outline)),
        useCoreClass("sv-alert__message--sm", getBaseOptions(props.size === "sm")),
        useCoreClass("sv-alert__message--lg", getBaseOptions(props.size === "lg"))
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(icon()), {
          class: normalizeClass(getIconClasses())
        }, null, 8, ["class"])),
        createBaseVNode("div", {
          class: normalizeClass(getMessageClasses())
        }, toDisplayString(__props.message), 3),
        __props.dismissable ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(getDismissableClasses()),
          onClick: _cache[0] || (_cache[0] = ($event) => emitRemove())
        }, [
          createVNode(unref(render), {
            class: normalizeClass(getCloseIconClasses())
          }, null, 8, ["class"]),
          (openBlock(), createElementBlock("svg", {
            class: normalizeClass(getTimerClasses()),
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createBaseVNode("g", {
              class: normalizeClass(getTimerCircleClasses())
            }, [
              createBaseVNode("circle", {
                class: normalizeClass(getTimerPathElapsedClasses()),
                cx: "50",
                cy: "50",
                r: "45"
              }, null, 2),
              createBaseVNode("path", {
                "stroke-dasharray": unref(circleDasharray),
                class: normalizeClass(getTimerPathRemainingClasses()),
                stroke: "currentColor",
                d: "\r\n                    M 50, 50\r\n                    m -45, 0\r\n                    a 45,45 0 1,0 90,0\r\n                    a 45,45 0 1,0 -90,0\r\n                "
              }, null, 10, _hoisted_1)
            ], 2)
          ], 2))
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
export { _sfc_main as _ };
