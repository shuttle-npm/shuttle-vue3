import { _ as _sfc_main$1 } from "./chunks/Alert.18fe8eec.js";
import { _ as _sfc_main$2 } from "./chunks/Button.16897251.js";
import { r as render } from "./chunks/PlayIcon.686c7032.js";
import { e as ref, b as createElementBlock, a as createVNode, u as unref, f as createBaseVNode, k as withCtx, g as createTextVNode, h as createStaticVNode, o as openBlock } from "./app.f6d61257.js";
import "./chunks/useCoreClass.4c1eebb8.js";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "button",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Button "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#button",
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
const _hoisted_16 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_18 = { class: "flex flex-row items-center" };
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Extra Small");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Small");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Large");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("Extra Small");
const _hoisted_23 = /* @__PURE__ */ createTextVNode("Small");
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Large");
const _hoisted_25 = /* @__PURE__ */ createStaticVNode("", 7);
const __pageData = '{"title":"Button","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"With Icon","slug":"with-icon"},{"level":3,"title":"Size","slug":"size"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/button.md"}';
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
        _hoisted_16,
        createBaseVNode("div", _hoisted_18, [
          createVNode(unref(_sfc_main$2), {
            variant: "info",
            onClick: _cache[7] || (_cache[7] = ($event) => click("xs")),
            size: "xs"
          }, {
            default: withCtx(() => [
              _hoisted_19
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "primary",
            class: "ml-2",
            onClick: _cache[8] || (_cache[8] = ($event) => click("sm")),
            size: "sm"
          }, {
            default: withCtx(() => [
              _hoisted_20
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "secondary",
            class: "ml-2",
            onClick: _cache[9] || (_cache[9] = ($event) => click("lg")),
            size: "lg"
          }, {
            default: withCtx(() => [
              _hoisted_21
            ]),
            _: 1
          }),
          createVNode(unref(_sfc_main$2), {
            variant: "info",
            icon: unref(render),
            class: "ml-2",
            onClick: _cache[10] || (_cache[10] = ($event) => click("xs")),
            size: "xs"
          }, {
            default: withCtx(() => [
              _hoisted_22
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(unref(_sfc_main$2), {
            variant: "primary",
            icon: unref(render),
            class: "ml-2",
            onClick: _cache[11] || (_cache[11] = ($event) => click("sm")),
            size: "sm"
          }, {
            default: withCtx(() => [
              _hoisted_23
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(unref(_sfc_main$2), {
            variant: "secondary",
            icon: unref(render),
            class: "ml-2",
            onClick: _cache[12] || (_cache[12] = ($event) => click("lg")),
            size: "lg"
          }, {
            default: withCtx(() => [
              _hoisted_24
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        _hoisted_25
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
