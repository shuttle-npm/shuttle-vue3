import { _ as _sfc_main$2 } from "./chunks/Checkbox.413098e0.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, b as createElementBlock, t as toDisplayString, n as normalizeClass, d as createCommentVNode, e as ref, f as computed, a as createVNode, u as unref, g as createBaseVNode, h as createTextVNode, i as createStaticVNode } from "./app.64078bd2.js";
const _sfc_main$1 = {
  props: {
    message: {
      type: String
    },
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const getOptions = (include) => {
      return {
        svClass: props.svClass,
        include
      };
    };
    const getClasses = () => {
      return [
        useCoreClass("sv-validation-message", getOptions(true))
      ];
    };
    return (_ctx, _cache) => {
      return !!props.message ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(getClasses())
      }, toDisplayString(props.message), 3)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "validationmessage",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("ValidationMessage "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#validationmessage",
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
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 5);
const __pageData = '{"title":"ValidationMessage","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/validation-message.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const show = ref(true);
    const message = computed(() => show.value ? "This is a typical validation message such as 'The field may not be empty'." : "");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$2), {
          modelValue: show.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => show.value = $event),
          label: "Show message?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), { message: unref(message) }, null, 8, ["message"]),
        _hoisted_3
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
