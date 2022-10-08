import { _ as _sfc_main$3 } from "./chunks/Busy.330c0e95.js";
import { _ as _sfc_main$2 } from "./chunks/Checkbox.d2234ddc.js";
import { _ as _export_sfc, o as openBlock, b as createElementBlock, g as createBaseVNode, n as normalizeClass, i as createStaticVNode, e as ref, t as toDisplayString, a as createVNode, u as unref, c as createBlock, d as createCommentVNode, h as createTextVNode } from "./app.c06a58f8.js";
import "./chunks/useCoreClass.4c1eebb8.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  width: "57",
  height: "57",
  viewBox: "0 0 57 57",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g transform="translate(1 1)" stroke-width="2"><circle cx="5" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="27" cy="5" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="49" cy="50" r="5"><animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate></circle></g>', 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [
    createBaseVNode("g", {
      fill: "none",
      "fill-rule": "evenodd",
      class: normalizeClass(_ctx.class)
    }, _hoisted_3$1, 2)
  ]);
}
var IconSpinner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "strip",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Strip "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#strip",
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
const __pageData = '{"title":"Strip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/busy.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const custom = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, toDisplayString(_ctx.icon), 1),
        createVNode(unref(_sfc_main$2), {
          modelValue: custom.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => custom.value = $event),
          label: "Custom icon?",
          class: "mb-2"
        }, null, 8, ["modelValue"]),
        !custom.value ? (openBlock(), createBlock(unref(_sfc_main$3), { key: 0 })) : createCommentVNode("", true),
        !!custom.value ? (openBlock(), createBlock(unref(_sfc_main$3), {
          key: 1,
          icon: IconSpinner
        })) : createCommentVNode("", true),
        _hoisted_3
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
