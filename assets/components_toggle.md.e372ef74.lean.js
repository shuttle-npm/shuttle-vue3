import { _ as _sfc_main$1 } from "./chunks/Toggle.5179574e.js";
import { r as render } from "./chunks/ThumbUpIcon.57249ce0.js";
import { r as render$1 } from "./chunks/ThumbDownIcon.744ac7ca.js";
import { e as ref, f as computed, b as createElementBlock, g as createBaseVNode, t as toDisplayString, a as createVNode, u as unref, h as createTextVNode, i as createStaticVNode, o as openBlock } from "./app.64078bd2.js";
import "./chunks/useCoreClass.4c1eebb8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "toggle",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Toggle "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#toggle",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "examples",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Examples "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#examples",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "label",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Label "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#label",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h3", {
  id: "icon",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Icon "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#icon",
    "aria-hidden": "true"
  }, "#")
], -1);
const _hoisted_7 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = '{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Position","slug":"position"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/toggle.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref(false);
    const positionStart = ref(false);
    const getPosition = computed(() => {
      return positionStart.value ? "start" : "end";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event)
        }, null, 8, ["modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          label: "Use express delivery?"
        }, null, 8, ["modelValue"]),
        _hoisted_4,
        createVNode(unref(_sfc_main$1), {
          modelValue: positionStart.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => positionStart.value = $event),
          label: "Use toggle position 'start'?",
          class: "mb-4"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Use express delivery?",
          position: unref(getPosition)
        }, null, 8, ["modelValue", "position"]),
        _hoisted_6,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          label: "Use express delivery?",
          onIcon: unref(render),
          offIcon: unref(render$1)
        }, null, 8, ["modelValue", "onIcon", "offIcon"]),
        _hoisted_7,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => value.value = $event),
          label: "Is this disabled?",
          disabled: ""
        }, null, 8, ["modelValue"]),
        _hoisted_9
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
