import { _ as _sfc_main$2 } from "./chunks/Alert.67dc2959.js";
import { _ as _sfc_main$3 } from "./chunks/Button.b93f312c.js";
import { u as useCoreClass } from "./chunks/useCoreClass.4c1eebb8.js";
import { o as openBlock, c as createBlock, a as createVNode, b as createElementBlock, k as renderSlot, n as normalizeClass, e as ref, u as unref, w as withCtx, g as createBaseVNode, h as createTextVNode, i as createStaticVNode } from "./app.2556e307.js";
function render$1(_ctx, _cache) {
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
      d: "M12 4v16m8-8H4"
    })
  ]);
}
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
      d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    })
  ]);
}
const _sfc_main$1 = {
  props: {
    svClass: {
      type: Object
    }
  },
  setup(__props) {
    const props = __props;
    const getClasses = () => {
      return [
        useCoreClass("sv-strip", {
          svClass: props.svClass,
          include: true
        })
      ];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(getClasses())
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
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
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Action");
const _hoisted_4 = /* @__PURE__ */ createStaticVNode("", 5);
const __pageData = '{"title":"Strip","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/strip.md"}';
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
        createVNode(unref(_sfc_main$2), {
          variant: "info",
          message: message.value,
          class: "mb-4"
        }, null, 8, ["message"]),
        createVNode(unref(_sfc_main$1), null, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              icon: unref(render),
              size: "sm",
              onClick: _cache[0] || (_cache[0] = ($event) => click("refresh"))
            }, null, 8, ["icon"]),
            createVNode(unref(_sfc_main$3), {
              icon: unref(render$1),
              size: "sm",
              onClick: _cache[1] || (_cache[1] = ($event) => click("add"))
            }, null, 8, ["icon"]),
            createVNode(unref(_sfc_main$3), {
              size: "sm",
              onClick: _cache[2] || (_cache[2] = ($event) => click("action")),
              variant: "secondary"
            }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _hoisted_4
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };