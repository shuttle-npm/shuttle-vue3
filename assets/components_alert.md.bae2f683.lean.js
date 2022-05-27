var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { _ as _sfc_main$2 } from "./chunks/Alert.5cbcd09d.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, F as Fragment, r as renderList, n as normalizeClass, d as createCommentVNode, m as mergeProps, e as ref, f as computed, u as unref, w as withCtx, g as createBaseVNode, h as createTextVNode, i as createStaticVNode } from "./app.64078bd2.js";
import { _ as _sfc_main$5 } from "./chunks/Button.fe46f02d.js";
import { _ as _sfc_main$3 } from "./chunks/ButtonGroup.71c94146.js";
import { _ as _sfc_main$4 } from "./chunks/Checkbox.413098e0.js";
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
      d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    })
  ]);
}
const _sfc_main$1 = {
  props: {
    alerts: {
      type: Array
    },
    svClass: {
      type: Object
    }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const getClasses = () => {
      return [
        useCoreClass("sv-alerts", {
          svClass: props.svClass,
          include: true
        })
      ];
    };
    return (_ctx, _cache) => {
      return __props.alerts ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(getClasses())
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.alerts, (alert) => {
          return openBlock(), createBlock(_sfc_main$2, mergeProps(alert, {
            onRemove: ($event) => emit("remove", alert),
            "sv-class": props.svClass
          }), null, 16, ["onRemove", "sv-class"]);
        }), 256))
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "alert",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Alert "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#alert",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "examples-dismissable",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Examples (dismissable) "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#examples-dismissable",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Reset");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 9);
const __pageData = '{"title":"Alert","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples (dismissable)","slug":"examples-dismissable"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"},{"level":2,"title":"Container","slug":"container"}],"relativePath":"components/alert.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const outline = ref(false);
    const icon = ref(false);
    const size = ref("");
    const buttons = ref([
      {
        text: "none",
        value: ""
      },
      {
        text: "small",
        value: "sm"
      },
      {
        text: "large",
        value: "lg"
      }
    ]);
    const alertsReference = [
      {
        name: "Primary",
        message: "A simple primary alert.",
        variant: "primary",
        dismissable: true
      },
      {
        name: "Secondary",
        message: "A simple secondary alert.",
        variant: "secondary",
        dismissable: true
      },
      {
        name: "Success",
        message: "A simple success alert.",
        variant: "success",
        dismissable: true
      },
      {
        name: "Danger",
        message: "A simple danger alert.",
        variant: "danger",
        dismissable: true
      },
      {
        name: "Warning",
        message: "A simple warning alert.",
        variant: "warning",
        dismissable: true
      },
      {
        name: "Information",
        message: "A simple info alert.",
        variant: "info",
        dismissable: true
      }
    ];
    const alerts = ref([]);
    const remove = (alert) => {
      const index = alerts.value.findIndex((item) => item.name === alert.name);
      if (index < 0) {
        return;
      }
      alerts.value.splice(index, 1);
    };
    const getIcon = () => {
      return icon.value ? render : void 0;
    };
    const computedAlerts = computed(() => {
      return alerts.value.map((item) => __spreadProps(__spreadValues({}, item), { outline: outline.value, size: size.value, icon: getIcon() }));
    });
    const reset = () => {
      alerts.value = [...alertsReference];
    };
    reset();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$3), {
          modelValue: size.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => size.value = $event),
          buttons: buttons.value,
          class: "mb-4"
        }, null, 8, ["modelValue", "buttons"]),
        createVNode(unref(_sfc_main$4), {
          modelValue: outline.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => outline.value = $event),
          label: "Outline?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$4), {
          modelValue: icon.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => icon.value = $event),
          label: "Icon?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$5), {
          onClick: reset,
          class: "mb-2",
          disabled: alerts.value.length >= alertsReference.length
        }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        }, 8, ["disabled"]),
        createVNode(unref(_sfc_main$1), {
          alerts: unref(computedAlerts),
          onRemove: remove,
          "sv-class": { "sv-alert": "mb-2" }
        }, null, 8, ["alerts"]),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
