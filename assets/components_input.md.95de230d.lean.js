import { _ as _sfc_main$1 } from "./chunks/Input.8e0d72d4.js";
import { c as createBlock, a as createVNode, o as openBlock, e as ref, b as createElementBlock, f as createBaseVNode, t as toDisplayString, u as unref, g as createTextVNode, h as createStaticVNode } from "./app.6385b3a4.js";
import "./chunks/useAlert.376fce85.js";
import "./chunks/useCoreClass.4c1eebb8.js";
import "./chunks/Alert.e855adf8.js";
function render$3(_ctx, _cache) {
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
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ]);
}
function render$2(_ctx, _cache) {
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
      d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    })
  ]);
}
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
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    }),
    createVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
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
      d: "M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
    })
  ]);
}
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "input",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createTextVNode("Input "),
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#input",
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
const _hoisted_6 = { class: "mb-4" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ createStaticVNode("", 2);
const _hoisted_10 = /* @__PURE__ */ createStaticVNode("", 4);
const __pageData = '{"title":"Input","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Label","slug":"label"},{"level":3,"title":"Icon","slug":"icon"},{"level":3,"title":"Alert","slug":"alert"},{"level":2,"title":"Properties","slug":"properties"},{"level":2,"title":"Classes","slug":"classes"}],"relativePath":"components/input.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const value = ref("");
    const iconEndClickCount = ref(0);
    const iconStartClickCount = ref(0);
    const iconStartClick = () => {
      iconStartClickCount.value += 1;
    };
    const iconEndClick = () => {
      iconEndClickCount.value += 1;
    };
    const getEndIcon = () => {
      return iconEndClickCount.value % 2 == 0 ? render$1 : render$2;
    };
    const getInputType = () => {
      return iconEndClickCount.value % 2 == 0 ? "text" : "password";
    };
    const message = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        createBaseVNode("p", null, "Value: " + toDisplayString(value.value), 1),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
          placeholder: "Please type something here"
        }, null, 8, ["modelValue"]),
        _hoisted_3,
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => value.value = $event),
          label: "Block layout"
        }, null, 8, ["modelValue"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2"
        }, null, 8, ["modelValue"]),
        _hoisted_4,
        createBaseVNode("div", _hoisted_6, [
          createTextVNode(" Icon start click count: " + toDisplayString(iconStartClickCount.value) + " ", 1),
          _hoisted_7,
          createTextVNode(" Icon end click count: " + toDisplayString(iconEndClickCount.value), 1)
        ]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => value.value = $event),
          label: "Block layout",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType()
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: value.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => value.value = $event),
          label: "Inline layout",
          layout: "inline",
          class: "mt-2",
          "icon-start": unref(render),
          "icon-start-clickable": "",
          onIconStartClick: iconStartClick,
          "icon-end": getEndIcon(),
          "icon-end-clickable": "",
          onIconEndClick: iconEndClick,
          type: getInputType()
        }, null, 8, ["modelValue", "icon-start", "icon-end", "type"]),
        _hoisted_8,
        createVNode(unref(_sfc_main$1), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => message.value = $event),
          label: "Block layout",
          alert: { message: "This is an info message." }
        }, null, 8, ["modelValue", "alert"]),
        createVNode(unref(_sfc_main$1), {
          modelValue: message.value,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => message.value = $event),
          label: "Inline layout",
          layout: "inline",
          alert: { message: "This is a danger message.", variant: "danger-state", icon: unref(render$3), dismissable: true },
          class: "mt-2"
        }, null, 8, ["modelValue", "alert"]),
        _hoisted_10
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
