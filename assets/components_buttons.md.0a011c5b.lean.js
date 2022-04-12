import { _ as _sfc_main$1 } from "./chunks/Alert.54744275.js";
import { _ as _sfc_main$2 } from "./chunks/Button.8cfae4e1.js";
import { c as createBlock, a as createVNode, o as openBlock, e as ref, b as createElementBlock, u as unref, f as createBaseVNode, w as withCtx, g as createTextVNode, h as createStaticVNode } from "./app.997cf0dd.js";
import "./chunks/useCoreClass.322213e7.js";
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
      d: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
    }),
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "buttons",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Buttons "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#buttons",
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
const _hoisted_3 = { class: "flex flex-row" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Primary");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Secondary");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Success");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Danger");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Warning");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Info");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Link");
const _hoisted_11 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_13 = { class: "flex flex-row" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Custom Icon");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Disabled");
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = '{"title":"Buttons","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/buttons.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const message = ref("You can click a button to change this message.");
    const click = (type) => {
      message.value = `You clicked the "${type}" button.`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createVNode(unref(_sfc_main$1), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createBaseVNode("div", _hoisted_3, [
          createVNode(unref(_sfc_main$2), {
            variant: "primary",
            onClick: _cache[0] || (_cache[0] = ($event) => click("primary"))
          }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "secondary",
            class: "ml-2",
            onClick: _cache[1] || (_cache[1] = ($event) => click("secondary"))
          }, {
            default: withCtx(() => [
              _hoisted_5
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "success",
            class: "ml-2",
            onClick: _cache[2] || (_cache[2] = ($event) => click("success"))
          }, {
            default: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "danger",
            class: "ml-2",
            onClick: _cache[3] || (_cache[3] = ($event) => click("danger"))
          }, {
            default: withCtx(() => [
              _hoisted_7
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "warning",
            class: "ml-2",
            onClick: _cache[4] || (_cache[4] = ($event) => click("warning"))
          }, {
            default: withCtx(() => [
              _hoisted_8
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "info",
            class: "ml-2",
            onClick: _cache[5] || (_cache[5] = ($event) => click("info"))
          }, {
            default: withCtx(() => [
              _hoisted_9
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "link",
            class: "ml-2",
            onClick: _cache[6] || (_cache[6] = ($event) => click("link"))
          }, {
            default: withCtx(() => [
              _hoisted_10
            ]),
            _: 1
          })
        ]),
        _hoisted_11,
        createBaseVNode("div", _hoisted_13, [
          createVNode(unref(_sfc_main$2), { icon: unref(render) }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(unref(_sfc_main$2), {
            disabled: true,
            class: "ml-2"
          }, {
            default: withCtx(() => [
              _hoisted_15
            ]),
            _: 1
          })
        ]),
        _hoisted_16
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };